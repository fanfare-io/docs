#!/bin/bash
# Smart Permission Hook for Claude Code
# Runs on PreToolUse to make intelligent allow/deny/ask decisions
#
# Output format (hookSpecificOutput for PreToolUse):
#   {
#     "hookSpecificOutput": {
#       "hookEventName": "PreToolUse",
#       "permissionDecision": "allow" | "deny" | "ask",
#       "permissionDecisionReason": "..."
#     }
#   }
#
# Exit codes:
#   0 = decision made (allow/ask/deny all use exit 0)
#   2 = can also be used for deny, but permissionDecision is sufficient

set -e

# Debug logging (set DEBUG_HOOK=1 to enable)
DEBUG_HOOK="${DEBUG_HOOK:-0}"
DEBUG_LOG="/tmp/smart-permission-debug.log"
debug() {
  [[ "$DEBUG_HOOK" == "1" ]] && echo "[$(date '+%H:%M:%S')] $*" >> "$DEBUG_LOG"
}

# ============================================================
# YOLO MODE
# ============================================================
# YOLO mode auto-approves unknown commands. Hard denials are still enforced.
# Uses CLD_YOLO env var (not CLAUDE_* because Claude Code filters those out).
YOLO_MODE="${CLD_YOLO:-0}"

# Debug: check for YOLO env var
debug "YOLO_MODE=$YOLO_MODE (CLD_YOLO=${CLD_YOLO:-unset})"

# Read input JSON from stdin
INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty')
TOOL_INPUT=$(echo "$INPUT" | jq -r '.tool_input // {}')
CWD=$(echo "$INPUT" | jq -r '.cwd // empty')

# Helper to output decision in correct format (uses jq for safe JSON encoding)
output_decision() {
  local decision="$1"
  local reason="$2"
  jq -n \
    --arg decision "$decision" \
    --arg reason "$reason" \
    '{
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: $decision,
        permissionDecisionReason: $reason
      }
    }'
}

# Helper to allow
allow() {
  output_decision "allow" "$1"
  exit 0
}

# Helper to deny
deny() {
  output_decision "deny" "$1"
  exit 0
}

# Helper to ask (shows permission prompt)
# In YOLO mode, auto-approves instead of asking
ask() {
  if [[ "$YOLO_MODE" == "1" ]]; then
    output_decision "allow" "YOLO mode: $1"
    exit 0
  fi
  output_decision "ask" "$1"
  exit 0
}

# ============================================================
# BASH COMMAND RULES
# ============================================================
if [[ "$TOOL_NAME" == "Bash" ]]; then
  COMMAND=$(echo "$TOOL_INPUT" | jq -r '.command // empty')
  debug "BASH: command='$COMMAND'"

  # Handle "cd /path && actual_command" pattern
  # Extract the actual command if this is a cd-prefixed compound command
  if [[ "$COMMAND" =~ ^cd[[:space:]]+([^&]+)[[:space:]]*\&\&[[:space:]]*(.+)$ ]]; then
    CD_PATH="${BASH_REMATCH[1]}"
    ACTUAL_COMMAND="${BASH_REMATCH[2]}"

    # Allow cd to safe directories, then evaluate the actual command
    if [[ "$CD_PATH" =~ ^/Users/mdodsworth/dev/ ]] || [[ "$CD_PATH" =~ ^/tmp/ ]]; then
      # Re-evaluate with the actual command (recursive-ish: update COMMAND and continue)
      COMMAND="$ACTUAL_COMMAND"
    else
      # cd to unknown location - ask for confirmation
      ask "cd to path outside known safe directories: $CD_PATH"
    fi
  fi

  # Extract first word (handles env var prefixes)
  FIRST_WORD=$(echo "$COMMAND" | awk '{print $1}')

  # --- ALWAYS DENY (even in YOLO mode) ---
  # Catastrophic operations (including sudo variants)
  [[ "$COMMAND" =~ (^|sudo[[:space:]]+)rm[[:space:]]+-rf[[:space:]]+[/~] ]] && deny "Destructive rm -rf on system paths"
  [[ "$COMMAND" =~ (^|sudo[[:space:]]+)rm[[:space:]]+-rf[[:space:]]+\$ ]] && deny "Destructive rm -rf on variable path"
  [[ "$COMMAND" =~ (^|sudo[[:space:]]+)rm[[:space:]]+-rf[[:space:]]+\.\.[[:space:]]*$ ]] && deny "Destructive rm -rf on parent directory"
  [[ "$COMMAND" =~ mkfs|fdisk ]] && deny "Disk formatting commands blocked"
  [[ "$COMMAND" =~ (^|sudo[[:space:]]+)(shutdown|reboot|halt|poweroff) ]] && deny "System control commands blocked"
  [[ "$COMMAND" =~ (^|sudo[[:space:]]+)dd[[:space:]]+if= ]] && deny "Raw disk write blocked"

  # Force push to main/master branches (dangerous even in YOLO mode)
  [[ "$COMMAND" =~ git[[:space:]]+push[[:space:]].*--force.*[[:space:]]+(main|master) ]] && deny "Force push to main/master blocked"
  [[ "$COMMAND" =~ git[[:space:]]+push[[:space:]].*[[:space:]]+(main|master).*--force ]] && deny "Force push to main/master blocked"
  [[ "$COMMAND" =~ git[[:space:]]+push[[:space:]]+-f[[:space:]].*[[:space:]]+(main|master) ]] && deny "Force push to main/master blocked"
  [[ "$COMMAND" =~ git[[:space:]]+push[[:space:]].*origin[[:space:]]+(main|master)[[:space:]]*--force ]] && deny "Force push to main/master blocked"

  # Blanket sudo denial (too risky even in YOLO mode)
  [[ "$COMMAND" =~ ^sudo[[:space:]] ]] && deny "Sudo commands blocked"

  # --- ALWAYS ASK ---
  # Git operations that modify remote or history
  [[ "$COMMAND" =~ ^git[[:space:]]+(push|rebase|reset|merge|cherry-pick|revert|branch[[:space:]]+-[dD]) ]] && ask "Git operation that modifies history/remote"

  # Any rm with -r or -rf flag (except node_modules which is safe)
  if [[ "$COMMAND" =~ ^rm[[:space:]].*-r ]]; then
    [[ "$COMMAND" =~ node_modules ]] && allow "Safe cleanup of node_modules"
    [[ "$COMMAND" =~ dist[[:space:]]*$ ]] && allow "Safe cleanup of dist directory"
    [[ "$COMMAND" =~ \.cache ]] && allow "Safe cleanup of cache directory"
    ask "Recursive delete operation"
  fi

  # File operations that can be destructive
  [[ "$FIRST_WORD" =~ ^(cp|mv)$ ]] && ask "File copy/move operation"

  # Production/deployment commands
  [[ "$COMMAND" =~ deploy|production|prod[[:space:]] ]] && ask "Potential production operation"

  # Docker operations that affect containers/images
  [[ "$COMMAND" =~ docker[[:space:]]+(rm|rmi|system[[:space:]]+prune|push) ]] && ask "Docker destructive/push operation"

  # --- ALWAYS ALLOW ---
  # Package managers
  [[ "$FIRST_WORD" =~ ^(pnpm|npm|yarn|bun|bunx|npx|cargo|pip)$ ]] && allow "Package manager command"

  # Environment variable prefixes (allow if the actual command is safe)
  if [[ "$FIRST_WORD" =~ = ]]; then
    # Extract the actual command after all env vars (handles multiple VAR=val pairs)
    ACTUAL_CMD=$(echo "$COMMAND" | sed -E 's/^([A-Za-z_][A-Za-z0-9_]*=[^ ]* )+//' | awk '{print $1}')
    [[ "$ACTUAL_CMD" =~ ^(pnpm|npm|yarn|bun|bunx|node|npx)$ ]] && allow "Env-prefixed package manager"
    # For other commands with env prefix, fall through to check the actual command
    FIRST_WORD="$ACTUAL_CMD"
  fi

  # Safe read-only commands
  [[ "$FIRST_WORD" =~ ^(ls|cat|head|tail|grep|rg|find|wc|sort|uniq|diff|file|which|type|pwd|echo|printf|date|uname|df|du)$ ]] && allow "Read-only command"

  # Safe directory/file creation
  [[ "$FIRST_WORD" =~ ^(mkdir|touch)$ ]] && allow "File/directory creation"

  # chmod is generally safe for dev work
  [[ "$FIRST_WORD" == "chmod" ]] && allow "Permission change"

  # Development tools (git read operations handled separately from write ops)
  [[ "$COMMAND" =~ ^git[[:space:]]+(status|diff|log|show|branch|fetch|stash|add|checkout|switch|restore) ]] && allow "Git read/local operation"
  [[ "$FIRST_WORD" =~ ^(gh|make|vitest|jest|tsc|eslint|prettier|biome)$ ]] && allow "Development tool"

  # AI/Codex tools (may be invoked via heredoc/pipe patterns)
  [[ "$COMMAND" =~ codex[[:space:]]+exec ]] && allow "Codex execution"

  # Docker read/run operations (destructive ones caught above)
  [[ "$COMMAND" =~ ^docker[[:space:]]+(ps|images|logs|inspect|run|exec|build|compose) ]] && allow "Docker operation"
  [[ "$FIRST_WORD" == "docker-compose" ]] && allow "Docker compose"

  # Shell utilities
  [[ "$FIRST_WORD" =~ ^(jq|sed|awk|cut|tr|xargs|tee|sleep|test|true|false)$ ]] && allow "Shell utility"

  # Simple rm (single file, no -r flag) - the -r cases are caught above
  if [[ "$COMMAND" =~ ^rm[[:space:]]+(-f[[:space:]]+)?[^-] ]]; then
    debug "BASH: matched single file rm rule"
    allow "Single file deletion"
  fi

  # AWS/Cloud CLIs (read operations only)
  [[ "$COMMAND" =~ ^(aws|gcloud)[[:space:]]+(describe|get|list|show) ]] && allow "Cloud CLI read operation"

  # Terraform safe operations
  [[ "$COMMAND" =~ ^terraform[[:space:]]+(init|fmt|validate|plan|output|state[[:space:]]+list|show|graph) ]] && allow "Terraform safe operation"

  # Fastmod (codemod tool)
  [[ "$FIRST_WORD" == "fastmod" ]] && allow "Codemod tool"

  # Python
  [[ "$FIRST_WORD" =~ ^(python|python3)$ ]] && allow "Python execution"

  # Process inspection (not kill)
  [[ "$FIRST_WORD" =~ ^(ps|lsof|top|htop)$ ]] && allow "Process inspection"

  # Network diagnostics
  [[ "$FIRST_WORD" =~ ^(ping|dig|nslookup|netstat|curl|wget)$ ]] && allow "Network diagnostic"

  # Archive operations
  [[ "$FIRST_WORD" =~ ^(tar|zip|unzip|gzip|gunzip)$ ]] && allow "Archive operation"

  # --- DEFAULT: ASK ---
  # Anything not explicitly allowed or denied gets a prompt
  ask "Unknown bash command - requesting confirmation"
fi

# ============================================================
# FILE OPERATION RULES (Read, Edit, Write)
# ============================================================
if [[ "$TOOL_NAME" =~ ^(Read|Edit|Write)$ ]]; then
  FILE_PATH=$(echo "$TOOL_INPUT" | jq -r '.file_path // empty')

  # --- ALWAYS DENY ---
  # System files (absolute paths)
  [[ "$FILE_PATH" =~ ^/etc/ ]] && deny "System config file"
  [[ "$FILE_PATH" =~ ^/var/ ]] && deny "System var file"

  # Secrets patterns (work for both relative and absolute paths)
  [[ "$FILE_PATH" =~ (^|/)\.env$ ]] && deny "Environment file with secrets"
  [[ "$FILE_PATH" =~ (^|/)\.env\. ]] && deny "Environment file with secrets"
  [[ "$FILE_PATH" =~ (^|/)credentials ]] && deny "Credentials file"
  [[ "$FILE_PATH" =~ (^|/)secrets ]] && deny "Secrets file"
  [[ "$FILE_PATH" =~ \.pem$ ]] && deny "Private key file"
  [[ "$FILE_PATH" =~ \.key$ ]] && deny "Private key file"
  [[ "$FILE_PATH" =~ (^|/)\.ssh/ ]] && deny "SSH directory"
  [[ "$FILE_PATH" =~ (^|/)\.aws/credentials ]] && deny "AWS credentials"
  [[ "$FILE_PATH" =~ (^|/)\.npmrc$ ]] && deny "NPM config may contain tokens"

  # --- ALWAYS ALLOW ---
  # Relative paths within project (most common case)
  [[ "$FILE_PATH" =~ ^(packages|src|app|lib|test|tests|scripts|docs|\.claude)/ ]] && allow "Project file"
  [[ "$FILE_PATH" =~ ^[a-zA-Z] ]] && [[ ! "$FILE_PATH" =~ ^/ ]] && allow "Relative project path"

  # Absolute paths in known safe locations
  [[ "$FILE_PATH" =~ ^/Users/mdodsworth/dev/ ]] && allow "Project file (absolute)"
  [[ "$FILE_PATH" =~ ^/Users/mdodsworth/\.claude/ ]] && allow "Claude config"
  [[ "$FILE_PATH" =~ ^/(private/)?tmp/ ]] && allow "Temp file"

  # --- DEFAULT: ASK ---
  ask "File operation outside known safe paths"
fi

# ============================================================
# MCP TOOLS - Generally allow (they have their own safety)
# ============================================================
if [[ "$TOOL_NAME" =~ ^mcp__ ]]; then
  allow "MCP tool"
fi

# ============================================================
# OTHER TOOLS - Default allow
# ============================================================
# Task, Glob, Grep, WebFetch, WebSearch, etc.
allow "Standard Claude tool"

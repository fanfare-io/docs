#!/bin/bash

# Use node@22 from homebrew if available (for environments without nvm)
if [ -d "/opt/homebrew/opt/node@22/bin" ]; then
  export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
fi

# Or try nvm if available
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  source "$NVM_DIR/nvm.sh"
  nvm use 2>/dev/null
fi

echo "Using Node $(node --version)"

# Run the dev server
exec pnpm dev "$@"

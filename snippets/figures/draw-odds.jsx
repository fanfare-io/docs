// Generated file. Edit the figure's source and rebuild; changes made here are overwritten.
export const DrawOddsFigure = () => {
  const root = useRef(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return undefined;
    const data = {"id":"concepts-distributions-draw-odds","mode":"draw","width":600,"geo":{"width":600,"origin":[306.58,161.31],"ux":[1.5013,0.8946],"uy":[-1.7891,0.7506],"uz":[0,-2.0226],"depth":[0.6634,0.5567,0.5],"seat0":-78,"pitch":11,"ty":-17,"gate0":-83.5,"stopDepth":32.33,"bin":[-100.5,-17],"shelf":[76,-17],"heights":{"seat":3,"bin":1.2,"shelf":3.4,"lift":22,"drop":34},"tokenH":3.2,"flapLift":9,"ruler0":-86,"hour":19,"dialFrom":135,"dialSpan":270},"tokens":"abcdefghijklz","seats":13,"start":{"entries":12,"winners":4,"keep":true,"lapses":0},"winnerRange":[1,6],"maxLapses":3,"opens":660,"drawAt":1020,"lateAt":1050,"lapseAt":1080,"states":[[[["a||0t11","x|a|0t11"],["az||0w00","z|a|1w00"]],[["az||0p10","xz|a|0p10"],["az||0p00","z|a|0p00"]],[["az||0p00","xz|a|0p00"],["az||0p00","z|a|0p00"]],[["az||0p00","xz|a|0p00"],["az||0p00","z|a|0p00"]],[["az||0p00","xz|a|0p00"],["az||0p00","z|a|0p00"]],[["az||0p00","xz|a|0p00"],["az||0p00","z|a|0p00"]]],[[["ba||0t11","xa|b|0t11"],["bza||0w00","za|b|1w00"]],[["ba||0t11","xa|b|0t11","xx|ba|0t11"],["baz||0w00","az|b|1w00","z|ba|1w00"]],[["baz||0p10","xaz|b|0p10","xxz|ba|0p10"],["baz||0p00","az|b|0p00","z|ba|0p00"]],[["baz||0p00","xaz|b|0p00","xxz|ba|0p00"],["baz||0p00","az|b|0p00","z|ba|0p00"]],[["baz||0p00","xaz|b|0p00","xxz|ba|0p00"],["baz||0p00","az|b|0p00","z|ba|0p00"]],[["baz||0p00","xaz|b|0p00","xxz|ba|0p00"],["baz||0p00","az|b|0p00","z|ba|0p00"]]],[[["bca||0t11","xca|b|0t11"],["bzca||0w00","zca|b|1w00"]],[["bca||0t11","xca|b|0t11","xxa|bc|0t11"],["bcza||0w00","cza|b|1w00","za|bc|2w00"]],[["bca||0t11","xca|b|0t11","xxa|bc|0t11","xxx|bca|0t11"],["bcaz||0w00","caz|b|1w00","az|bc|1w00","z|bca|1w00"]],[["bcaz||0p10","xcaz|b|0p10","xxaz|bc|0p10","xxxz|bca|0p10"],["bcaz||0p00","caz|b|0p00","az|bc|0p00","z|bca|0p00"]],[["bcaz||0p00","xcaz|b|0p00","xxaz|bc|0p00","xxxz|bca|0p00"],["bcaz||0p00","caz|b|0p00","az|bc|0p00","z|bca|0p00"]],[["bcaz||0p00","xcaz|b|0p00","xxaz|bc|0p00","xxxz|bca|0p00"],["bcaz||0p00","caz|b|0p00","az|bc|0p00","z|bca|0p00"]]],[[["dbca||0t11","xbca|d|0t11"],["dbzca||0w00","bzca|d|1w00"]],[["dbca||0t11","xbca|d|0t11","xxca|db|0t11"],["dbzca||0w00","bzca|d|1w00","zca|db|2w00"]],[["dbca||0t11","xbca|d|0t11","xxca|db|0t11","xxxa|dbc|0t11"],["dbcza||0w00","bcza|d|1w00","cza|db|2w00","za|dbc|2w00"]],[["dbca||0t11","xbca|d|0t11","xxca|db|0t11","xxxa|dbc|0t11"],["dbcaz||0w00","bcaz|d|1w00","caz|db|1w00","az|dbc|1w00"]],[["dbcaz||0p10","xbcaz|d|0p10","xxcaz|db|0p10","xxxaz|dbc|0p10"],["dbcaz||0p00","bcaz|d|0p00","caz|db|0p00","az|dbc|0p00"]],[["dbcaz||0p00","xbcaz|d|0p00","xxcaz|db|0p00","xxxaz|dbc|0p00"],["dbcaz||0p00","bcaz|d|0p00","caz|db|0p00","az|dbc|0p00"]]],[[["debca||0t11","xebca|d|0t11"],["debzca||0w00","ebzca|d|1w00"]],[["debca||0t11","xebca|d|0t11","xxbca|de|0t11"],["debzca||0w00","ebzca|d|1w00","bzca|de|2w00"]],[["debca||0t11","xebca|d|0t11","xxbca|de|0t11","xxxca|deb|0t11"],["debzca||0w00","ebzca|d|1w00","bzca|de|2w00","zca|deb|3w00"]],[["debca||0t11","xebca|d|0t11","xxbca|de|0t11","xxxca|deb|0t11"],["debcza||0w00","ebcza|d|1w00","bcza|de|2w00","cza|deb|2w00"]],[["debca||0t11","xebca|d|0t11","xxbca|de|0t11","xxxca|deb|0t11"],["debcaz||0w00","ebcaz|d|1w00","bcaz|de|1w00","caz|deb|1w00"]],[["debcaz||0p10","xebcaz|d|0p10","xxbcaz|de|0p10","xxxcaz|deb|0p10"],["debcaz||0p00","ebcaz|d|0p00","bcaz|de|0p00","caz|deb|0p00"]]],[[["debcaf||0t11","xebcaf|d|0t11"],["debzcaf||0w00","ebzcaf|d|1w00"]],[["debcaf||0t11","xebcaf|d|0t11","xxbcaf|de|0t11"],["debzcaf||0w00","ebzcaf|d|1w00","bzcaf|de|2w00"]],[["debcaf||0t11","xebcaf|d|0t11","xxbcaf|de|0t11","xxxcaf|deb|0t11"],["debzcaf||0w00","ebzcaf|d|1w00","bzcaf|de|2w00","zcaf|deb|3w00"]],[["debcaf||0t11","xebcaf|d|0t11","xxbcaf|de|0t11","xxxcaf|deb|0t11"],["debczaf||0w00","ebczaf|d|1w00","bczaf|de|2w00","czaf|deb|3w00"]],[["debcaf||0t11","xebcaf|d|0t11","xxbcaf|de|0t11","xxxcaf|deb|0t11"],["debcazf||0w00","ebcazf|d|1w00","bcazf|de|2w00","cazf|deb|2w00"]],[["debcaf||0t11","xebcaf|d|0t11","xxbcaf|de|0t11","xxxcaf|deb|0t11"],["debcafz||0w00","ebcafz|d|1w00","bcafz|de|1w00","cafz|deb|1w00"]]],[[["debgcaf||0t11","xebgcaf|d|0t11"],["debgzcaf||0w00","ebgzcaf|d|1w00"]],[["debgcaf||0t11","xebgcaf|d|0t11","xxbgcaf|de|0t11"],["debgzcaf||0w00","ebgzcaf|d|1w00","bgzcaf|de|2w00"]],[["debgcaf||0t11","xebgcaf|d|0t11","xxbgcaf|de|0t11","xxxgcaf|deb|0t11"],["debgzcaf||0w00","ebgzcaf|d|1w00","bgzcaf|de|2w00","gzcaf|deb|3w00"]],[["debgcaf||0t11","xebgcaf|d|0t11","xxbgcaf|de|0t11","xxxgcaf|deb|0t11"],["debgzcaf||0w00","ebgzcaf|d|1w00","bgzcaf|de|2w00","gzcaf|deb|3w00"]],[["debgcaf||0t11","xebgcaf|d|0t11","xxbgcaf|de|0t11","xxxgcaf|deb|0t11"],["debgczaf||0w00","ebgczaf|d|1w00","bgczaf|de|2w00","gczaf|deb|3w00"]],[["debgcaf||0t11","xebgcaf|d|0t11","xxbgcaf|de|0t11","xxxgcaf|deb|0t11"],["debgcazf||0w00","ebgcazf|d|1w00","bgcazf|de|2w00","gcazf|deb|2w00"]]],[[["debghcaf||0t11","xebghcaf|d|0t11"],["debgzhcaf||0w00","ebgzhcaf|d|1w00"]],[["debghcaf||0t11","xebghcaf|d|0t11","xxbghcaf|de|0t11"],["debgzhcaf||0w00","ebgzhcaf|d|1w00","bgzhcaf|de|2w00"]],[["debghcaf||0t11","xebghcaf|d|0t11","xxbghcaf|de|0t11","xxxghcaf|deb|0t11"],["debgzhcaf||0w00","ebgzhcaf|d|1w00","bgzhcaf|de|2w00","gzhcaf|deb|3w00"]],[["debghcaf||0t11","xebghcaf|d|0t11","xxbghcaf|de|0t11","xxxghcaf|deb|0t11"],["debgzhcaf||0w00","ebgzhcaf|d|1w00","bgzhcaf|de|2w00","gzhcaf|deb|3w00"]],[["debghcaf||0t11","xebghcaf|d|0t11","xxbghcaf|de|0t11","xxxghcaf|deb|0t11"],["debghzcaf||0w00","ebghzcaf|d|1w00","bghzcaf|de|2w00","ghzcaf|deb|3w00"]],[["debghcaf||0t11","xebghcaf|d|0t11","xxbghcaf|de|0t11","xxxghcaf|deb|0t11"],["debghczaf||0w00","ebghczaf|d|1w00","bghczaf|de|2w00","ghczaf|deb|3w00"]]],[[["debghcaif||0t11","xebghcaif|d|0t11"],["debgzhcaif||0w00","ebgzhcaif|d|1w00"]],[["debghcaif||0t11","xebghcaif|d|0t11","xxbghcaif|de|0t11"],["debgzhcaif||0w00","ebgzhcaif|d|1w00","bgzhcaif|de|2w00"]],[["debghcaif||0t11","xebghcaif|d|0t11","xxbghcaif|de|0t11","xxxghcaif|deb|0t11"],["debgzhcaif||0w00","ebgzhcaif|d|1w00","bgzhcaif|de|2w00","gzhcaif|deb|3w00"]],[["debghcaif||0t11","xebghcaif|d|0t11","xxbghcaif|de|0t11","xxxghcaif|deb|0t11"],["debgzhcaif||0w00","ebgzhcaif|d|1w00","bgzhcaif|de|2w00","gzhcaif|deb|3w00"]],[["debghcaif||0t11","xebghcaif|d|0t11","xxbghcaif|de|0t11","xxxghcaif|deb|0t11"],["debghzcaif||0w00","ebghzcaif|d|1w00","bghzcaif|de|2w00","ghzcaif|deb|3w00"]],[["debghcaif||0t11","xebghcaif|d|0t11","xxbghcaif|de|0t11","xxxghcaif|deb|0t11"],["debghczaif||0w00","ebghczaif|d|1w00","bghczaif|de|2w00","ghczaif|deb|3w00"]]],[[["debgjhcaif||0t11","xebgjhcaif|d|0t11"],["debgzjhcaif||0w00","ebgzjhcaif|d|1w00"]],[["debgjhcaif||0t11","xebgjhcaif|d|0t11","xxbgjhcaif|de|0t11"],["debgzjhcaif||0w00","ebgzjhcaif|d|1w00","bgzjhcaif|de|2w00"]],[["debgjhcaif||0t11","xebgjhcaif|d|0t11","xxbgjhcaif|de|0t11","xxxgjhcaif|deb|0t11"],["debgzjhcaif||0w00","ebgzjhcaif|d|1w00","bgzjhcaif|de|2w00","gzjhcaif|deb|3w00"]],[["debgjhcaif||0t11","xebgjhcaif|d|0t11","xxbgjhcaif|de|0t11","xxxgjhcaif|deb|0t11"],["debgzjhcaif||0w00","ebgzjhcaif|d|1w00","bgzjhcaif|de|2w00","gzjhcaif|deb|3w00"]],[["debgjhcaif||0t11","xebgjhcaif|d|0t11","xxbgjhcaif|de|0t11","xxxgjhcaif|deb|0t11"],["debgjzhcaif||0w00","ebgjzhcaif|d|1w00","bgjzhcaif|de|2w00","gjzhcaif|deb|3w00"]],[["debgjhcaif||0t11","xebgjhcaif|d|0t11","xxbgjhcaif|de|0t11","xxxgjhcaif|deb|0t11"],["debgjhzcaif||0w00","ebgjhzcaif|d|1w00","bgjhzcaif|de|2w00","gjhzcaif|deb|3w00"]]],[[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11"],["debgzjkhcaif||0w00","ebgzjkhcaif|d|1w00"]],[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11","xxbgjkhcaif|de|0t11"],["debgzjkhcaif||0w00","ebgzjkhcaif|d|1w00","bgzjkhcaif|de|2w00"]],[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11","xxbgjkhcaif|de|0t11","xxxgjkhcaif|deb|0t11"],["debgzjkhcaif||0w00","ebgzjkhcaif|d|1w00","bgzjkhcaif|de|2w00","gzjkhcaif|deb|3w00"]],[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11","xxbgjkhcaif|de|0t11","xxxgjkhcaif|deb|0t11"],["debgzjkhcaif||0w00","ebgzjkhcaif|d|1w00","bgzjkhcaif|de|2w00","gzjkhcaif|deb|3w00"]],[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11","xxbgjkhcaif|de|0t11","xxxgjkhcaif|deb|0t11"],["debgjzkhcaif||0w00","ebgjzkhcaif|d|1w00","bgjzkhcaif|de|2w00","gjzkhcaif|deb|3w00"]],[["debgjkhcaif||0t11","xebgjkhcaif|d|0t11","xxbgjkhcaif|de|0t11","xxxgjkhcaif|deb|0t11"],["debgjkzhcaif||0w00","ebgjkzhcaif|d|1w00","bgjkzhcaif|de|2w00","gjkzhcaif|deb|3w00"]]],[[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11"],["deblgzjkhcaif||0w00","eblgzjkhcaif|d|1w00"]],[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11","xxblgjkhcaif|de|0t11"],["deblgzjkhcaif||0w00","eblgzjkhcaif|d|1w00","blgzjkhcaif|de|2w00"]],[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11","xxblgjkhcaif|de|0t11","xxxlgjkhcaif|deb|0t11"],["deblgzjkhcaif||0w00","eblgzjkhcaif|d|1w00","blgzjkhcaif|de|2w00","lgzjkhcaif|deb|3w00"]],[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11","xxblgjkhcaif|de|0t11","xxxlgjkhcaif|deb|0t11"],["deblgzjkhcaif||0w00","eblgzjkhcaif|d|1w00","blgzjkhcaif|de|2w00","lgzjkhcaif|deb|3w00"]],[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11","xxblgjkhcaif|de|0t11","xxxlgjkhcaif|deb|0t11"],["deblgzjkhcaif||0w00","eblgzjkhcaif|d|1w00","blgzjkhcaif|de|2w00","lgzjkhcaif|deb|3w00"]],[["deblgjkhcaif||0t11","xeblgjkhcaif|d|0t11","xxblgjkhcaif|de|0t11","xxxlgjkhcaif|deb|0t11"],["deblgjzkhcaif||0w00","eblgjzkhcaif|d|1w00","blgjzkhcaif|de|2w00","lgjzkhcaif|deb|3w00"]]]],"arrivals":[[[663,"a",0]],[[663,"a",0],[1015,"ba",1]],[[663,"a",0],[820,"ca",2],[1015,"bca",1]],[[661,"d",3],[663,"da",0],[820,"dca",2],[1015,"dbca",1]],[[661,"d",3],[663,"da",0],[820,"dca",2],[920,"deca",4],[1015,"debca",1]],[[661,"d",3],[663,"da",0],[735,"daf",5],[820,"dcaf",2],[920,"decaf",4],[1015,"debcaf",1]],[[661,"d",3],[663,"da",0],[735,"daf",5],[820,"dcaf",2],[870,"dgcaf",6],[920,"degcaf",4],[1015,"debgcaf",1]],[[661,"d",3],[663,"da",0],[735,"daf",5],[820,"dcaf",2],[870,"dgcaf",6],[920,"degcaf",4],[970,"deghcaf",7],[1015,"debghcaf",1]],[[661,"d",3],[663,"da",0],[690,"dai",8],[735,"daif",5],[820,"dcaif",2],[870,"dgcaif",6],[920,"degcaif",4],[970,"deghcaif",7],[1015,"debghcaif",1]],[[661,"d",3],[663,"da",0],[690,"dai",8],[735,"daif",5],[785,"djaif",9],[820,"djcaif",2],[870,"dgjcaif",6],[920,"degjcaif",4],[970,"degjhcaif",7],[1015,"debgjhcaif",1]],[[661,"d",3],[663,"da",0],[690,"dai",8],[735,"daif",5],[785,"djaif",9],[820,"djcaif",2],[870,"dgjcaif",6],[920,"degjcaif",4],[950,"degjkcaif",10],[970,"degjkhcaif",7],[1015,"debgjkhcaif",1]],[[661,"d",3],[663,"da",0],[690,"dai",8],[735,"daif",5],[765,"dlaif",11],[785,"dljaif",9],[820,"dljcaif",2],[870,"dlgjcaif",6],[920,"delgjcaif",4],[950,"delgjkcaif",10],[970,"delgjkhcaif",7],[1015,"deblgjkhcaif",1]]]};
    const start = function start(root, data) {
  const stage = root.querySelector(".iso-stage");
  const svg = stage.querySelector("svg");
  Array.from(svg.querySelectorAll("use")).forEach((use) => {
  const source = svg.querySelector(use.getAttribute("href"));
  if (!source) return;
  const copy = source.cloneNode(true);
  copy.removeAttribute("id");
  use.replaceWith(copy);
  });
  const part = (name) => svg.querySelector('[data-part="' + name + '"]');
  const lineLayer = svg.querySelector('[data-layer="line"]');
  const air = svg.querySelector('[data-layer="air"]');
  const binLayer = svg.querySelector('[data-layer="bin"]');
  const gates = [part("gate-back"), part("gate-bar"), part("gate-front")];
  const flap = part("flap");
  const needle = part("needle");
  const cursor = part("cursor");
  const weight = part("weight");
  const sleeve = part("sleeve");
  const stopPart = part("stop");
  const pins = Array.from(svg.querySelectorAll("[data-pin]"));
  const lostMarks = Array.from(svg.querySelectorAll("[data-lost]"));
  const readout = root.querySelector("[data-readout]");
  const rows = root.querySelector(".ffig-rows");
  const items = Array.from(rows.children);
  const control = (name) => root.querySelector('[data-control="' + name + '"]');
  const shown = (name) => root.querySelector('[data-show="' + name + '"]');
  const still = window.matchMedia("(prefers-reduced-motion: reduce)");
  const G = data.geo;
  const H = G.heights;
  const isDraw = data.mode === "draw";
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const ease = (from, to, dt, tau) => from + (to - from) * (1 - Math.exp(-dt / tau));
  const two = (value) => String(value).padStart(2, "0");
  const timeOf = (minutes) => two(Math.floor(minutes / 60)) + ":" + two(Math.floor(minutes % 60));
  const screen = (x, y, z) => [x * G.ux[0] + y * G.uy[0] + z * G.uz[0], x * G.ux[1] + y * G.uy[1] + z * G.uz[1]];
  const place = (element, x, y, z) => {
  const at = screen(x, y, z);
  element.setAttribute("transform", "translate(" + at[0].toFixed(2) + " " + at[1].toFixed(2) + ")");
  };
  const seatX = (seat) => G.seat0 + seat * G.pitch;
  const gateXOf = (winners) => G.gate0 + winners * G.pitch;
  const tokens = Array.from(svg.querySelectorAll("[data-token]")).map((element) => ({
  element,
  x: 0, y: G.ty, z: H.drop, o: 0,
  to: null, phase: "rest", layer: "", out: false, shownOpacity: -1,
  }));
  const tokenIndex = (char) => data.tokens.indexOf(char);
  let layout = null;
  let gateX = 0;
  let gateTarget = 0;
  let flapZ = 0;
  let flapOpen = false;
  let dial = 0;
  let dialTarget = 0;
  let clockX = 0;
  let clockTarget = 0;
  let lift = 0;
  let liftTarget = 0;
  let frame = 0;
  let last = 0;
  let visible = false;
  let order = "";
  const moveTo = (token, layer) => {
  if (token.layer === layer) return;
  token.layer = layer;
  (layer === "air" ? air : layer === "bin" ? binLayer : lineLayer).appendChild(token.element);
  order = "";
  };
  const steady = (pairs) => {
  pairs.sort((a, b) => a[1] - b[1]);
  const lengths = pairs.map(() => 1);
  const back = pairs.map(() => -1);
  pairs.forEach((pair, index) => {
  for (let before = 0; before < index; before += 1) {
  if (pairs[before][2] < pair[2] && lengths[before] + 1 > lengths[index]) {
  lengths[index] = lengths[before] + 1;
  back[index] = before;
  }
  }
  });
  let best = -1;
  lengths.forEach((length, index) => {
  if (best < 0 || length > lengths[best]) best = index;
  });
  const keep = new Set();
  for (let index = best; index >= 0; index = back[index]) keep.add(pairs[index][0]);
  return keep;
  };
  function show(next, instant) {
  const targets = tokens.map(() => null);
  next.seats.forEach((index, seat) => {
  if (index >= 0) targets[index] = { x: seatX(seat), y: G.ty, z: H.seat, where: "line", seat };
  });
  next.bin.forEach((index, slot) => {
  targets[index] = { x: G.bin[0], y: G.bin[1], z: H.bin + slot * G.tokenH, where: "bin", seat: -10 + slot };
  });
  if (next.shelf >= 0) targets[next.shelf] = { x: G.shelf[0], y: G.shelf[1], z: H.shelf, where: "line", seat: 100 };
  const pairs = [];
  tokens.forEach((token, index) => {
  const to = targets[index];
  if (to && token.to && token.to.where === "line" && to.where === "line" && token.phase !== "rise") pairs.push([index, token.to.seat, to.seat]);
  });
  const keep = steady(pairs);
  tokens.forEach((token, index) => {
  const to = targets[index];
  const was = token.to;
  token.out = next.out.indexOf(index) >= 0;
  if (token.out) token.element.setAttribute("data-out", "");
  else token.element.removeAttribute("data-out");
  if (instant || still.matches) {
  token.to = to;
  if (to) {
  token.x = to.x;
  token.y = to.y;
  token.z = to.z;
  token.o = 1;
  token.phase = "rest";
  moveTo(token, to.where);
  } else {
  token.o = 0;
  token.phase = "gone";
  }
  return;
  }
  token.to = to;
  if (!to) {
  if (was) token.phase = "rise";
  return;
  }
  if (!was || token.phase === "gone" || token.phase === "rise") {
  token.x = to.x;
  token.y = to.y;
  if (token.phase === "gone" || !was) {
  token.z = H.drop;
  token.o = 0;
  }
  token.phase = "drop";
  moveTo(token, "air");
  return;
  }
  if (was.x === to.x && was.y === to.y && was.z === to.z && token.phase === "rest") return;
  if (keep.has(index) && was.where === "line" && to.where === "line") token.phase = "slide";
  else {
  token.phase = "up";
  moveTo(token, "air");
  }
  });
  gateTarget = gateXOf(next.winners);
  flapOpen = next.flapOpen;
  dialTarget = next.dial;
  clockTarget = G.ruler0 + ((next.clock - data.opens) / 60) * G.hour;
  liftTarget = next.lift || 0;
  pins.forEach((pin) => {
  if (next.pins.indexOf(pin.getAttribute("data-pin")) >= 0) pin.setAttribute("data-on", "");
  else pin.removeAttribute("data-on");
  });
  lostMarks.forEach((mark, seat) => {
  if (next.lost.indexOf(seat) >= 0) mark.setAttribute("data-on", "");
  else mark.removeAttribute("data-on");
  });
  if (instant || still.matches) {
  gateX = gateTarget;
  flapZ = flapOpen ? G.flapLift : 0;
  dial = dialTarget;
  clockX = clockTarget;
  lift = liftTarget;
  }
  layout = next;
  run();
  if (!visible) draw(0);
  }
  function step(dt) {
  let busy = false;
  gateX = ease(gateX, gateTarget, dt, 0.16);
  if (Math.abs(gateX - gateTarget) < 0.05) gateX = gateTarget;
  const gateMoving = gateX !== gateTarget;
  let crossing = false;
  tokens.forEach((token) => {
  if (token.phase === "slide" && token.to && (token.x - gateX) * (token.to.x - gateX) < 0) crossing = true;
  if (token.phase === "slide" && token.to && Math.abs(token.x - gateX) < 5) crossing = true;
  });
  const flapUp = flapOpen || gateMoving || crossing;
  flapZ = ease(flapZ, flapUp ? G.flapLift : 0, dt, 0.07);
  if (Math.abs(flapZ - (flapUp ? G.flapLift : 0)) < 0.03) flapZ = flapUp ? G.flapLift : 0;
  const flapClear = flapZ > G.flapLift * 0.75;
  tokens.forEach((token) => {
  const to = token.to;
  if (token.phase === "slide") {
  const blocked = !flapClear && (token.x - gateX) * (to.x - gateX) < 0;
  if (!blocked) token.x = ease(token.x, to.x, dt, 0.2);
  if (Math.abs(token.x - to.x) < 0.03) {
  token.x = to.x;
  token.phase = "rest";
  }
  } else if (token.phase === "up") {
  token.z = ease(token.z, H.lift + 0.5, dt, 0.09);
  if (token.z > H.lift - 0.4) token.phase = "across";
  } else if (token.phase === "across") {
  token.x = ease(token.x, to.x, dt, 0.16);
  token.y = ease(token.y, to.y, dt, 0.16);
  if (Math.abs(token.x - to.x) < 0.25 && Math.abs(token.y - to.y) < 0.25) {
  token.x = to.x;
  token.y = to.y;
  token.phase = "down";
  }
  } else if (token.phase === "down" || token.phase === "drop") {
  token.z = ease(token.z, to.z, dt, token.phase === "drop" ? 0.13 : 0.09);
  token.o = ease(token.o, 1, dt, 0.08);
  if (token.z < to.z + 7) moveTo(token, to.where);
  if (Math.abs(token.z - to.z) < 0.03) {
  token.z = to.z;
  token.o = 1;
  token.phase = "rest";
  }
  } else if (token.phase === "rise") {
  moveTo(token, "air");
  token.z = ease(token.z, H.drop, dt, 0.12);
  token.o = ease(token.o, 0, dt, 0.08);
  if (token.o < 0.02) {
  token.o = 0;
  token.phase = "gone";
  }
  }
  if (token.phase !== "rest" && token.phase !== "gone") busy = true;
  });
  dial = ease(dial, dialTarget, dt, 0.22);
  if (Math.abs(dial - dialTarget) < 0.0005) dial = dialTarget;
  clockX = ease(clockX, clockTarget, dt, 0.18);
  if (Math.abs(clockX - clockTarget) < 0.03) clockX = clockTarget;
  lift = ease(lift, liftTarget, dt, 0.14);
  if (Math.abs(lift - liftTarget) < 0.01) lift = liftTarget;
  return busy || gateMoving || flapZ !== (flapUp ? G.flapLift : 0) || dial !== dialTarget || clockX !== clockTarget || lift !== liftTarget;
  }
  function draw() {
  tokens.forEach((token) => {
  place(token.element, token.x, token.y, token.z);
  const opacity = Math.round(token.o * 100) / 100;
  if (opacity !== token.shownOpacity) {
  token.shownOpacity = opacity;
  token.element.style.opacity = String(opacity);
  token.element.style.display = opacity <= 0 ? "none" : "";
  }
  });
  gates.forEach((gate) => place(gate, gateX, 0, 0));
  place(flap, 0, 0, flapZ);
  needle.setAttribute("transform", "rotate(" + (G.dialFrom + dial * G.dialSpan).toFixed(2) + ")");
  place(cursor, clockX, 0, 0);
  if (weight) place(weight, 0, 0, lift * G.tokenH);
  if (sleeve) place(sleeve, 0, 0, (lift * G.tokenH) / 2);
  const keyed = [];
  tokens.forEach((token, index) => {
  if (token.layer === "line") keyed.push([token.x * G.depth[0] + token.y * G.depth[1], token.element, "t" + index]);
  });
  keyed.push([gateX * G.depth[0] + G.ty * G.depth[1] + 0.01, gates[1], "g"]);
  keyed.push([G.stopDepth, stopPart, "s"]);
  keyed.sort((a, b) => a[0] - b[0]);
  const now = keyed.map((entry) => entry[2]).join(",");
  if (now !== order) {
  order = now;
  keyed.forEach((entry) => lineLayer.appendChild(entry[1]));
  }
  const airborne = tokens.filter((token) => token.layer === "air").sort((a, b) => a.z - b.z || a.x * G.depth[0] - b.x * G.depth[0]);
  airborne.forEach((token, index) => {
  if (air.children[index] !== token.element) air.appendChild(token.element);
  });
  }
  function tick(time) {
  const dt = last ? Math.min((time - last) / 1000, 1 / 30) : 1 / 60;
  last = time;
  if (touring) tour(dt);
  if (running) runner(dt);
  const moving = step(dt);
  draw();
  frame = visible && (moving || touring || running) ? window.requestAnimationFrame(tick) : 0;
  }
  function run() {
  if (!frame && visible) {
  last = 0;
  frame = window.requestAnimationFrame(tick);
  }
  }
  const store = (window.__ffigState = window.__ffigState || {});
  const saved = store[data.id];
  const settings = Object.assign({}, data.start, saved || {});
  const save = () => {
  store[data.id] = Object.assign({}, settings);
  };
  let touring = false;
  let running = false;
  let tourClock = 0;
  let tourStep = -1;
  let runClock = 0;
  let engaged = false;
  let timer = 0;
  const stateOf = () => data.states[settings.entries - 1][settings.winners - 1][settings.keep ? 1 : 0][settings.lapses];
  const parse = (code) => {
  const parts = code.split("|");
  return { line: parts[0], bin: parts[1], replaced: Number(parts[2][0]), late: parts[2][1], out: parts[2][2] === "1", filledAtDraw: parts[2][3] === "1" };
  };
  const seatsOf = (line) => Array.from({ length: data.seats }, (_, seat) => (seat < line.length ? tokenIndex(line[seat]) : -1));
  const lostOf = (line) => Array.from(line).map((char, seat) => (char === "x" ? seat : -1)).filter((seat) => seat >= 0);
  const pinsOf = (count, late) => data.tokens.slice(0, count).split("").concat(late ? [data.tokens[data.tokens.length - 1]] : []);
  const chanceText = (entries, winners) => Math.round((100 * Math.min(entries, winners)) / entries) + "%";
  function drawLayout(state, extra) {
  const winners = settings.winners;
  const out = [];
  if (state.out) {
  for (let seat = winners; seat < state.line.length; seat += 1) {
  const index = tokenIndex(state.line[seat]);
  if (index >= 0) out.push(index);
  }
  }
  const lateIndex = data.tokens.length - 1;
  return Object.assign(
  {
  seats: seatsOf(state.line),
  bin: Array.from(state.bin).map(tokenIndex),
  shelf: state.late === "t" ? lateIndex : -1,
  winners,
  flapOpen: false,
  out,
  lost: lostOf(state.line),
  clock: settings.lapses > 0 ? data.lapseAt : data.lateAt,
  dial: Math.min(settings.entries, winners) / settings.entries,
  pins: pinsOf(settings.entries, true),
  },
  extra || {},
  );
  }
  function describeDraw(state, focus) {
  const entries = settings.entries;
  const winners = settings.winners;
  const lapses = settings.lapses;
  const picked = Math.min(entries, winners);
  const seats = state.line.slice(0, winners);
  const waiting = Array.from(state.line.slice(winners)).filter((char) => char !== "." && char !== "x").length;
  const lost = Array.from(seats).filter((char) => char === "x").length;
  const chance = chanceText(entries, winners);
  const texts = [
  [entries === 1 ? "1 entry" : entries + " entries", "Each gets a random place in the order, whenever it entered."],
  [
  winners === 1 ? "1 place" : winners + " places",
  entries > winners
  ? "The first " + winners + " in the order win: " + picked + " in " + entries + ", " + chance + "."
  : entries === winners
  ? "Every entry wins: " + entries + " in " + entries + "."
  : (entries === 1 ? "The only entry wins" : "All " + entries + " entries win") + ", and " + (winners - entries) + (winners - entries === 1 ? " place is" : " places are") + " still free.",
  ],
  [
  state.late === "t" ? "Turned away" : state.late === "p" ? "Picked" : "Waiting",
  state.late === "t"
  ? "The draw filled at Draw at, so it turns new entries away."
  : state.late === "p"
  ? "A place was free, so the late entry wins."
  : "It enters and waits in line, with its own random place.",
  ],
  [
  lapses === 0 ? "None yet" : lapses + " of " + picked,
  lapses === 0
  ? "Every winner has a payment window to check out. Press Lapse to let one run out."
  : settings.keep
  ? (state.replaced === 0
  ? "Nobody is left waiting, so " + (lapses === 1 ? "the place stays" : "the places stay") + " free."
  : (state.replaced === 1 ? "A replacement was" : state.replaced + " replacements were") + " picked from the entries still waiting" +
  (lapses > state.replaced ? "; " + (lapses - state.replaced) + " left free, nobody waiting." : ".")) +
  " A lapsed winner cannot enter again."
  : "Not replaced: " + (lapses === 1 ? "that place is" : "those places are") + " lost to the draw. A lapsed winner cannot enter again.",
  ],
  [
  state.out ? "Filled" : "Open",
  state.out
  ? waiting === 0
  ? "The draw has filled, and nobody is left waiting."
  : "The draw has filled: " + (waiting === 1 ? "the entry" : "the " + waiting + " entries") + " still waiting " + (waiting === 1 ? "is" : "are") + " not selected."
  : settings.keep
  ? "Entry stays open until every winner has paid, or until Closes."
  : "Entry stays open until every place is given out, or until Closes.",
  ],
  ];
  texts.forEach((text, index) => {
  const item = items[index];
  if (item.children[2].textContent !== text[0]) item.children[2].textContent = text[0];
  const verdict = item.querySelector("[data-text]") || item.children[3];
  if (verdict.textContent !== text[1]) verdict.textContent = text[1];
  if (index === focus) item.setAttribute("data-sel", "");
  else item.removeAttribute("data-sel");
  });
  const unfilled = lapses - state.replaced;
  const after =
  lapses === 0
  ? ""
  : settings.keep
  ? " · " + (state.replaced > 0 ? state.replaced + " replaced" + (unfilled > 0 ? ", " : "") : "") + (unfilled > 0 ? unfilled + " left free" : "")
  : " · " + lost + " lost";
  readout.textContent = chance + " · " + (winners === 1 ? "1 place, " : winners + " places, ") + (entries === 1 ? "1 entry" : entries + " entries") + after;
  shown("entries").textContent = String(entries);
  shown("winners").textContent = String(winners);
  const lapse = control("lapse");
  const canLapse = settings.lapses < data.maxLapses && settings.lapses < picked;
  lapse.disabled = !canLapse;
  control("reset").disabled = settings.lapses === 0;
  }
  function showDraw(instant) {
  const state = parse(stateOf());
  show(drawLayout(state), instant);
  describeDraw(state, settings.lapses > 0 ? 3 : 1);
  }
  function tourPlan() {
  const arrivals = data.arrivals[settings.entries - 1];
  const steps = [];
  const empty = { seats: [], bin: [], shelf: -1, winners: settings.winners, flapOpen: true, out: [], lost: [], clock: data.opens, dial: 0, pins: [] };
  steps.push({ at: 0, layout: empty, focus: 0 });
  arrivals.forEach((entry, index) => {
  steps.push({
  at: 1 + (index + 1) * (6 / arrivals.length),
  layout: Object.assign({}, empty, { seats: seatsOf(entry[1]), clock: entry[0], pins: data.tokens.slice(0, settings.entries).split("").filter((char, slot) => arrivals.slice(0, index + 1).some((arrival) => arrival[2] === slot)) }),
  focus: 0,
  });
  });
  const zero = parse(data.states[settings.entries - 1][settings.winners - 1][settings.keep ? 1 : 0][0]);
  const drawn = Object.assign({}, empty, {
  seats: seatsOf(arrivals[arrivals.length - 1][1]),
  flapOpen: false,
  clock: data.drawAt,
  dial: Math.min(settings.entries, settings.winners) / settings.entries,
  pins: pinsOf(settings.entries, false),
  out: [],
  });
  if (zero.filledAtDraw) {
  for (let seat = settings.winners; seat < settings.entries; seat += 1) drawn.out.push(drawn.seats[seat]);
  }
  steps.push({ at: 8, layout: drawn, focus: 1 });
  const saved = settings.lapses;
  settings.lapses = 0;
  steps.push({ at: 10, layout: drawLayout(zero), focus: 2, state: zero });
  const picked = Math.min(settings.entries, settings.winners);
  if (picked > 0) {
  settings.lapses = 1;
  const one = parse(stateOf());
  steps.push({ at: 12, layout: drawLayout(one), focus: 3, state: one, lapses: 1 });
  }
  settings.lapses = saved;
  steps.push({ at: 17.5, end: true });
  return steps;
  }
  let plan = [];
  function tour(dt) {
  tourClock += dt;
  let index = -1;
  plan.forEach((entry, at) => {
  if (tourClock >= entry.at) index = at;
  });
  if (plan[index] && plan[index].end) {
  tourClock = 0;
  index = 0;
  tourStep = -1;
  }
  if (index !== tourStep && plan[index]) {
  tourStep = index;
  const entry = plan[index];
  show(entry.layout, false);
  items.forEach((item, row) => {
  if (row === entry.focus) item.setAttribute("data-sel", "");
  else item.removeAttribute("data-sel");
  });
  if (entry.state) {
  const kept = settings.lapses;
  settings.lapses = entry.lapses || 0;
  describeDraw(entry.state, entry.focus);
  settings.lapses = kept;
  }
  const time = timeOf(entry.layout.clock);
  const arrived = entry.layout.pins.length;
  readout.textContent =
  entry.focus === 0
  ? time + " · " + arrived + (arrived === 1 ? " entry" : " entries")
  : entry.focus === 1
  ? "Draw at · " + Math.min(settings.entries, settings.winners) + " of " + settings.entries + " win"
  : entry.focus === 2
  ? timeOf(data.lateAt) + " · late entry " + (entry.state.late === "t" ? "turned away" : entry.state.late === "p" ? "picked" : "waits")
  : timeOf(data.lapseAt) + " · a winner lapses";
  }
  }
  const levelOf = () => data.levels[settings.points / data.step];
  const runsOf = () => data.runs[levelOf()];
  const outcome = (run) => Number(data.outcomes[levelOf()][run]);
  function loyaltyLayout(runIndex) {
  const ranks = runsOf();
  const rankB = parseInt(ranks[runIndex * 2], 36);
  const rankA = parseInt(ranks[runIndex * 2 + 1], 36);
  const seats = [];
  let crowd = 2;
  for (let seat = 0; seat < data.entrants; seat += 1) {
  if (seat === rankB) seats.push(0);
  else if (seat === rankA) seats.push(1);
  else {
  seats.push(crowd);
  crowd += 1;
  }
  }
  const level = levelOf();
  return {
  seats,
  bin: [],
  shelf: -1,
  winners: data.winners,
  flapOpen: false,
  out: [],
  lost: [],
  clock: data.drawAt,
  dial: data.chances[level][0],
  pins: data.tokens.split(""),
  lift: data.weights[level] - 1,
  };
  }
  const percent = (value) => Math.round(value * 100) + "%";
  const grouped = (value) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  function describeLoyalty() {
  const level = levelOf();
  const done = settings.run + 1;
  let wonB = 0;
  let wonA = 0;
  let ahead = 0;
  for (let run = 0; run < done; run += 1) {
  const bits = outcome(run);
  wonB += bits & 1;
  wonA += (bits >> 1) & 1;
  ahead += (bits >> 2) & 1;
  }
  const w = data.weights[level];
  const shares = (value) => (value === 1 ? "1 share" : value.toFixed(2).replace(/0$/, "").replace(/\.0$/, "") + " shares");
  const draws = done === 1 ? "1 draw" : done + " draws";
  const bits = outcome(settings.run);
  const texts = [
  [grouped(settings.points) + " points", shares(w) + ". Won " + wonB + " of " + draws + " (chance " + percent(data.chances[level][0]) + "). " + (bits & 1 ? "Won this draw." : "Missed this draw.")],
  ["0 points", "1 share. Won " + wonA + " of " + draws + " (chance " + percent(data.chances[level][1]) + "). " + (bits & 2 ? "Won this draw." : "Missed this draw.")],
  ["0 points each", "1 share each, like a guest."],
  [ahead + " of " + done, "B came before A in " + ahead + " of " + draws + "; the weights give B " + percent(data.chances[level][2]) + ", never a certainty."],
  ];
  texts.forEach((text, index) => {
  const item = items[index];
  if (item.children[2].textContent !== text[0]) item.children[2].textContent = text[0];
  const verdict = item.querySelector("[data-text]") || item.children[3];
  if (verdict.textContent !== text[1]) verdict.textContent = text[1];
  });
  const bar = shown("bar");
  if (bar) bar.style.transform = "scaleX(" + (w / 2).toFixed(3) + ")";
  readout.textContent = "Draw " + done + " · B " + (bits & 1 ? "wins" : "misses") + " · chance " + percent(data.chances[level][0]);
  shown("points").textContent = grouped(settings.points);
  const button = control("run");
  button.textContent = running ? "Pause" : done >= data.runCount ? "Run again" : "Run the draw";
  button.setAttribute("aria-pressed", running ? "true" : "false");
  control("reset").disabled = settings.run === 0 && !running;
  }
  function showLoyalty(instant) {
  show(loyaltyLayout(settings.run), instant);
  describeLoyalty();
  }
  function runner(dt) {
  runClock += dt;
  if (runClock < (touring ? 2.4 : 1.25)) return;
  runClock = 0;
  if (settings.run + 1 >= data.runCount) {
  running = false;
  describeLoyalty();
  return;
  }
  settings.run += 1;
  if (!touring) save();
  showLoyalty(false);
  }
  const refresh = (instant) => (isDraw ? showDraw(instant) : showLoyalty(instant));
  const take = () => {
  const was = touring;
  touring = false;
  window.clearTimeout(timer);
  rows.setAttribute("aria-live", "polite");
  if (was) {
  if (!isDraw) running = false;
  refresh(false);
  }
  };
  const rest = (delay) => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
  if (still.matches || engaged || root.contains(document.activeElement) || running) return;
  touring = true;
  tourClock = 0;
  tourStep = -1;
  runClock = 0;
  rows.setAttribute("aria-live", "off");
  if (isDraw) plan = tourPlan();
  else running = true;
  run();
  }, delay);
  };
  const onInput = (event) => {
  const name = event.target.getAttribute("data-control");
  if (!name) return;
  take();
  if (name === "entries") {
  settings.entries = Number(event.target.value);
  settings.lapses = Math.min(settings.lapses, Math.min(settings.entries, settings.winners), data.maxLapses);
  } else if (name === "winners") {
  settings.winners = Number(event.target.value);
  settings.lapses = Math.min(settings.lapses, Math.min(settings.entries, settings.winners), data.maxLapses);
  } else if (name === "keep") {
  settings.keep = event.target.checked;
  } else if (name === "points") {
  settings.points = Number(event.target.value);
  } else return;
  save();
  refresh(false);
  };
  const onClick = (event) => {
  const button = event.target.closest ? event.target.closest("[data-control]") : null;
  if (!button || button.tagName !== "BUTTON") return;
  const name = button.getAttribute("data-control");
  take();
  if (name === "lapse") {
  settings.lapses = Math.min(settings.lapses + 1, data.maxLapses, Math.min(settings.entries, settings.winners));
  } else if (name === "reset") {
  if (isDraw) settings.lapses = 0;
  else {
  running = false;
  settings.run = 0;
  }
  } else if (name === "run") {
  if (running) running = false;
  else {
  if (settings.run + 1 >= data.runCount) settings.run = 0;
  running = true;
  runClock = 1;
  }
  }
  save();
  refresh(false);
  };
  let drag = null;
  const winnersAt = (event) => {
  const box = svg.getBoundingClientRect();
  const scale = data.width / box.width;
  const px = (event.clientX - box.left) * scale - G.origin[0] - G.ty * G.uy[0];
  const py = (event.clientY - box.top) * scale - G.origin[1] - G.ty * G.uy[1];
  const det = G.ux[0] * G.uz[1] - G.ux[1] * G.uz[0];
  const x = (px * G.uz[1] - py * G.uz[0]) / det;
  return clamp(Math.round((x - G.gate0) / G.pitch), data.winnerRange[0], data.winnerRange[1]);
  };
  const setWinners = (winners) => {
  if (winners === settings.winners) return;
  const input = control("winners");
  input.value = String(winners);
  onInput({ target: input });
  };
  const onDown = (event) => {
  if (!isDraw || event.button) return;
  drag = { id: event.pointerId, x: event.clientX, moved: false };
  try {
  stage.setPointerCapture(event.pointerId);
  } catch (error) {
  drag.id = -1;
  }
  };
  const onMove = (event) => {
  if (!drag) return;
  if (Math.abs(event.clientX - drag.x) > 3) drag.moved = true;
  if (drag.moved) setWinners(winnersAt(event));
  };
  const onUp = (event) => {
  if (!drag) return;
  setWinners(winnersAt(event));
  drag = null;
  };
  const onEnter = () => {
  engaged = true;
  window.clearTimeout(timer);
  };
  const onLeave = () => {
  engaged = false;
  rest(12000);
  };
  const onFocusOut = () => rest(12000);
  const onStill = () => {
  if (still.matches) take();
  run();
  };
  root.addEventListener("input", onInput);
  root.addEventListener("change", onInput);
  root.addEventListener("click", onClick);
  root.addEventListener("pointerenter", onEnter);
  root.addEventListener("pointerleave", onLeave);
  root.addEventListener("focusout", onFocusOut);
  stage.addEventListener("pointerdown", onDown);
  stage.addEventListener("pointermove", onMove);
  stage.addEventListener("pointerup", onUp);
  stage.addEventListener("pointercancel", onUp);
  if (still.addEventListener) still.addEventListener("change", onStill);
  const watcher = new window.IntersectionObserver(
  (entries) => {
  visible = entries[entries.length - 1].isIntersecting;
  if (visible) run();
  },
  { rootMargin: "120px 0px" },
  );
  watcher.observe(stage);
  ["entries", "winners", "points"].forEach((name) => {
  const input = control(name);
  if (input) input.value = String(settings[name]);
  });
  if (control("keep")) control("keep").checked = settings.keep;
  refresh(true);
  draw();
  if (!saved) rest(1400);
  return () => {
  window.cancelAnimationFrame(frame);
  window.clearTimeout(timer);
  watcher.disconnect();
  root.removeEventListener("input", onInput);
  root.removeEventListener("change", onInput);
  root.removeEventListener("click", onClick);
  root.removeEventListener("pointerenter", onEnter);
  root.removeEventListener("pointerleave", onLeave);
  root.removeEventListener("focusout", onFocusOut);
  stage.removeEventListener("pointerdown", onDown);
  stage.removeEventListener("pointermove", onMove);
  stage.removeEventListener("pointerup", onUp);
  stage.removeEventListener("pointercancel", onUp);
  if (still.removeEventListener) still.removeEventListener("change", onStill);
  };
  };
    return start(element, data);
  }, []);
  const css = ".ffig{--anatomy-card:#fcfbfd;--anatomy-text:#57535e;--anatomy-strong:#1b1820;--anatomy-muted:#8b8792;--anatomy-paper:#fcfbfd;--anatomy-face:#ffffff;--anatomy-top:#ffffff;--anatomy-shade-0:#dedbe2;--anatomy-shade-1:#e7e4ea;--anatomy-shade-2:#eeecf1;--anatomy-shade-3:#f5f3f7;--anatomy-lit-top:#f4ecff;--anatomy-lit-shade:#e4d3fb;--anatomy-hi:#27242c;--anatomy-mid:#7f7b86;--anatomy-lo:#aeaab4;--anatomy-faint:#d3d0d8;--anatomy-lit:#7c3aed;--anatomy-halo:#8a8494;--anatomy-halo-opacity:.3;--anatomy-dot:#3a363f;--anatomy-weight:.6px;--anatomy-ease:cubic-bezier(.32,.72,0,1);--anatomy-mono:var(--font-jetbrains-mono,ui-monospace),\"SF Mono\",Menlo,Consolas,monospace;--ffig-line:#e6e2ea;--ffig-tint:#7c3aed14}.dark .ffig{--anatomy-card:#141218;--anatomy-text:#a8a4ae;--anatomy-strong:#ebe8ef;--anatomy-muted:#75717c;--anatomy-paper:#141218;--anatomy-face:#1c1a21;--anatomy-top:#201e26;--anatomy-shade-0:#0e0d12;--anatomy-shade-1:#121016;--anatomy-shade-2:#17151c;--anatomy-shade-3:#1b1921;--anatomy-lit-top:#34224f;--anatomy-lit-shade:#24183a;--anatomy-hi:#e0dde6;--anatomy-mid:#858190;--anatomy-lo:#544f5d;--anatomy-faint:#35313c;--anatomy-lit:#b98aff;--anatomy-halo:#050408;--anatomy-halo-opacity:.9;--anatomy-dot:#e8e5ec;--ffig-line:#2a2730;--ffig-tint:#b98aff1f}.iso-svg{display:block;width:100%;height:auto;overflow:visible}.iso-svg path,.iso-svg circle{vector-effect:non-scaling-stroke}.iso-fill{fill:var(--anatomy-paper);stroke:none}.iso-solid[data-lit]>.iso-fill{fill:var(--anatomy-face)}.iso-shade,.iso-top{stroke:none}.iso-shade[data-shade=\"0\"]{fill:var(--anatomy-shade-0)}.iso-shade[data-shade=\"1\"]{fill:var(--anatomy-shade-1)}.iso-shade[data-shade=\"2\"]{fill:var(--anatomy-shade-2)}.iso-shade[data-shade=\"3\"]{fill:var(--anatomy-shade-3)}.iso-top{fill:var(--anatomy-top)}.iso-solid[data-lit]>.iso-top{fill:var(--anatomy-lit-top)}.iso-solid[data-lit]>.iso-shade{fill:var(--anatomy-lit-shade)}.iso-solid[data-seamless]>.iso-shade,.iso-solid[data-seamless]>.iso-top{stroke-width:.4;stroke-linejoin:round}.iso-solid[data-seamless]>.iso-shade[data-shade=\"0\"]{stroke:var(--anatomy-shade-0)}.iso-solid[data-seamless]>.iso-shade[data-shade=\"1\"]{stroke:var(--anatomy-shade-1)}.iso-solid[data-seamless]>.iso-shade[data-shade=\"2\"]{stroke:var(--anatomy-shade-2)}.iso-solid[data-seamless]>.iso-shade[data-shade=\"3\"]{stroke:var(--anatomy-shade-3)}.iso-solid[data-seamless]>.iso-top{stroke:var(--anatomy-top)}.iso-solid[data-seamless][data-lit]>.iso-top{stroke:var(--anatomy-lit-top)}.iso-solid[data-seamless][data-lit]>.iso-shade{stroke:var(--anatomy-lit-shade)}.iso-solid[data-lit]>.iso-edge{stroke:var(--anatomy-lit)}.iso-halo{fill:var(--anatomy-halo);stroke:none;filter:blur(9px);opacity:var(--anatomy-halo-opacity);transform:translateY(3px)}.iso-line{fill:none;stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight);stroke-linecap:round;stroke-linejoin:round}.iso-line[data-tone=\"hi\"]{stroke:var(--anatomy-hi)}.iso-line[data-tone=\"mid\"]{stroke:var(--anatomy-mid)}.iso-line[data-tone=\"lo\"]{stroke:var(--anatomy-lo)}.iso-line[data-tone=\"faint\"]{stroke:var(--anatomy-faint)}.iso-line[data-tone=\"lit\"]{stroke:var(--anatomy-lit)}.iso-line[data-tone=\"red\"]{stroke:var(--anatomy-red)}.iso-line[data-tone=\"green\"]{stroke:var(--anatomy-green)}.iso-line[data-tone=\"blue\"]{stroke:var(--anatomy-blue)}.iso-line[data-dotted]{stroke-dasharray:.01 3.5;stroke-width:1}.iso-line[data-dashed]{stroke-dasharray:3 3}.iso-line[data-flow]{stroke-dasharray:2 6}.iso-wire-end{fill:var(--anatomy-paper);stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight)}.iso-wire[data-tone=\"hi\"] .iso-wire-end{stroke:var(--anatomy-hi)}.iso-wire[data-tone=\"mid\"] .iso-wire-end{stroke:var(--anatomy-mid)}.iso-wire[data-tone=\"faint\"] .iso-wire-end{stroke:var(--anatomy-faint)}.iso-wire[data-tone=\"lit\"] .iso-wire-end{stroke:var(--anatomy-lit)}.iso-dots circle{fill:var(--anatomy-dot);stroke:none;opacity:.32}.iso-dots[data-tone=\"hi\"] circle{opacity:.85}.iso-dots[data-tone=\"mid\"] circle{opacity:.45}.iso-dots[data-tone=\"lo\"] circle{opacity:.22}.iso-dots[data-tone=\"faint\"] circle{opacity:.12}.iso-face-text{fill:var(--anatomy-mid);font-family:var(--anatomy-mono);letter-spacing:.04em}.iso-face-text[data-tone=\"hi\"]{fill:var(--anatomy-hi)}.iso-face-text[data-tone=\"lo\"]{fill:var(--anatomy-lo)}.iso-face-text[data-tone=\"faint\"]{fill:var(--anatomy-faint)}.tb-body{fill:var(--anatomy-shade-2);stroke:none}.tb-shine{fill:var(--anatomy-top);stroke:none}.tb-shade{fill:var(--anatomy-shade-0);stroke:none}.tb-ring{fill:none;stroke:var(--anatomy-lo);stroke-width:.45;stroke-linecap:butt;stroke-linejoin:round}.tb-ring[data-tone=\"mid\"]{stroke:var(--anatomy-mid)}.tb-ring[data-tone=\"faint\"]{stroke:var(--anatomy-faint)}.tb-ring[data-tone=\"hi\"]{stroke:var(--anatomy-hi)}@keyframes iso-flow{to{stroke-dashoffset:-32}}@keyframes iso-pulse{0%,100%{opacity:.18}12%{opacity:1}40%{opacity:.18}}.iso-line[data-flow]{animation:iso-flow 1600ms linear infinite}.iso-dots circle[data-pulse]{animation:iso-pulse 1600ms steps(1,end) infinite;animation-delay:var(--pulse-at,0ms)}.iso-figure{margin:32px 0 36px}.iso-plate{position:relative;padding:52px 24px;border-radius:0;background:var(--anatomy-card);box-shadow:0 0 0 1px var(--anatomy-mid);--anatomy-paper:var(--anatomy-card)}.iso-plate-corners{position:absolute;inset:18px 20px;pointer-events:none}.iso-plate-corner{position:absolute;color:var(--anatomy-muted);font-family:var(--anatomy-mono);font-size:10.5px;line-height:1;letter-spacing:.04em;white-space:nowrap}.iso-plate-corner[data-corner=\"fig\"]{top:0;left:0;color:var(--anatomy-text)}.iso-plate-corner[data-corner=\"title\"]{top:0;right:0;text-transform:uppercase;letter-spacing:.1em}.iso-plate-corner[data-corner=\"hint\"]{bottom:0;left:0;text-transform:uppercase;letter-spacing:.1em}.iso-plate-corner[data-corner=\"readout\"]{right:0;bottom:0;color:var(--anatomy-text);font-variant-numeric:tabular-nums}.iso-plate .iso-svg{margin:0 auto}.iso-legend{display:grid;gap:8px;margin-top:12px;color:var(--anatomy-muted);font-size:13px;line-height:1.55}.iso-keys{display:flex;flex-wrap:wrap;gap:6px 18px}.iso-key{display:inline-flex;align-items:center;gap:7px}.iso-swatch{width:16px;height:10px;flex:none;overflow:visible}.iso-swatch path{fill:none;stroke:var(--anatomy-hi);stroke-width:1;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}.iso-swatch[data-mark=\"raised\"] path,.iso-swatch[data-mark=\"flat\"] path{stroke:var(--anatomy-mid)}.iso-swatch[data-mark=\"lit\"] path{stroke:var(--anatomy-lit)}.iso-swatch[data-mark=\"dim\"] path{stroke:var(--anatomy-lo)}.iso-swatch[data-mark=\"dotted\"] path{stroke-dasharray:.01 3;stroke-width:1.4}.iso-swatch[data-mark=\"dashed\"] path{stroke-dasharray:3 2.5}.iso-swatch[data-mark=\"red\"] path{stroke:var(--anatomy-red)}.iso-swatch[data-mark=\"green\"] path{stroke:var(--anatomy-green)}.iso-swatch[data-mark=\"blue\"] path{stroke:var(--anatomy-blue)}.iso-swatch-crease{stroke:var(--anatomy-lo)!important}@media (max-width:560px){.iso-plate{padding:48px 12px 70px}.iso-plate-corner[data-corner=\"hint\"]{bottom:18px}}@media (prefers-reduced-motion:reduce){.iso-line[data-flow],.iso-dots circle[data-pulse]{animation:none}}.ffig{margin:28px 0 32px;color:var(--anatomy-text);font-size:13px;line-height:1.55;-webkit-font-smoothing:antialiased}.ffig *{box-sizing:border-box}.ffig .iso-figure{margin:0}.ffig .iso-plate{padding:44px 20px 50px;border-radius:16px;box-shadow:0 0 0 1px var(--ffig-line);overflow:hidden}.ffig .iso-plate-corners{inset:16px 18px}.ffig .iso-stage{outline:none;border-radius:8px;touch-action:pan-y;cursor:ew-resize;-webkit-user-select:none;user-select:none}.ffig .iso-stage:focus-visible{outline:1px solid var(--anatomy-lit);outline-offset:2px}.ffig .iso-svg{max-width:680px}.ffig .iso-solid[data-lit]>.iso-line.iso-crease,.ffig .iso-solid[data-lit]>.iso-line.iso-bevel{stroke:var(--anatomy-lit);opacity:.45}.ffig-choice{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:6px 0 2px;padding:0;border:0}.ffig-choice label{position:relative;display:block;margin:0;cursor:pointer}.ffig-choice input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.ffig-choice span{display:block;padding:4px 11px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--ffig-line);color:var(--anatomy-text);font-size:12.5px;line-height:1.45;white-space:nowrap;transition:background-color .16s,color .16s,box-shadow .16s}.ffig-choice label:hover span{color:var(--anatomy-strong)}.ffig-choice input:checked+span{box-shadow:inset 0 0 0 1px var(--anatomy-lit);background:var(--ffig-tint);color:var(--anatomy-strong)}.ffig-choice input:focus-visible+span{outline:2px solid var(--anatomy-lit);outline-offset:2px}.ffig .iso-legend{margin-top:12px;gap:10px;color:var(--anatomy-muted);font-size:13px}.ffig .iso-caption{color:var(--anatomy-text)}.ffig-alt{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.ffig-rows{display:grid;gap:0;margin:0;padding:0;list-style:none;border-radius:12px;box-shadow:inset 0 0 0 1px var(--ffig-line);overflow:hidden}.ffig-rows li{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:baseline;gap:2px 10px;margin:0;padding:8px 12px;color:var(--anatomy-text)}.ffig-rows li+li{box-shadow:inset 0 1px 0 0 var(--ffig-line)}.ffig-rows li[data-sel]{background:var(--ffig-tint);color:var(--anatomy-strong)}.ffig-chip{display:inline-block;min-width:26px;padding:1px 6px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--anatomy-lo);color:var(--anatomy-text);font-family:var(--anatomy-mono);font-size:11px;line-height:1.5;text-align:center}.ffig-rows li[data-sel] .ffig-chip{box-shadow:inset 0 0 0 1px var(--anatomy-lit);color:var(--anatomy-lit)}.ffig-name{color:var(--anatomy-strong);font-weight:500}.ffig-when{color:var(--anatomy-muted);white-space:nowrap;font-variant-numeric:tabular-nums}.ffig-verdict{grid-column:2 / -1;color:inherit}@media (max-width:560px){.ffig .iso-plate{padding:42px 10px 68px}.ffig .iso-plate-corners{inset:14px 14px}.ffig-choice span{padding:4px 9px;font-size:12px}.ffig-rows li{padding:8px 10px}}@media (prefers-reduced-motion:reduce){.ffig-choice span{transition:none}}.ffig [data-pin]{opacity:0;transition:opacity .3s}.ffig [data-pin][data-on]{opacity:1}.ffig [data-token][data-out]{--anatomy-hi:var(--anatomy-lo)}.ffig .dw-lost{opacity:0;transition:opacity .25s}.ffig .dw-lost[data-on]{opacity:1}.ffig .dw-lost .iso-line{stroke:var(--anatomy-hi);stroke-width:1.1px}.ffig .iso-stage[data-still]{cursor:default}.dw-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 24px;margin:12px 6px 0}.dw-range{display:grid;grid-template-columns:auto minmax(0,1fr) 3.4em;align-items:center;gap:10px;margin:0;color:var(--anatomy-text);font-size:12.5px;line-height:1.4}.dw-range output{color:var(--anatomy-strong);font-family:var(--anatomy-mono);font-size:12px;font-variant-numeric:tabular-nums;text-align:right}.dw-range input{-webkit-appearance:none;appearance:none;width:100%;height:20px;margin:0;padding:0;background:transparent;cursor:pointer}.dw-range input::-webkit-slider-runnable-track{height:2px;border-radius:2px;background:var(--anatomy-lo)}.dw-range input::-moz-range-track{height:2px;border-radius:2px;background:var(--anatomy-lo)}.dw-range input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;margin-top:-6px;border:0;border-radius:50%;background:var(--anatomy-card);box-shadow:inset 0 0 0 2px var(--anatomy-lit)}.dw-range input::-moz-range-thumb{width:14px;height:14px;border:0;border-radius:50%;background:var(--anatomy-card);box-shadow:inset 0 0 0 2px var(--anatomy-lit)}.dw-range input:focus-visible{outline:2px solid var(--anatomy-lit);outline-offset:2px;border-radius:4px}.dw-actions{grid-column:1 / -1;display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;margin-top:2px}.dw-switch{position:relative;display:inline-flex;align-items:center;gap:9px;margin:0 auto 0 0;color:var(--anatomy-text);font-size:12.5px;line-height:1.4;cursor:pointer}.dw-switch input{position:absolute;top:0;left:0;width:30px;height:18px;margin:0;opacity:0;cursor:pointer}.dw-knob{position:relative;flex:none;width:30px;height:18px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--anatomy-lo);transition:background-color .16s,box-shadow .16s}.dw-knob::after{content:\"\";position:absolute;top:4px;left:4px;width:10px;height:10px;border-radius:50%;background:var(--anatomy-mid);transition:transform .16s,background-color .16s}.dw-switch input:checked+.dw-knob{background:var(--ffig-tint);box-shadow:inset 0 0 0 1px var(--anatomy-lit)}.dw-switch input:checked+.dw-knob::after{transform:translateX(12px);background:var(--anatomy-lit)}.dw-switch input:focus-visible+.dw-knob{outline:2px solid var(--anatomy-lit);outline-offset:2px}.dw-button{-webkit-appearance:none;appearance:none;margin:0;padding:4px 12px;border:0;border-radius:999px;background:transparent;box-shadow:inset 0 0 0 1px var(--anatomy-lo);color:var(--anatomy-strong);font:inherit;font-size:12.5px;line-height:1.45;white-space:nowrap;cursor:pointer;transition:box-shadow .16s,background-color .16s,color .16s}.dw-button:hover:not(:disabled){box-shadow:inset 0 0 0 1px var(--anatomy-lit)}.dw-button[data-primary]{background:var(--ffig-tint);box-shadow:inset 0 0 0 1px var(--anatomy-lit)}.dw-button:disabled{color:var(--anatomy-muted);box-shadow:inset 0 0 0 1px var(--ffig-line);cursor:default}.dw-button:focus-visible{outline:2px solid var(--anatomy-lit);outline-offset:2px}.dw-bar{display:inline-block;width:52px;height:6px;margin-right:8px;border-radius:3px;box-shadow:inset 0 0 0 1px var(--anatomy-lo);vertical-align:1px;overflow:hidden}.dw-bar i{display:block;width:100%;height:100%;background:var(--anatomy-mid);transform-origin:0 50%;transition:transform .25s}.dw-bar[data-lit] i{background:var(--anatomy-lit)}.ffig-swatch circle,.ffig-swatch rect,.ffig-swatch line,.ffig-swatch path{fill:none;stroke:var(--anatomy-hi);stroke-width:1;vector-effect:non-scaling-stroke;stroke-linecap:round}.ffig-swatch .is-lit{fill:var(--anatomy-lit-top);stroke:var(--anatomy-lit)}.ffig-swatch .is-dim{stroke:var(--anatomy-lo)}.ffig-swatch .is-dot{fill:var(--anatomy-hi);stroke:none}@media (max-width:560px){.ffig .iso-stage{margin:0 -6px}.dw-controls{grid-template-columns:minmax(0,1fr);gap:6px;margin:10px 2px 0}}@media (prefers-reduced-motion:reduce){.ffig [data-pin],.ffig .dw-lost,.dw-knob,.dw-knob::after,.dw-button,.dw-bar i{transition:none}}.dark .ffig[data-figure=\"concepts-distributions-draw-odds\"],.dark .ffig[data-figure=\"concepts-loyalty-fanfair-weight\"]{--anatomy-face:#24212b;--anatomy-top:#2a2732;--anatomy-shade-0:#16141b;--anatomy-shade-1:#1b1921;--anatomy-shade-2:#211e28;--anatomy-shade-3:#26232e;--anatomy-lit-top:#3d2a5c;--anatomy-lit-shade:#2c1f45;--anatomy-hi:#efecf3;--anatomy-mid:#a7a2b2;--anatomy-lo:#736d7e;--anatomy-faint:#4a4553;--anatomy-dot:#f2eff6;--anatomy-weight:.7px}";
  const html = "<figure class=\"iso-figure\" role=\"group\" aria-label=\"Odds of a draw\"><p class=\"ffig-alt\">An interactive figure in which you set the number of entries and winners to see the chance of winning, and let a winner's payment window lapse to see whether the draw picks a replacement (it does with Continue selecting until completed on; with it off the place is lost).</p><div class=\"iso-plate\"><div class=\"iso-plate-corners\" aria-hidden=\"true\"><span class=\"iso-plate-corner\" data-corner=\"fig\">Fig 1</span><span class=\"iso-plate-corner\" data-corner=\"title\">Odds of a draw</span><span class=\"iso-plate-corner\" data-corner=\"hint\">Drag the gate · lapse a winner</span><span class=\"iso-plate-corner\" data-corner=\"readout\" data-readout>33% · 4 places, 12 entries</span></div><div class=\"iso-stage\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"iso-svg\" viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"A draw bench. Up to twelve entry tokens sit along a track in the draw's random order, and a gate stands after the winner places, so the tokens on its far side are the winners. A tray at the far end holds winners whose payment window lapsed, a shelf beyond the track's end holds an entry the draw turned away, a ruler along the front marks Opens at 11:00, Draw at 17:00 and Closes at 19:00 with a pin for each entry's arrival, and a dial reads the chance of winning.\"><defs><g id=\"dw-draw-token\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M296.3 155l.9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2 0 6.5-1 2.2-2.7 1.8-4.1 1.1-4.6 0-4.1-.9-3-1.7-1.1-2.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M316.9 161.2l-1 2.2 0-6.5 1-2.2zM315.9 163.4l-2.7 1.8 0-6.4 2.7-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M313.2 165.2l-4.1 1.1 0-6.5 4.1-1zM309.1 166.3l-4.6 0 0-6.4 4.6-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M304.5 166.3l-4.1-.9 0-6.5 4.1 1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M300.4 165.4l-3-1.7 0-6.5 3 1.7zM297.4 163.7l-1.1-2.3 0-6.4 1.1 2.2z\"/><path class=\"iso-top\" d=\"M313.2 158.8l-4.1 1-4.6 .1-4.1-1-3-1.7-1.1-2.2 .9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2-1 2.2z\"/><path class=\"iso-line iso-crease\" data-tone=\"lo\" d=\"M316.9 154.7l-1 2.2-2.7 1.9-4.1 1-4.6 .1-4.1-1-3-1.7-1.1-2.2\"/><path class=\"iso-line iso-bevel\" data-tone=\"lo\" d=\"M316.9 154.7l-1.8 2.1-2.5 1.6-3.7 1-4.2 0-3.8-.8-2.6-1.6-2-2\"/><path class=\"iso-line iso-edge\" data-tone=\"hi\" d=\"M296.3 155l.9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2M316.9 161.2l-1 2.2-2.7 1.8-4.1 1.1-4.6 0-4.1-.9-3-1.7-1.1-2.3M296.3 155l0 6.4M316.9 154.7l0 6.5\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M310.5 157.2l-2.9 .6-3.1-.1-2.6-.9-1.3-1.4 .3-1.6 1.8-1.3 2.8-.7 3.2 .2 2.5 .9 1.4 1.4-.3 1.6z\"/></g></defs><path class=\"iso-halo\" d=\"M50.4 93.9l.7-2 1.6-1.9 2.2-1.8 2.9-1.4 118.1-49.6 3.4-1.1 3.8-.8 4-.5 4.1 0 4.1 .4 3.8 .8 3.5 1.1 2.9 1.4 339.3 202.2 2.3 1.7 1.6 1.9 .9 2 0 2.1 0 18.2-.7 2-1.6 1.9-2.2 1.7-2.9 1.5-118.1 49.5-3.4 1.2-3.8 .8-4 .4-4.1 .1-4.1-.4-3.8-.8-3.5-1.1-2.9-1.5-339.3-202.1-2.3-1.7-1.6-1.9-.9-2 0-2.1z\"/><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M169.4 80.9l1.8-3 3.9-2.5 5.6-1.6 6.4-.3 6.1 .9 5 2 3 2.8 .7 3.1 0 3.3-1.7 3-4 2.5-5.6 1.6-6.4 .3-6.1-.9-5-2-3-2.8-.7-3.1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M201.9 85.6l-1.7 3 0-3.2 1.7-3.1zM200.2 88.6l-4 2.5 0-3.2 4-2.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M196.2 91.1l-5.6 1.6 0-3.3 5.6-1.5zM190.6 92.7l-6.4 .3 0-3.2 6.4-.4z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M184.2 93l-6.1-.9 0-3.2 6.1 .9z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M178.1 92.1l-5-2 0-3.2 5 2zM173.1 90.1l-3-2.8 0-3.2 3 2.8zM170.1 87.3l-.7-3.1 0-3.3 .7 3.2z\"/><path class=\"iso-top\" d=\"M196.2 87.9l-5.6 1.5-6.4 .4-6.1-.9-5-2-3-2.8-.7-3.2 1.8-3 3.9-2.5 5.6-1.6 6.4-.3 6.1 .9 5 2 3 2.8 .7 3.1-1.7 3.1z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M201.9 82.3l-1.7 3.1-4 2.5-5.6 1.5-6.4 .4-6.1-.9-5-2-3-2.8-.7-3.2\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M169.4 80.9l1.8-3 3.9-2.5 5.6-1.6 6.4-.3 6.1 .9 5 2 3 2.8 .7 3.1M201.9 85.6l-1.7 3-4 2.5-5.6 1.6-6.4 .3-6.1-.9-5-2-3-2.8-.7-3.1M169.4 80.9l0 3.3M201.9 82.3l0 3.3\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M173.1 74.2l1.4-2.4 3-1.9 4.4-1.2 4.9-.2 4.7 .7 3.8 1.5 2.4 2.2 .5 2.4 0 6.9-1.4 2.3-3 2-4.4 1.1-4.8 .3-4.8-.7-3.8-1.5-2.4-2.2-.5-2.4z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M198.2 82.2l-1.4 2.3 0-6.8 1.4-2.4zM196.8 84.5l-3 2 0-6.9 3-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M193.8 86.5l-4.4 1.1 0-6.8 4.4-1.2zM189.4 87.6l-4.8 .3 0-6.9 4.8-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M184.6 87.9l-4.8-.7 0-6.9 4.8 .7z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M179.8 87.2l-3.8-1.5 0-6.9 3.8 1.5zM176 85.7l-2.4-2.2 0-6.9 2.4 2.2zM173.6 83.5l-.5-2.4 0-6.9 .5 2.4z\"/><path class=\"iso-top\" d=\"M193.8 79.6l-4.4 1.2-4.8 .2-4.8-.7-3.8-1.5-2.4-2.2-.5-2.4 1.4-2.4 3-1.9 4.4-1.2 4.9-.2 4.7 .7 3.8 1.5 2.4 2.2 .5 2.4-1.4 2.4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M198.2 75.3l-1.4 2.4-3 1.9-4.4 1.2-4.8 .2-4.8-.7-3.8-1.5-2.4-2.2-.5-2.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M173.1 74.2l1.4-2.4 3-1.9 4.4-1.2 4.9-.2 4.7 .7 3.8 1.5 2.4 2.2 .5 2.4M198.2 82.2l-1.4 2.3-3 2-4.4 1.1-4.8 .3-4.8-.7-3.8-1.5-2.4-2.2-.5-2.4M173.1 74.2l0 6.9M198.2 75.3l0 6.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M97.8 110.9l1.8-3 4-2.5 5.6-1.5 6.3-.4 6.1 .9 5 2 3.1 2.8 .7 3.2 0 3.2-1.8 3.1-4 2.5-5.6 1.5-6.3 .3-6.2-.9-4.9-2-3.1-2.7-.7-3.2z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M130.4 115.6l-1.8 3.1 0-3.3 1.8-3zM128.6 118.7l-4 2.5 0-3.3 4-2.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M124.6 121.2l-5.6 1.5 0-3.2 5.6-1.6zM119 122.7l-6.3 .3 0-3.2 6.3-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M112.7 123l-6.2-.9 0-3.2 6.2 .9z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M106.5 122.1l-4.9-2 0-3.2 4.9 2zM101.6 120.1l-3.1-2.7 0-3.3 3.1 2.8zM98.5 117.4l-.7-3.2 0-3.3 .7 3.2z\"/><path class=\"iso-top\" d=\"M124.6 117.9l-5.6 1.6-6.3 .3-6.2-.9-4.9-2-3.1-2.8-.7-3.2 1.8-3 4-2.5 5.6-1.5 6.3-.4 6.1 .9 5 2 3.1 2.8 .7 3.2-1.8 3z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M130.4 112.4l-1.8 3-4 2.5-5.6 1.6-6.3 .3-6.2-.9-4.9-2-3.1-2.8-.7-3.2\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M97.8 110.9l1.8-3 4-2.5 5.6-1.5 6.3-.4 6.1 .9 5 2 3.1 2.8 .7 3.2M130.4 115.6l-1.8 3.1-4 2.5-5.6 1.5-6.3 .3-6.2-.9-4.9-2-3.1-2.7-.7-3.2M97.8 110.9l0 3.3M130.4 112.4l0 3.2\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M101.5 104.2l1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4 0 6.9-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .2-4.7-.7-3.9-1.5-2.3-2.1-.6-2.5z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M126.7 112.2l-1.4 2.4 0-6.9 1.4-2.4zM125.3 114.6l-3.1 1.9 0-6.9 3.1-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M122.2 116.5l-4.3 1.2 0-6.9 4.3-1.2zM117.9 117.7l-4.9 .2 0-6.8 4.9-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M113 117.9l-4.7-.7 0-6.8 4.7 .7z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M108.3 117.2l-3.9-1.5 0-6.9 3.9 1.6zM104.4 115.7l-2.3-2.1 0-6.9 2.3 2.1zM102.1 113.6l-.6-2.5 0-6.9 .6 2.5z\"/><path class=\"iso-top\" d=\"M122.2 109.6l-4.3 1.2-4.9 .3-4.7-.7-3.9-1.6-2.3-2.1-.6-2.5 1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4-1.4 2.4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M126.7 105.3l-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .3-4.7-.7-3.9-1.6-2.3-2.1-.6-2.5\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M101.5 104.2l1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4M126.7 112.2l-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .2-4.7-.7-3.9-1.5-2.3-2.1-.6-2.5M101.5 104.2l0 6.9M126.7 105.3l0 6.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M469.6 259.8l1.8-3 4-2.5 5.6-1.6 6.3-.3 6.2 .9 4.9 2 3.1 2.8 .7 3.2 0 3.2-1.8 3.1-4 2.4-5.6 1.6-6.3 .3-6.1-.9-5-2-3.1-2.8-.7-3.1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M502.2 264.5l-1.8 3.1 0-3.3 1.8-3zM500.4 267.6l-4 2.4 0-3.2 4-2.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M496.4 270l-5.6 1.6 0-3.3 5.6-1.5zM490.8 271.6l-6.3 .3 0-3.2 6.3-.4z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M484.5 271.9l-6.1-.9 0-3.2 6.1 .9z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M478.4 271l-5-2 0-3.2 5 2zM473.4 269l-3.1-2.8 0-3.2 3.1 2.8zM470.3 266.2l-.7-3.1 0-3.3 .7 3.2z\"/><path class=\"iso-top\" d=\"M496.4 266.8l-5.6 1.5-6.3 .4-6.1-.9-5-2-3.1-2.8-.7-3.2 1.8-3 4-2.5 5.6-1.6 6.3-.3 6.2 .9 4.9 2 3.1 2.8 .7 3.2-1.8 3z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M502.2 261.3l-1.8 3-4 2.5-5.6 1.5-6.3 .4-6.1-.9-5-2-3.1-2.8-.7-3.2\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M469.6 259.8l1.8-3 4-2.5 5.6-1.6 6.3-.3 6.2 .9 4.9 2 3.1 2.8 .7 3.2M502.2 264.5l-1.8 3.1-4 2.4-5.6 1.6-6.3 .3-6.1-.9-5-2-3.1-2.8-.7-3.1M469.6 259.8l0 3.3M502.2 261.3l0 3.2\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M473.3 253.1l1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4 0 6.9-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .2-4.7-.7-3.9-1.5-2.3-2.2-.6-2.4z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M498.5 261.1l-1.4 2.4 0-6.9 1.4-2.4zM497.1 263.5l-3.1 1.9 0-6.9 3.1-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M494 265.4l-4.3 1.2 0-6.9 4.3-1.2zM489.7 266.6l-4.9 .2 0-6.9 4.9-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M484.8 266.8l-4.7-.7 0-6.8 4.7 .6z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M480.1 266.1l-3.9-1.5 0-6.9 3.9 1.6zM476.2 264.6l-2.3-2.2 0-6.8 2.3 2.1zM473.9 262.4l-.6-2.4 0-6.9 .6 2.5z\"/><path class=\"iso-top\" d=\"M494 258.5l-4.3 1.2-4.9 .2-4.7-.6-3.9-1.6-2.3-2.1-.6-2.5 1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4-1.4 2.4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M498.5 254.2l-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .2-4.7-.6-3.9-1.6-2.3-2.1-.6-2.5\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M473.3 253.1l1.4-2.3 3.1-2 4.3-1.1 4.9-.3 4.7 .7 3.9 1.5 2.3 2.2 .6 2.4M498.5 261.1l-1.4 2.4-3.1 1.9-4.3 1.2-4.9 .2-4.7-.7-3.9-1.5-2.3-2.2-.6-2.4M473.3 253.1l0 6.9M498.5 254.2l0 6.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M398.1 289.9l1.7-3.1 4-2.5 5.6-1.5 6.4-.4 6.1 .9 5 2 3 2.8 .7 3.2 0 3.2-1.8 3.1-3.9 2.5-5.6 1.5-6.4 .3-6.1-.8-5-2-3-2.8-.7-3.2z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M430.6 294.5l-1.8 3.1 0-3.3 1.8-3zM428.8 297.6l-3.9 2.5 0-3.3 3.9-2.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M424.9 300.1l-5.6 1.5 0-3.2 5.6-1.6zM419.3 301.6l-6.4 .3 0-3.2 6.4-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M412.9 301.9l-6.1-.8 0-3.3 6.1 .9z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M406.8 301.1l-5-2 0-3.3 5 2zM401.8 299.1l-3-2.8 0-3.3 3 2.8zM398.8 296.3l-.7-3.2 0-3.2 .7 3.1z\"/><path class=\"iso-top\" d=\"M424.9 296.8l-5.6 1.6-6.4 .3-6.1-.9-5-2-3-2.8-.7-3.1 1.7-3.1 4-2.5 5.6-1.5 6.4-.4 6.1 .9 5 2 3 2.8 .7 3.2-1.8 3z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M430.6 291.3l-1.8 3-3.9 2.5-5.6 1.6-6.4 .3-6.1-.9-5-2-3-2.8-.7-3.1\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M398.1 289.9l1.7-3.1 4-2.5 5.6-1.5 6.4-.4 6.1 .9 5 2 3 2.8 .7 3.2M430.6 294.5l-1.8 3.1-3.9 2.5-5.6 1.5-6.4 .3-6.1-.8-5-2-3-2.8-.7-3.2M398.1 289.9l0 3.2M430.6 291.3l0 3.2\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M401.8 283.1l1.4-2.3 3-1.9 4.4-1.2 4.8-.3 4.8 .7 3.8 1.5 2.4 2.2 .5 2.4 0 6.9-1.4 2.4-3 1.9-4.4 1.2-4.9 .3-4.7-.7-3.8-1.6-2.4-2.1-.5-2.5z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M426.9 291.1l-1.4 2.4 0-6.9 1.4-2.4zM425.5 293.5l-3 1.9 0-6.9 3-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M422.5 295.4l-4.4 1.2 0-6.9 4.4-1.2zM418.1 296.6l-4.9 .3 0-6.9 4.9-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M413.2 296.9l-4.7-.7 0-6.9 4.7 .7z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M408.5 296.2l-3.8-1.6 0-6.9 3.8 1.6zM404.7 294.6l-2.4-2.1 0-6.9 2.4 2.1zM402.3 292.5l-.5-2.5 0-6.9 .5 2.5z\"/><path class=\"iso-top\" d=\"M422.5 288.5l-4.4 1.2-4.9 .3-4.7-.7-3.8-1.6-2.4-2.1-.5-2.5 1.4-2.3 3-1.9 4.4-1.2 4.8-.3 4.8 .7 3.8 1.5 2.4 2.2 .5 2.4-1.4 2.4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M426.9 284.2l-1.4 2.4-3 1.9-4.4 1.2-4.9 .3-4.7-.7-3.8-1.6-2.4-2.1-.5-2.5\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M401.8 283.1l1.4-2.3 3-1.9 4.4-1.2 4.8-.3 4.8 .7 3.8 1.5 2.4 2.2 .5 2.4M426.9 291.1l-1.4 2.4-3 1.9-4.4 1.2-4.9 .3-4.7-.7-3.8-1.6-2.4-2.1-.5-2.5M401.8 283.1l0 6.9M426.9 284.2l0 6.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M50.4 83.8l.7-2 1.6-1.9 2.2-1.8 2.9-1.4 118.1-49.6 3.4-1.2 3.8-.8 4-.4 4.1 0 4.1 .4 3.8 .7 3.5 1.2 2.9 1.4 339.3 202.2 2.3 1.7 1.6 1.9 .9 2 0 2.1 0 18.2-.7 2-1.6 1.9-2.2 1.7-2.9 1.5-118.1 49.5-3.4 1.2-3.8 .8-4 .4-4.1 0-4.1-.3-3.8-.8-3.5-1.1-2.9-1.5-339.3-202.1-2.3-1.7-1.6-1.9-.9-2 0-2.1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M549.6 256.5l-.7 2 0-18.2 .7-2zM548.9 258.5l-1.6 1.9 0-18.2 1.6-1.9zM547.3 260.4l-2.2 1.7 0-18.2 2.2-1.7zM545.1 262.1l-2.9 1.5 0-18.2 2.9-1.5zM542.2 263.6l-118.1 49.5 0-18.2 118.1-49.5zM424.1 313.1l-3.4 1.2 0-18.2 3.4-1.2z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M420.7 314.3l-3.8 .8 0-18.2 3.8-.8zM416.9 315.1l-4 .4 0-18.2 4-.4zM412.9 315.5l-4.1 0 0-18.2 4.1 0z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M408.8 315.5l-4.1-.3 0-18.2 4.1 .3zM404.7 315.2l-3.8-.8 0-18.2 3.8 .8z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M400.9 314.4l-3.5-1.1 0-18.2 3.5 1.1zM397.4 313.3l-2.9-1.5 0-18.2 2.9 1.5zM394.5 311.8l-339.3-202.1 0-18.2 339.3 202.1zM55.2 109.7l-2.3-1.7 0-18.2 2.3 1.7zM52.9 108l-1.6-1.9 0-18.2 1.6 1.9zM51.3 106.1l-.9-2 0-18.3 .9 2.1zM50.4 104.1l0-2.1 0-18.2 0 2z\"/><path class=\"iso-top\" d=\"M544.8 230.6l2.3 1.7 1.6 1.9 .9 2 0 2.1-.7 2-1.6 1.9-2.2 1.7-2.9 1.5-118.1 49.5-3.4 1.2-3.8 .8-4 .4-4.1 0-4.1-.3-3.8-.8-3.5-1.1-2.9-1.5-339.3-202.1-2.3-1.7-1.6-1.9-.9-2.1 0-2 .7-2 1.6-1.9 2.2-1.8 2.9-1.4 118.1-49.6 3.4-1.2 3.8-.8 4-.4 4.1 0 4.1 .4 3.8 .7 3.5 1.2 2.9 1.4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M549.6 238.3l-.7 2-1.6 1.9-2.2 1.7-2.9 1.5-118.1 49.5-3.4 1.2-3.8 .8-4 .4-4.1 0-4.1-.3-3.8-.8-3.5-1.1-2.9-1.5-339.3-202.1-2.3-1.7-1.6-1.9-.9-2.1 0-2\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M549.6 238.3l-4.3 1.5-1.3 1.5-1.8 1.4-2.5 1.3-117.8 49.4-3 1.1-3.1 .6-3.3 .4-3.4 0-3.3-.3-3.2-.7-2.8-.9-2.6-1.2-339-202.1-2-1.4-1.4-1.6-.7-1.7-3.7-1.8\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M50.4 83.8l.7-2 1.6-1.9 2.2-1.8 2.9-1.4 118.1-49.6 3.4-1.2 3.8-.8 4-.4 4.1 0 4.1 .4 3.8 .7 3.5 1.2 2.9 1.4 339.3 202.2 2.3 1.7 1.6 1.9 .9 2 0 2.1M549.6 256.5l-.7 2-1.6 1.9-2.2 1.7-2.9 1.5-118.1 49.5-3.4 1.2-3.8 .8-4 .4-4.1 0-4.1-.3-3.8-.8-3.5-1.1-2.9-1.5-339.3-202.1-2.3-1.7-1.6-1.9-.9-2 0-2.1M549.6 238.3l0 18.2M50.4 83.8l0 18.2\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M535.8 234.3l1.1 .8 .7 .8 .4 .9 0 .9-.3 .9-.7 .9-1 .8-1.3 .6-118.1 49.6-1.5 .5-1.7 .3-1.8 .2-1.8 0-1.8-.1-1.7-.4-1.5-.5-1.4-.6-339.2-202.2-1.1-.7-.7-.9-.4-.9 0-.9 .3-.9 .7-.9 1-.7 1.3-.7 118.1-49.5 1.5-.5 1.7-.4 1.8-.2 1.8 0 1.8 .2 1.7 .3 1.5 .5 1.4 .7z\"/><path class=\"iso-line\" data-tone=\"lo\" d=\"M192.1 40.4l-2.9 .6-3.1-.4-2-1.2-.3-1.6 1.7-1.3 3-.6 3 .4 2.1 1.2 .2 1.6z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"188.8\" cy=\"38.5\" r=\"0.45\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M525.4 239l-2.9 .6-3.1-.4-2.1-1.2-.2-1.6 1.7-1.3 2.9-.6 3.1 .4 2.1 1.2 .2 1.6z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"522.1\" cy=\"237\" r=\"0.45\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M81.2 87l-2.9 .6-3.1-.4-2.1-1.2-.2-1.6 1.7-1.4 2.9-.6 3.1 .4 2.1 1.2 .2 1.6z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"77.9\" cy=\"85\" r=\"0.45\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M414.5 285.6l-3 .5-3-.3-2.1-1.3-.2-1.5 1.7-1.4 2.9-.6 3.1 .4 2 1.2 .3 1.6z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"411.2\" cy=\"283.6\" r=\"0.45\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M242.6 70.2l.2-1 1.1-.8 1.8-.4 1.9 .1 1.6 .6 92.7 55.3 .9 .8 0 1.1-.2 .9-1.1 .8-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M342.8 125.9l-.2 .9 0-1 .2-1zM342.6 126.8l-1.1 .8 0-1 1.1-.8zM243.9 68.4l0 0 0 1.1 0 0z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M341.5 127.6l-1.8 .4 0-1 1.8-.4z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M339.7 128l-1.9-.1 0-1 1.9 .1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M337.8 127.9l-1.6-.5 0-1 1.6 .5zM336.2 127.4l-92.8-55.3 0-1 92.8 55.3zM243.4 72.1l-.8-.9 0-1 .8 .9z\"/><path class=\"iso-top\" d=\"M341.9 124l.9 .8-.2 1-1.1 .8 0 0-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9 .2-1 1.1-.8 0 0 1.8-.4 1.9 .1 1.6 .6z\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M341.5 126.6l0 0M242.6 70.2l.2-1 1.1-.8M243.9 68.4l1.8-.4 1.9 .1 1.6 .6 92.7 55.3 .9 .8M342.8 125.9l-.2 .9-1.1 .8M341.5 127.6l-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9M243.9 69.5l0 0M342.8 124.8l0 1.1M341.5 126.6l0 1M341.5 126.6l0 1M242.6 70.2l0 1M243.9 68.4l0 1.1M243.9 68.4l0 1.1\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M244.2 68.6l97 57.8\"/><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M196.1 89.7l.2-.9 1.1-.8 1.7-.4 2 0 1.6 .6 92.7 55.3 .8 .9 0 1-.1 .9-1.1 .8-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M296.2 145.4l-.1 .9 0-1 .1-.9zM296.1 146.3l-1.1 .8 0-1 1.1-.8z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M295 147.1l-1.8 .4 0-1 1.8-.4z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M293.2 147.5l-1.9-.1 0-1 1.9 .1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M291.3 147.4l-1.6-.5 0-1 1.6 .5zM289.7 146.9l-92.8-55.3 0-1 92.8 55.3zM196.9 91.6l-.8-.9 0-1 .8 .9z\"/><path class=\"iso-top\" d=\"M295.4 143.5l.8 .9-.1 .9-1.1 .8 0 0-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9 .2-.9 1.1-.8 0 0 1.7-.4 2 0 1.6 .6z\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M295 146.1l0 0M196.1 89.7l.2-.9 1.1-.8 0 0 1.7-.4 2 0 1.6 .6 92.7 55.3 .8 .9M296.2 145.4l-.1 .9-1.1 .8M295 147.1l-1.8 .4-1.9-.1-1.6-.5-92.8-55.3-.8-.9M296.2 144.4l0 1M295 146.1l0 1M295 146.1l0 1M196.1 89.7l0 1\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M197.7 88.1l97 57.8\"/><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 187.004 100.955)\" font-size=\"4.4\" text-anchor=\"middle\">1</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 203.518 110.795)\" font-size=\"4.4\" text-anchor=\"middle\">2</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 220.032 120.635)\" font-size=\"4.4\" text-anchor=\"middle\">3</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 236.546 130.475)\" font-size=\"4.4\" text-anchor=\"middle\">4</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 253.06 140.316)\" font-size=\"4.4\" text-anchor=\"middle\">5</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 269.574 150.156)\" font-size=\"4.4\" text-anchor=\"middle\">6</text><path class=\"iso-line\" data-tone=\"mid\" d=\"M201 95.1l-5.4 2.3M217.5 104.9l-5.4 2.3M234 114.8l-5.4 2.2M250.5 124.6l-5.4 2.3M267 134.5l-5.4 2.2M283.5 144.3l-5.3 2.3\"/><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M129.4 88.5l.9-.8 19.6-8.2 1.7-.3 1.6 .4 249.2 148.5 .6 .9 0 1.2-.9 .8-19.6 8.2-1.7 .3-1.6-.4-249.2-148.5-.6-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M403 230.2l-.9 .8 0-1.2 .9-.8zM402.1 231l-19.6 8.2 0-1.2 19.6-8.2z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M382.5 239.2l-1.7 .3 0-1.2 1.7-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M380.8 239.5l-1.6-.4 0-1.2 1.6 .4z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M379.2 239.1l-249.2-148.5 0-1.2 249.2 148.5zM130 90.6l-.6-.9 0-1.2 .6 .9z\"/><path class=\"iso-top\" d=\"M402.4 228.1l.6 .9-.9 .8-19.6 8.2-1.7 .3-1.6-.4-249.2-148.5-.6-.9 .9-.8 19.6-8.2 1.7-.3 1.6 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"lo\" d=\"M403 229l-.9 .8-19.6 8.2-1.7 .3-1.6-.4-249.2-148.5-.6-.9\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M129.4 88.5l.9-.8 19.6-8.2 1.7-.3 1.6 .4 249.2 148.5 .6 .9M403 230.2l-.9 .8-19.6 8.2-1.7 .3-1.6-.4-249.2-148.5-.6-.9M403 229l0 1.2M129.4 88.5l0 1.2\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M179.9 96.6l-3.6 1.5M208.4 113.6l-3.5 1.5M237 130.6l-3.6 1.5M265.5 147.6l-3.6 1.5M294 164.6l-3.6 1.5M322.5 181.6l-3.5 1.5M351.1 198.6l-3.6 1.5M379.6 215.6l-3.6 1.5\"/><path class=\"iso-line\" data-tone=\"mid\" d=\"M165.7 88.1l-6.8 2.9M194.2 105.1l-6.8 2.9M222.7 122.1l-6.8 2.9M251.2 139.1l-6.8 2.9M279.8 156.1l-6.8 2.9M308.3 173.1l-6.8 2.9M336.8 190.1l-6.8 2.8M365.3 207.1l-6.8 2.8M393.9 224.1l-6.8 2.8\"/><path class=\"iso-line\" data-tone=\"lo\" d=\"M143.9 82l252.2 150.3\"/><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 146.341 96.222)\" font-size=\"4.6\" text-anchor=\"middle\">11</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 174.865 113.218)\" font-size=\"4.6\" text-anchor=\"middle\">12</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 203.389 130.215)\" font-size=\"4.6\" text-anchor=\"middle\">13</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 231.913 147.212)\" font-size=\"4.6\" text-anchor=\"middle\">14</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 260.437 164.209)\" font-size=\"4.6\" text-anchor=\"middle\">15</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 288.961 181.206)\" font-size=\"4.6\" text-anchor=\"middle\">16</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 317.485 198.202)\" font-size=\"4.6\" text-anchor=\"middle\">17</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 346.009 215.199)\" font-size=\"4.6\" text-anchor=\"middle\">18</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 374.533 232.196)\" font-size=\"4.6\" text-anchor=\"middle\">19</text><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"143.7\" cy=\"85.7\" r=\"0.45\"/><circle cx=\"388.7\" cy=\"231.7\" r=\"0.45\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M163.9 79.4l.5-.4 4-1.7 1-.1 .9 .2 2.1 1.3 .4 .5 0 8.9-.5 .4-4 1.7-1 .2-.9-.3-2.1-1.2-.4-.6z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M172.8 88.1l-.5 .4 0-8.9 .5-.4zM172.3 88.5l-4 1.7 0-8.9 4-1.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M168.3 90.2l-1 .2 0-8.9 1-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M167.3 90.4l-.9-.3 0-8.9 .9 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M166.4 90.1l-2.1-1.2 0-8.9 2.1 1.2zM164.3 88.9l-.4-.6 0-8.9 .4 .6z\"/><path class=\"iso-top\" d=\"M172.4 78.7l.4 .5-.5 .4-4 1.7-1 .2-.9-.3-2.1-1.2-.4-.6 .5-.4 4-1.7 1-.1 .9 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M172.8 79.2l-.5 .4-4 1.7-1 .2-.9-.3-2.1-1.2-.4-.6\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M172.8 79.2l-1.1 .2-3.7 1.6-.6 .1-.6-.2-1.9-1.1-1-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M163.9 79.4l.5-.4 4-1.7 1-.1 .9 .2 2.1 1.3 .4 .5M172.8 88.1l-.5 .4-4 1.7-1 .2-.9-.3-2.1-1.2-.4-.6M172.8 79.2l0 8.9M163.9 79.4l0 8.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M392.1 215.4l.5-.5 4-1.6 1-.2 .9 .3 2.1 1.2 .4 .5 0 8.9-.5 .5-4 1.7-1 .1-1-.2-2.1-1.3-.3-.5z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M401 224l-.5 .5 0-8.9 .5-.5zM400.5 224.5l-4 1.7 0-8.9 4-1.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M396.5 226.2l-1 .1 0-8.9 1-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M395.5 226.3l-1-.2 0-8.9 1 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M394.5 226.1l-2.1-1.3 0-8.9 2.1 1.3zM392.4 224.8l-.3-.5 0-8.9 .3 .5z\"/><path class=\"iso-top\" d=\"M400.6 214.6l.4 .5-.5 .5-4 1.7-1 .1-1-.2-2.1-1.3-.3-.5 .5-.5 4-1.6 1-.2 .9 .3z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M401 215.1l-.5 .5-4 1.7-1 .1-1-.2-2.1-1.3-.3-.5\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M401 215.1l-1.1 .3-3.7 1.6-.6 .1-.6-.2-1.9-1.1-1-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M392.1 215.4l.5-.5 4-1.6 1-.2 .9 .3 2.1 1.2 .4 .5M401 224l-.5 .5-4 1.7-1 .1-1-.2-2.1-1.3-.3-.5M401 215.1l0 8.9M392.1 215.4l0 8.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M335.6 178.4l.5-.8 1.1-.7 1.5-.4 1.7-.1 1.7 .3 1.3 .5 .9 .8 .1 .8 0 11.4-.4 .8-1.1 .7-1.5 .4-1.8 .1-1.6-.3-1.4-.5-.8-.8-.2-.8z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M344.4 190.2l-.4 .8 0-11.3 .4-.9zM344 191l-1.1 .7 0-11.4 1.1-.6z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M342.9 191.7l-1.5 .4 0-11.4 1.5-.4zM341.4 192.1l-1.8 .1 0-11.4 1.8-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M339.6 192.2l-1.6-.3 0-11.3 1.6 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M338 191.9l-1.4-.5 0-11.3 1.4 .5zM336.6 191.4l-.8-.8 0-11.3 .8 .8zM335.8 190.6l-.2-.8 0-11.4 .2 .9z\"/><path class=\"iso-top\" d=\"M342.9 180.3l-1.5 .4-1.8 .1-1.6-.2-1.4-.5-.8-.8-.2-.9 .5-.8 1.1-.7 1.5-.4 1.7-.1 1.7 .3 1.3 .5 .9 .8 .1 .8-.4 .9z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M344.4 178.8l-.4 .9-1.1 .6-1.5 .4-1.8 .1-1.6-.2-1.4-.5-.8-.8-.2-.9\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M344.4 178.8l-1.1 .7-.9 .6-1.2 .3-1.5 .1-1.4-.2-1.1-.5-.7-.6-.9-.8\"/><path class=\"iso-line iso-edge\" data-tone=\"hi\" d=\"M335.6 178.4l.5-.8 1.1-.7 1.5-.4 1.7-.1 1.7 .3 1.3 .5 .9 .8 .1 .8M344.4 190.2l-.4 .8-1.1 .7-1.5 .4-1.8 .1-1.6-.3-1.4-.5-.8-.8-.2-.8M335.6 178.4l0 11.4M344.4 178.8l0 11.4\"/></g><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"340\" cy=\"178.6\" r=\"0.5\"/></g><g data-pin=\"a\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M162.4 90.9l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"162.4\" cy=\"86.9\" r=\"0.75\"/></g></g><g data-pin=\"b\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M329.8 190.6l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"329.8\" cy=\"186.6\" r=\"0.75\"/></g></g><g data-pin=\"c\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M237.1 135.4l0-4.1\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"237.1\" cy=\"131.3\" r=\"0.75\"/></g></g><g data-pin=\"d\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M161.5 90.3l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"161.5\" cy=\"86.3\" r=\"0.75\"/></g></g><g data-pin=\"e\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M284.6 163.7l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"284.6\" cy=\"159.7\" r=\"0.75\"/></g></g><g data-pin=\"f\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M196.7 111.3l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"196.7\" cy=\"107.3\" r=\"0.75\"/></g></g><g data-pin=\"g\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M260.8 149.6l0-4.1\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"260.8\" cy=\"145.5\" r=\"0.75\"/></g></g><g data-pin=\"h\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M308.4 177.9l0-4.1\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"308.4\" cy=\"173.8\" r=\"0.75\"/></g></g><g data-pin=\"i\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M175.3 98.6l0-4.1\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"175.3\" cy=\"94.5\" r=\"0.75\"/></g></g><g data-pin=\"j\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M220.4 125.5l0-4.1\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"220.4\" cy=\"121.4\" r=\"0.75\"/></g></g><g data-pin=\"k\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M298.9 172.2l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"298.9\" cy=\"168.2\" r=\"0.75\"/></g></g><g data-pin=\"l\" data-on=\"\"><path class=\"iso-line\" data-tone=\"mid\" d=\"M210.9 119.8l0-4\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"210.9\" cy=\"115.8\" r=\"0.75\"/></g></g><g data-pin=\"z\" data-on=\"\"><path class=\"iso-line\" data-tone=\"hi\" d=\"M346.4 200.5l0-5.6\"/><path class=\"iso-line\" data-tone=\"hi\" d=\"M348.1 195.9l-1.5 .3-1.5-.2-1.1-.6-.1-.8 .9-.7 1.4-.3 1.6 .2 1 .6 .1 .8z\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"346.4\" cy=\"194.9\" r=\"0.6\"/></g></g><g data-part=\"cursor\" transform=\"translate(56.3 33.55)\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M267.9 169.6l.8-.8 27.9-11.7 1.7-.3 1.6 .4 4.8 2.9 .5 .8 0 3.3-.8 .8-27.9 11.7-1.7 .3-1.6-.5-4.8-2.8-.5-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M305.2 164.2l-.8 .8 0-3.3 .8-.8zM304.4 165l-27.9 11.7 0-3.3 27.9-11.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M276.5 176.7l-1.7 .3 0-3.3 1.7-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M274.8 177l-1.6-.5 0-3.2 1.6 .4z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M273.2 176.5l-4.8-2.8 0-3.3 4.8 2.9zM268.4 173.7l-.5-.9 0-3.2 .5 .8z\"/><path class=\"iso-top\" d=\"M304.7 160.1l.5 .8-.8 .8-27.9 11.7-1.7 .3-1.6-.4-4.8-2.9-.5-.8 .8-.8 27.9-11.7 1.7-.3 1.6 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M305.2 160.9l-.8 .8-27.9 11.7-1.7 .3-1.6-.4-4.8-2.9-.5-.8\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M305.2 160.9l-1.3 .6-27.7 11.6-1.4 .3-1.2-.4-4.6-2.7-1.1-.7\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M267.9 169.6l.8-.8 27.9-11.7 1.7-.3 1.6 .4 4.8 2.9 .5 .8M305.2 164.2l-.8 .8-27.9 11.7-1.7 .3-1.6-.5-4.8-2.8-.5-.9M305.2 160.9l0 3.3M267.9 169.6l0 3.2\"/></g><path class=\"iso-line\" data-tone=\"hi\" d=\"M301.6 159l-30.1 12.6\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M97.8 71l1-1 17.2-7.2 2-.3 1.9 .5 23.4 14 .7 1 0 1.6-1 .9-17.2 7.3-2 .3-1.9-.5-23.4-14-.7-1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M144 79.6l-1 .9 0-1.6 1-.9zM143 80.5l-17.2 7.3 0-1.7 17.2-7.2z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M125.8 87.8l-2 .3 0-1.6 2-.4z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M123.8 88.1l-1.9-.5 0-1.6 1.9 .5z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M121.9 87.6l-23.4-14 0-1.6 23.4 14zM98.5 73.6l-.7-1 0-1.6 .7 1z\"/><path class=\"iso-top\" d=\"M143.3 77l.7 1-1 .9-17.2 7.2-2 .4-1.9-.5-23.4-14-.7-1 1-1 17.2-7.2 2-.3 1.9 .5z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M144 78l-1 .9-17.2 7.2-2 .4-1.9-.5-23.4-14-.7-1\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M97.8 71l1-1 17.2-7.2 2-.3 1.9 .5 23.4 14 .7 1M144 79.6l-1 .9-17.2 7.3-2 .3-1.9-.5-23.4-14-.7-1M144 78l0 1.6M97.8 71l0 1.6\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M139.9 77.8l-15.8 6.6-22.2-13.2 15.8-6.6z\"/><path class=\"iso-line\" data-tone=\"lo\" data-free=\"\" d=\"M120.3 70.1l24.1 14.4M116.4 71.8l16.5 9.8M112.5 73.4l21 12.6\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"111.9\" cy=\"69.1\" r=\"0.45\"/><circle cx=\"129.9\" cy=\"79.8\" r=\"0.45\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M371.4 255.8l1.5-3.9 3-3.7 4.3-3.3 5.6-2.9 6.6-2.2 7.3-1.6 7.8-.8 8-.1 7.8 .8 7.4 1.5 6.7 2.1 5.6 2.8 4.5 3.3 3.2 3.7 1.6 3.9 .1 3.9 0 2.9-1.5 3.9-2.9 3.7-4.4 3.3-5.6 2.9-6.5 2.2-7.4 1.6-7.8 .8-7.9 .1-7.9-.8-7.3-1.5-6.7-2.1-5.7-2.8-4.5-3.3-3.1-3.7-1.7-3.9-.1-4z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M438 276l-6.5 2.2 0-2.8 6.5-2.3zM452.4 262.2l-1.5 3.9 0-2.8 1.5-4zM450.9 266.1l-2.9 3.7 0-2.8 2.9-3.7zM448 269.8l-4.4 3.3 0-2.8 4.4-3.3zM443.6 273.1l-5.6 2.9 0-2.9 5.6-2.8z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M431.5 278.2l-7.4 1.6 0-2.8 7.4-1.6zM424.1 279.8l-7.8 .8 0-2.8 7.8-.8zM416.3 280.6l-7.9 .1 0-2.9 7.9 0z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M408.4 280.7l-7.9-.8 0-2.8 7.9 .7zM400.5 279.9l-7.3-1.5 0-2.8 7.3 1.5z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M393.2 278.4l-6.7-2.1 0-2.9 6.7 2.2zM386.5 276.3l-5.7-2.8 0-2.9 5.7 2.8zM380.8 273.5l-4.5-3.3 0-2.8 4.5 3.2zM376.3 270.2l-3.1-3.7 0-2.8 3.1 3.7zM373.2 266.5l-1.7-3.9 0-2.8 1.7 3.9zM371.5 262.6l-.1-4 0-2.8 .1 4z\"/><path class=\"iso-top\" d=\"M438 273.1l-6.5 2.3-7.4 1.6-7.8 .8-7.9 0-7.9-.7-7.3-1.5-6.7-2.2-5.7-2.8-4.5-3.2-3.1-3.7-1.7-3.9-.1-4 1.5-3.9 3-3.7 4.3-3.3 5.6-2.9 6.6-2.2 7.3-1.6 7.8-.8 8-.1 7.8 .8 7.4 1.5 6.7 2.1 5.6 2.8 4.5 3.3 3.2 3.7 1.6 3.9 .1 3.9-1.5 4-2.9 3.7-4.4 3.3z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M452.4 259.3l-1.5 4-2.9 3.7-4.4 3.3-5.6 2.8-6.5 2.3-7.4 1.6-7.8 .8-7.9 0-7.9-.7-7.3-1.5-6.7-2.2-5.7-2.8-4.5-3.2-3.1-3.7-1.7-3.9-.1-4\"/><path class=\"iso-line iso-edge\" data-tone=\"lo\" d=\"M371.4 255.8l1.5-3.9 3-3.7 4.3-3.3 5.6-2.9 6.6-2.2 7.3-1.6 7.8-.8 8-.1 7.8 .8 7.4 1.5 6.7 2.1 5.6 2.8 4.5 3.3 3.2 3.7 1.6 3.9 .1 3.9M452.4 262.2l-1.5 3.9-2.9 3.7-4.4 3.3-5.6 2.9-6.5 2.2-7.4 1.6-7.8 .8-7.9 .1-7.9-.8-7.3-1.5-6.7-2.1-5.7-2.8-4.5-3.3-3.1-3.7-1.7-3.9-.1-4M371.4 255.8l0 2.8M452.4 259.3l0 2.9\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M376.9 249.9l.5-3.1 1.6-2.9 2.6-2.8 3.5-2.5 4.3-2.1 5-1.8 5.5-1.3 5.9-.8 6.1-.2 6.1 .2 5.9 .8 5.5 1.3 5 1.8 4.4 2.1 3.5 2.5 2.5 2.8 1.6 2.9 .6 3.1 0 7.7-.6 3-1.6 3-2.5 2.7-3.5 2.5-4.4 2.2-5 1.7-5.5 1.3-5.9 .8-6.1 .3-6.1-.3-5.9-.8-5.5-1.3-5-1.7-4.3-2.2-3.5-2.5-2.6-2.7-1.6-3-.5-3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M434.4 271l-5 1.7 0-7.6 5-1.8zM447 257.6l-.6 3 0-7.7 .6-3zM446.4 260.6l-1.6 3 0-7.7 1.6-3zM444.8 263.6l-2.5 2.7 0-7.7 2.5-2.7zM442.3 266.3l-3.5 2.5 0-7.6 3.5-2.6zM438.8 268.8l-4.4 2.2 0-7.7 4.4-2.1z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M429.4 272.7l-5.5 1.3 0-7.6 5.5-1.3zM423.9 274l-5.9 .8 0-7.7 5.9-.7zM418 274.8l-6.1 .3 0-7.7 6.1-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M411.9 275.1l-6.1-.3 0-7.7 6.1 .3zM405.8 274.8l-5.9-.8 0-7.6 5.9 .7zM399.9 274l-5.5-1.3 0-7.6 5.5 1.3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M394.4 272.7l-5-1.7 0-7.7 5 1.8zM389.4 271l-4.3-2.2 0-7.6 4.3 2.1zM385.1 268.8l-3.5-2.5 0-7.7 3.5 2.6zM381.6 266.3l-2.6-2.7 0-7.7 2.6 2.7zM379 263.6l-1.6-3 0-7.7 1.6 3zM377.4 260.6l-.5-3 0-7.7 .5 3z\"/><path class=\"iso-top\" d=\"M434.4 263.3l-5 1.8-5.5 1.3-5.9 .7-6.1 .3-6.1-.3-5.9-.7-5.5-1.3-5-1.8-4.3-2.1-3.5-2.6-2.6-2.7-1.6-3-.5-3 .5-3.1 1.6-2.9 2.6-2.8 3.5-2.5 4.3-2.1 5-1.8 5.5-1.3 5.9-.8 6.1-.2 6.1 .2 5.9 .8 5.5 1.3 5 1.8 4.4 2.1 3.5 2.5 2.5 2.8 1.6 2.9 .6 3.1-.6 3-1.6 3-2.5 2.7-3.5 2.6z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M447 249.9l-.6 3-1.6 3-2.5 2.7-3.5 2.6-4.4 2.1-5 1.8-5.5 1.3-5.9 .7-6.1 .3-6.1-.3-5.9-.7-5.5-1.3-5-1.8-4.3-2.1-3.5-2.6-2.6-2.7-1.6-3-.5-3\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M447 249.9l-2 2.9-1.5 2.8-2.5 2.7-3.3 2.4-4.2 2.1-4.8 1.7-5.3 1.2-5.6 .8-5.9 .2-5.8-.2-5.7-.8-5.3-1.2-4.8-1.7-4.1-2.1-3.4-2.4-2.5-2.7-1.5-2.8-1.9-2.9\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M376.9 249.9l.5-3.1 1.6-2.9 2.6-2.8 3.5-2.5 4.3-2.1 5-1.8 5.5-1.3 5.9-.8 6.1-.2 6.1 .2 5.9 .8 5.5 1.3 5 1.8 4.4 2.1 3.5 2.5 2.5 2.8 1.6 2.9 .6 3.1M447 257.6l-.6 3-1.6 3-2.5 2.7-3.5 2.5-4.4 2.2-5 1.7-5.5 1.3-5.9 .8-6.1 .3-6.1-.3-5.9-.8-5.5-1.3-5-1.7-4.3-2.2-3.5-2.5-2.6-2.7-1.6-3-.5-3M376.9 249.9l0 7.7M447 249.9l0 7.7\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M434.4 270l0-3.7M430.4 271.5l0-3.7M426 272.6l0-3.6M421.3 273.4l0-3.6M416.4 273.9l0-3.6M411.4 274.1l0-3.7M406.4 273.9l0-3.7M401.5 273.3l0-3.6M396.9 272.4l0-3.7M392.5 271.1l0-3.6M388.6 269.6l0-3.6M385.1 267.8l0-3.6M382.1 265.8l0-3.6M379.8 263.6l0-3.7M378.2 261.2l0-3.6M446.5 259.3l0-3.6M445.4 261.8l0-3.7M443.5 264.1l0-3.6M441.1 266.3l0-3.7M438 268.2l0-3.6\"/><path class=\"iso-line\" data-tone=\"lo\" d=\"M431.4 261.5l-4.3 1.5-4.8 1.2-5.1 .6-5.3 .3-5.3-.3-5.1-.6-4.8-1.2-4.3-1.5-3.7-1.9-3.1-2.1-2.2-2.4-1.4-2.6-.4-2.6 .4-2.6 1.4-2.6 2.2-2.4 3.1-2.2 3.7-1.8 4.3-1.6 4.8-1.1 5.1-.7 5.3-.2 5.3 .2 5.1 .7 4.8 1.1 4.3 1.6 3.8 1.8 3 2.2 2.2 2.4 1.4 2.6 .5 2.6-.5 2.6-1.4 2.6-2.2 2.4-3 2.1z\"/><path class=\"iso-line\" data-tone=\"lo\" d=\"M386.7 245.7l-3.6-.6M389.3 242.8l-3.1-1M393.3 240.4l-2.7-1.3M398.2 238.5l-1.9-1.6M410.1 236.6l-.3-1.9M416.3 236.8l.6-1.9M422.3 237.6l1.5-1.7M427.8 239.2l2.2-1.5M435.7 244l3.4-.9M437.9 246.9l3.6-.4M438.5 250l3.8 0M437.8 253.1l3.6 .5M432 258.6l2.8 1.3M427.4 260.7l2.1 1.6M421.9 262.2l1.4 1.8M415.9 263.1l.5 1.8\"/><path class=\"iso-line\" data-tone=\"hi\" d=\"M388.7 248.9l-7-.3M404.9 238.8l-2.1-3.4M429.8 242.4l5.4-2.3M432.6 255.3l6.2 1.6M409.9 261.5l-.6 3.5\"/><path class=\"iso-line\" data-tone=\"faint\" d=\"M426.9 258.8l-3.3 1.2-3.7 .9-3.9 .5-4.1 .2-4-.2-4-.5-3.7-.9-3.3-1.2-2.9-1.4-2.3-1.7-1.7-1.8-1.1-2-.3-2 .3-2 1.1-2 1.7-1.8 2.3-1.7 2.9-1.5 3.3-1.1 3.7-.9 4-.5 4-.2 4.1 .2 3.9 .5 3.7 .9 3.3 1.1 2.9 1.5 2.3 1.7 1.8 1.8 1 2 .4 2-.4 2-1 2-1.8 1.8-2.3 1.7z\"/><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 394.056 250.27)\" font-size=\"3.4\" text-anchor=\"middle\">0</text><text class=\"iso-face-text\" data-tone=\"mid\" transform=\"matrix(1.501 0.895 -1.789 0.751 408.109 258.387)\" font-size=\"3.4\" text-anchor=\"middle\">100</text><g transform=\"matrix(1.501 0.895 -1.789 0.751 411.917 249.284)\"><g data-part=\"needle\" transform=\"rotate(225.00)\"><path class=\"iso-line\" data-tone=\"lit\" data-free=\"start\" d=\"M-3 0l13.6 0\" style=\"stroke-width:1.2\"/></g></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M408.2 247.5l.3-.8 1-.7 1.5-.3 1.7-.1 1.5 .4 1 .6 .5 .8 0 2.4-.4 .9-1 .6-1.5 .4-1.6 0-1.5-.3-1.1-.7-.4-.8z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M415.7 249.8l-.4 .9 0-2.5 .4-.8zM415.3 250.7l-1 .6 0-2.4 1-.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M414.3 251.3l-1.5 .4 0-2.4 1.5-.4zM412.8 251.7l-1.6 0 0-2.4 1.6 0z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M411.2 251.7l-1.5-.3 0-2.4 1.5 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M409.7 251.4l-1.1-.7 0-2.4 1.1 .7zM408.6 250.7l-.4-.8 0-2.4 .4 .8z\"/><path class=\"iso-top\" d=\"M414.3 248.9l-1.5 .4-1.6 0-1.5-.3-1.1-.7-.4-.8 .3-.8 1-.7 1.5-.3 1.7-.1 1.5 .4 1 .6 .5 .8-.4 .8z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M415.7 247.4l-.4 .8-1 .7-1.5 .4-1.6 0-1.5-.3-1.1-.7-.4-.8\"/><path class=\"iso-line iso-edge\" data-tone=\"hi\" d=\"M408.2 247.5l.3-.8 1-.7 1.5-.3 1.7-.1 1.5 .4 1 .6 .5 .8M415.7 249.8l-.4 .9-1 .6-1.5 .4-1.6 0-1.5-.3-1.1-.7-.4-.8M408.2 247.5l0 2.4M415.7 247.4l0 2.4\"/></g><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"411.9\" cy=\"247.5\" r=\"0.45\"/></g><g data-part=\"gate-back\" transform=\"translate(-59.3 -35.34)\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M351.7 133.1l.1-.8 .8-.6 5.1-2.1 1.3-.3 1.4 .1 1.2 .4 6.6 3.9 .6 .7 0 4.1-.1 .7-.8 .6-5 2.1-1.4 .3-1.4-.1-1.2-.4-6.6-3.9-.6-.7z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M368.8 138.5l-.1 .7 0-4.1 .1-.7zM368.7 139.2l-.8 .6 0-4.1 .8-.6zM367.9 139.8l-5 2.1 0-4.1 5-2.1z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M362.9 141.9l-1.4 .3 0-4.1 1.4-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M361.5 142.2l-1.4-.1 0-4 1.4 0z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M360.1 142.1l-1.2-.4 0-4 1.2 .4zM358.9 141.7l-6.6-3.9 0-4.1 6.6 4zM352.3 137.8l-.6-.7 0-4 .6 .6z\"/><path class=\"iso-top\" d=\"M368.2 133.7l.6 .7-.1 .7-.8 .6-5 2.1-1.4 .3-1.4 0-1.2-.4-6.6-4-.6-.6 .1-.8 .8-.6 5.1-2.1 1.3-.3 1.4 .1 1.2 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M368.8 134.4l-.1 .7-.8 .6-5 2.1-1.4 .3-1.4 0-1.2-.4-6.6-4-.6-.6\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M368.8 134.4l-1 .6-.6 .4-4.8 2-1 .3-1-.1-.9-.3-6.4-3.8-1.4-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M351.7 133.1l.1-.8 .8-.6 5.1-2.1 1.3-.3 1.4 .1 1.2 .4 6.6 3.9 .6 .7M368.8 138.5l-.1 .7-.8 .6-5 2.1-1.4 .3-1.4-.1-1.2-.4-6.6-3.9-.6-.7M368.8 134.4l0 4.1M351.7 133.1l0 4\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M355.6 96.1l.5-.9 1.2-.7 1.6-.4 1.8-.1 1.7 .2 1.4 .6 .9 .8 .2 .9 0 37.4-.5 .9-1.1 .7-1.6 .5-1.9 .1-1.7-.3-1.4-.6-.9-.8-.2-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M364.9 133.9l-.5 .9 0-37.4 .5-.9zM364.4 134.8l-1.1 .7 0-37.4 1.1-.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M363.3 135.5l-1.6 .5 0-37.5 1.6-.4zM361.7 136l-1.9 .1 0-37.5 1.9-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M359.8 136.1l-1.7-.3 0-37.4 1.7 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M358.1 135.8l-1.4-.6 0-37.4 1.4 .6zM356.7 135.2l-.9-.8 0-37.4 .9 .8zM355.8 134.4l-.2-.9 0-37.4 .2 .9z\"/><path class=\"iso-top\" d=\"M363.3 98.1l-1.6 .4-1.9 .1-1.7-.2-1.4-.6-.9-.8-.2-.9 .5-.9 1.2-.7 1.6-.4 1.8-.1 1.7 .2 1.4 .6 .9 .8 .2 .9-.5 .9z\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M355.6 96.1l.5-.9 1.2-.7 1.6-.4 1.8-.1 1.7 .2 1.4 .6 .9 .8 .2 .9M364.9 133.9l-.5 .9-1.1 .7-1.6 .5-1.9 .1-1.7-.3-1.4-.6-.9-.8-.2-.9M355.6 96.1l0 37.4M364.9 96.5l0 37.4\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M364.9 120.6l-.2 .7-.7 .7-1 .5-1.3 .3-1.4 .1-1.5-.1-1.3-.3-1-.5-.7-.7-.2-.7\"/><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M354.4 93.2l.7-1.1 1.4-.9 2-.5 2.3-.1 2.2 .3 1.7 .7 1.1 1 .3 1.1 0 2.9-.7 1.1-1.4 .8-2 .6-2.3 .1-2.1-.3-1.8-.7-1.1-1-.3-1.1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M366.1 96.6l-.7 1.1 0-2.9 .7-1.1zM365.4 97.7l-1.4 .8 0-2.8 1.4-.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M364 98.5l-2 .6 0-2.8 2-.6zM362 99.1l-2.3 .1 0-2.8 2.3-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M359.7 99.2l-2.1-.3 0-2.8 2.1 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M357.6 98.9l-1.8-.7 0-2.8 1.8 .7zM355.8 98.2l-1.1-1 0-2.8 1.1 1zM354.7 97.2l-.3-1.1 0-2.9 .3 1.2z\"/><path class=\"iso-top\" d=\"M364 95.7l-2 .6-2.3 .1-2.1-.3-1.8-.7-1.1-1-.3-1.2 .7-1.1 1.4-.9 2-.5 2.3-.1 2.2 .3 1.7 .7 1.1 1 .3 1.1-.7 1.1z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M366.1 93.7l-.7 1.1-1.4 .9-2 .6-2.3 .1-2.1-.3-1.8-.7-1.1-1-.3-1.2\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M366.1 93.7l-1.3 1-1.2 .7-1.8 .5-2 .1-1.9-.2-1.6-.7-.9-.8-1-1.1\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M354.4 93.2l.7-1.1 1.4-.9 2-.5 2.3-.1 2.2 .3 1.7 .7 1.1 1 .3 1.1M366.1 96.6l-.7 1.1-1.4 .8-2 .6-2.3 .1-2.1-.3-1.8-.7-1.1-1-.3-1.1M354.4 93.2l0 2.9M366.1 93.7l0 2.9\"/></g></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M194.8 69.9l.9-.7 21.4-9.1 1.7-.2 1.6 .4 222.2 132.4 .5 .8 0 6.1-.8 .8-21.5 9-1.7 .3-1.5-.4-222.2-132.4-.6-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M443.1 199.6l-.8 .8 0-6.1 .8-.8zM442.3 200.4l-21.5 9 0-6.1 21.5-9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M420.8 209.4l-1.7 .3 0-6.1 1.7-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M419.1 209.7l-1.5-.4 0-6.1 1.5 .4z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M417.6 209.3l-222.2-132.4 0-6.1 222.2 132.4zM195.4 76.9l-.6-.9 0-6.1 .6 .9z\"/><path class=\"iso-top\" d=\"M442.6 192.7l.5 .8-.8 .8-21.5 9-1.7 .3-1.5-.4-222.2-132.4-.6-.9 .9-.7 21.4-9.1 1.7-.2 1.6 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M443.1 193.5l-.8 .8-21.5 9-1.7 .3-1.5-.4-222.2-132.4-.6-.9\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M443.1 193.5l-1.5 .5-21.2 8.9-1.2 .2-1.1-.3-221.9-132.2-1.4-.7\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M194.8 69.9l.9-.7 21.4-9.1 1.7-.2 1.6 .4 222.2 132.4 .5 .8M443.1 199.6l-.8 .8-21.5 9-1.7 .3-1.5-.4-222.2-132.4-.6-.9M443.1 193.5l0 6.1M194.8 69.9l0 6.1\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M219.4 47.3l.4-.4 1.4-.6 .9-.1 .8 .2 223.7 133.2 .2 .5 0 18.2-.4 .4-1.4 .6-.9 .1-.8-.2-223.6-133.3-.3-.4z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M446.8 198.3l-.4 .4 0-18.2 .4-.4zM446.4 198.7l-1.4 .6 0-18.2 1.4-.6z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M445 199.3l-.9 .1 0-18.2 .9-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M444.1 199.4l-.8-.2 0-18.2 .8 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M443.3 199.2l-223.6-133.3 0-18.2 223.6 133.3zM219.7 65.9l-.3-.4 0-18.2 .3 .4z\"/><path class=\"iso-top\" d=\"M446.6 179.6l.2 .5-.4 .4-1.4 .6-.9 .1-.8-.2-223.6-133.3-.3-.4 .4-.4 1.4-.6 .9-.1 .8 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M446.8 180.1l-.4 .4-1.4 .6-.9 .1-.8-.2-223.6-133.3-.3-.4\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M446.8 180.1l-1.1 .1-1.2 .5-.3 0-.3-.1-223.4-133.1-1.1-.2\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M219.4 47.3l.4-.4 1.4-.6 .9-.1 .8 .2 223.7 133.2 .2 .5M446.8 198.3l-.4 .4-1.4 .6-.9 .1-.8-.2-223.6-133.3-.3-.4M446.8 180.1l0 18.2M219.4 47.3l0 18.2\"/></g><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"250.5\" cy=\"64.5\" r=\"0.4\"/><circle cx=\"333.1\" cy=\"113.7\" r=\"0.4\"/><circle cx=\"415.7\" cy=\"162.9\" r=\"0.4\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M227.7 77.4l-3.3 .9-3.7 .5-3.7-.2-3.5-.7-2.9-1.3-2-1.6-.8-1.9 .3-1.9 1.5-1.7 2.5-1.4 3.2-1 3.8-.5 3.7 .2 3.5 .8 2.9 1.2 2 1.6 .8 1.9-.3 1.9-1.5 1.7zM244.2 87.2l-3.2 1-3.7 .4-3.8-.2-3.5-.7-2.9-1.3-1.9-1.6-.9-1.8 .3-1.9 1.5-1.8 2.5-1.4 3.3-1 3.7-.4 3.7 .2 3.5 .7 2.9 1.2 2 1.7 .8 1.8-.3 1.9-1.5 1.8zM260.7 97l-3.2 1-3.7 .4-3.8-.1-3.5-.8-2.9-1.2-1.9-1.6-.9-1.9 .3-1.9 1.5-1.7 2.5-1.5 3.3-.9 3.7-.5 3.8 .2 3.5 .7 2.8 1.3 2 1.6 .8 1.9-.3 1.9-1.5 1.7zM277.2 106.9l-3.2 1-3.7 .4-3.8-.2-3.5-.7-2.9-1.3-1.9-1.6-.9-1.9 .4-1.8 1.4-1.8 2.5-1.4 3.3-1 3.7-.4 3.8 .1 3.5 .8 2.8 1.2 2 1.6 .9 1.9-.4 1.9-1.5 1.7zM293.8 116.7l-3.3 1-3.7 .4-3.8-.1-3.5-.8-2.9-1.2-1.9-1.7-.9-1.8 .4-1.9 1.5-1.8 2.4-1.4 3.3-1 3.7-.4 3.8 .2 3.5 .7 2.9 1.3 1.9 1.6 .9 1.8-.4 1.9-1.4 1.8zM310.3 126.6l-3.3 .9-3.7 .5-3.8-.2-3.5-.7-2.8-1.3-2-1.6-.8-1.9 .3-1.9 1.5-1.7 2.5-1.4 3.2-1 3.7-.5 3.8 .2 3.5 .8 2.9 1.2 1.9 1.6 .9 1.9-.3 1.9-1.5 1.7zM326.8 136.4l-3.3 1-3.7 .4-3.8-.2-3.5-.7-2.8-1.3-2-1.6-.8-1.8 .3-1.9 1.5-1.8 2.5-1.4 3.2-1 3.7-.4 3.8 .2 3.5 .7 2.9 1.2 1.9 1.7 .9 1.8-.3 1.9-1.5 1.8zM343.3 146.2l-3.3 1-3.7 .4-3.7-.1-3.5-.8-2.9-1.2-2-1.6-.8-1.9 .3-1.9 1.5-1.7 2.5-1.5 3.2-.9 3.7-.5 3.8 .2 3.5 .7 2.9 1.3 2 1.6 .8 1.9-.3 1.9-1.5 1.7zM359.8 156.1l-3.2 1-3.7 .4-3.8-.2-3.5-.7-2.9-1.3-2-1.6-.8-1.9 .3-1.8 1.5-1.8 2.5-1.4 3.3-1 3.7-.4 3.7 .1 3.5 .8 2.9 1.2 2 1.6 .8 1.9-.3 1.9-1.5 1.7zM376.3 165.9l-3.2 1-3.7 .4-3.8-.1-3.5-.8-2.9-1.2-1.9-1.7-.9-1.8 .3-1.9 1.5-1.8 2.5-1.4 3.3-1 3.7-.4 3.8 .2 3.5 .7 2.8 1.3 2 1.6 .8 1.8-.3 1.9-1.5 1.8zM392.8 175.8l-3.2 .9-3.7 .5-3.8-.2-3.5-.7-2.9-1.3-1.9-1.6-.9-1.9 .4-1.9 1.4-1.7 2.5-1.4 3.3-1 3.7-.5 3.8 .2 3.5 .8 2.8 1.2 2 1.6 .9 1.9-.4 1.9-1.5 1.7zM409.4 185.6l-3.3 1-3.7 .4-3.8-.2-3.5-.7-2.9-1.3-1.9-1.6-.9-1.8 .4-1.9 1.5-1.8 2.4-1.4 3.3-1 3.7-.4 3.8 .2 3.5 .7 2.9 1.2 1.9 1.7 .9 1.8-.4 1.9-1.5 1.8zM425.9 195.4l-3.3 1-3.7 .4-3.8-.1-3.5-.8-2.8-1.2-2-1.6-.9-1.9 .4-1.9 1.5-1.7 2.5-1.5 3.2-.9 3.7-.5 3.8 .2 3.5 .7 2.9 1.3 1.9 1.6 .9 1.9-.4 1.9-1.4 1.7z\"/><path class=\"iso-line\" data-tone=\"faint\" d=\"M207.9 65.5l3.3 2\"/><g data-lost=\"0\" class=\"dw-lost\"><path class=\"iso-line\" data-tone=\"lo\" d=\"M221 66.7l-2.2 12.1M207.8 72.2l24.2 1\"/></g><g data-lost=\"1\" class=\"dw-lost\"><path class=\"iso-line\" data-tone=\"lo\" d=\"M237.5 76.5l-2.1 12.1M224.3 82l24.2 1.1\"/></g><g data-lost=\"2\" class=\"dw-lost\"><path class=\"iso-line\" data-tone=\"lo\" d=\"M254 86.3l-2.1 12.1M240.8 91.9l24.2 1\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M428.7 208.7l.1-.9 1-.6 20.1-8.5 1.5-.3 1.7 .1 1.4 .4 18.3 11 .7 .7 0 6.9-.2 .8-.9 .7-20.1 8.4-1.5 .4-1.7-.1-1.4-.5-18.3-10.9-.7-.7z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M473.5 217.5l-.2 .8 0-6.8 .2-.9zM473.3 218.3l-.9 .7 0-6.8 .9-.7zM472.4 219l-20.1 8.4 0-6.8 20.1-8.4z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M452.3 227.4l-1.5 .4 0-6.9 1.5-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M450.8 227.8l-1.7-.1 0-6.8 1.7 0z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M449.1 227.7l-1.4-.5 0-6.8 1.4 .5zM447.7 227.2l-18.3-10.9 0-6.8 18.3 10.9zM429.4 216.3l-.7-.7 0-6.9 .7 .8z\"/><path class=\"iso-top\" d=\"M472.8 209.9l.7 .7-.2 .9-.9 .7-20.1 8.4-1.5 .3-1.7 0-1.4-.5-18.3-10.9-.7-.8 .1-.9 1-.6 20.1-8.5 1.5-.3 1.7 .1 1.4 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M473.5 210.6l-.2 .9-.9 .7-20.1 8.4-1.5 .3-1.7 0-1.4-.5-18.3-10.9-.7-.8\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M473.5 210.6l-1.3 .7-.7 .5-19.8 8.3-1.1 .3-1.1-.1-1-.4-18.1-10.8-1.7-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M428.7 208.7l.1-.9 1-.6 20.1-8.5 1.5-.3 1.7 .1 1.4 .4 18.3 11 .7 .7M473.5 217.5l-.2 .8-.9 .7-20.1 8.4-1.5 .4-1.7-.1-1.4-.5-18.3-10.9-.7-.7M473.5 210.6l0 6.9M428.7 208.7l0 6.9\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M458.9 214.3l-3.3 1-3.7 .4-3.7-.2-3.5-.7-2.9-1.2-2-1.7-.8-1.8 .3-1.9 1.5-1.8 2.5-1.4 3.2-1 3.7-.4 3.8 .2 3.5 .7 2.9 1.3 2 1.6 .8 1.8-.3 1.9-1.5 1.8z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"451.7\" cy=\"201.6\" r=\"0.45\"/><circle cx=\"450.5\" cy=\"217.7\" r=\"0.45\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M156.4 55.4l.2-1 1.1-.8 28.3-11.8 1.7-.4 2 .1 1.6 .5 23.7 14.2 .8 .8 0 2.5-.2 .9-1.1 .8-28.3 11.9-1.7 .4-1.9-.1-1.6-.6-23.7-14.1-.9-.9z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M215.8 59.5l-.2 .9 0-2.4 .2-1zM215.6 60.4l-1.1 .8 0-2.4 1.1-.8zM214.5 61.2l-28.3 11.9 0-2.5 28.3-11.8z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M186.2 73.1l-1.7 .4 0-2.4 1.7-.5z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M184.5 73.5l-1.9-.1 0-2.4 1.9 .1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M182.6 73.4l-1.6-.6 0-2.4 1.6 .6zM181 72.8l-23.7-14.1 0-2.4 23.7 14.1zM157.3 58.7l-.9-.9 0-2.4 .9 .9z\"/><path class=\"iso-top\" d=\"M215 56.2l.8 .8-.2 1-1.1 .8-28.3 11.8-1.7 .5-1.9-.1-1.6-.6-23.7-14.1-.9-.9 .2-1 1.1-.8 28.3-11.8 1.7-.4 2 .1 1.6 .5z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M215.8 57l-.2 1-1.1 .8-28.3 11.8-1.7 .5-1.9-.1-1.6-.6-23.7-14.1-.9-.9\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M215.8 57l-1.1 .8-.9 .7-28.1 11.7-1.4 .4-1.4-.1-1.3-.4-23.5-14.1-1.7-.6\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M156.4 55.4l.2-1 1.1-.8 28.3-11.8 1.7-.4 2 .1 1.6 .5 23.7 14.2 .8 .8M215.8 59.5l-.2 .9-1.1 .8-28.3 11.9-1.7 .4-1.9-.1-1.6-.6-23.7-14.1-.9-.9M215.8 57l0 2.5M156.4 55.4l0 2.4\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M186.7 26.9l.4-.3 1-.5 .7-.1 .7 .2 27.3 16.3 .2 .3 0 14.8-.3 .3-1.1 .4-.7 .1-.6-.1-27.4-16.3-.2-.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M217 57.6l-.3 .3 0-14.8 .3-.3zM216.7 57.9l-1.1 .4 0-14.7 1.1-.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M215.6 58.3l-.7 .1 0-14.7 .7-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M214.9 58.4l-.6-.1 0-14.8 .6 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M214.3 58.3l-27.4-16.3 0-14.8 27.4 16.3zM186.9 42l-.2-.3 0-14.8 .2 .3z\"/><path class=\"iso-top\" d=\"M216.8 42.5l.2 .3-.3 .3-1.1 .5-.7 .1-.6-.2-27.4-16.3-.2-.3 .4-.3 1-.5 .7-.1 .7 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M217 42.8l-.3 .3-1.1 .5-.7 .1-.6-.2-27.4-16.3-.2-.3\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M186.7 26.9l.4-.3 1-.5 .7-.1 .7 .2 27.3 16.3 .2 .3M217 57.6l-.3 .3-1.1 .4-.7 .1-.6-.1-27.4-16.3-.2-.3M217 42.8l0 14.8M186.7 26.9l0 14.8\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M155.2 40.1l.4-.3 32.5-13.7 .7-.1 .7 .2 .9 .5 .2 .4 0 14.7-.4 .3-32.5 13.7-.7 .1-.6-.2-.9-.5-.3-.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M190.6 41.8l-.4 .3 0-14.7 .4-.3zM190.2 42.1l-32.5 13.7 0-14.8 32.5-13.6z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M157.7 55.8l-.7 .1 0-14.8 .7-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M157 55.9l-.6-.2 0-14.7 .6 .1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M156.4 55.7l-.9-.5 0-14.8 .9 .6zM155.5 55.2l-.3-.3 0-14.8 .3 .3z\"/><path class=\"iso-top\" d=\"M190.4 26.7l.2 .4-.4 .3-32.5 13.6-.7 .1-.6-.1-.9-.6-.3-.3 .4-.3 32.5-13.7 .7-.1 .7 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M190.6 27.1l-.4 .3-32.5 13.6-.7 .1-.6-.1-.9-.6-.3-.3\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M155.2 40.1l.4-.3 32.5-13.7 .7-.1 .7 .2 .9 .5 .2 .4M190.6 41.8l-.4 .3-32.5 13.7-.7 .1-.6-.2-.9-.5-.3-.3M190.6 27.1l0 14.7M155.2 40.1l0 14.8\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M193.9 60.9l-3.2 .9-3.7 .5-3.8-.2-3.5-.7-2.9-1.3-1.9-1.6-.9-1.9 .3-1.9 1.5-1.7 2.5-1.4 3.3-1 3.7-.4 3.8 .1 3.5 .8 2.8 1.2 2 1.6 .8 1.9-.3 1.9-1.5 1.7z\"/><g data-layer=\"bin\"></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M181.7 55.8l.3-.3 32.6-13.6 .6-.1 .7 .1 .9 .6 .2 .3 0 14.8-.3 .3-32.6 13.6-.7 .2-.6-.2-.9-.6-.2-.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M217 57.6l-.3 .3 0-14.8 .3-.3zM216.7 57.9l-32.6 13.6 0-14.7 32.6-13.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M184.1 71.5l-.7 .2 0-14.8 .7-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M183.4 71.7l-.6-.2 0-14.8 .6 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M182.8 71.5l-.9-.6 0-14.7 .9 .5zM181.9 70.9l-.2-.3 0-14.8 .2 .4z\"/><path class=\"iso-top\" d=\"M216.8 42.5l.2 .3-.3 .3-32.6 13.7-.7 .1-.6-.2-.9-.5-.2-.4 .3-.3 32.6-13.6 .6-.1 .7 .1z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M217 42.8l-.3 .3-32.6 13.7-.7 .1-.6-.2-.9-.5-.2-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M181.7 55.8l.3-.3 32.6-13.6 .6-.1 .7 .1 .9 .6 .2 .3M217 57.6l-.3 .3-32.6 13.6-.7 .2-.6-.2-.9-.6-.2-.3M217 42.8l0 14.8M181.7 55.8l0 14.8\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M155.2 40.1l.4-.3 1-.5 .7-.1 .7 .2 27.3 16.3 .2 .3 0 14.8-.3 .3-1.1 .4-.7 .2-.6-.2-27.3-16.3-.3-.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M185.5 70.8l-.3 .3 0-14.8 .3-.3zM185.2 71.1l-1.1 .4 0-14.7 1.1-.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M184.1 71.5l-.7 .2 0-14.8 .7-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M183.4 71.7l-.6-.2 0-14.8 .6 .2z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M182.8 71.5l-27.3-16.3 0-14.8 27.3 16.3zM155.5 55.2l-.3-.3 0-14.8 .3 .3z\"/><path class=\"iso-top\" d=\"M185.3 55.7l.2 .3-.3 .3-1.1 .5-.7 .1-.6-.2-27.3-16.3-.3-.3 .4-.3 1-.5 .7-.1 .7 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M185.5 56l-.3 .3-1.1 .5-.7 .1-.6-.2-27.3-16.3-.3-.3\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M155.2 40.1l.4-.3 1-.5 .7-.1 .7 .2 27.3 16.3 .2 .3M185.5 70.8l-.3 .3-1.1 .4-.7 .2-.6-.2-27.3-16.3-.3-.3M185.5 56l0 14.8M155.2 40.1l0 14.8\"/></g><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"160\" cy=\"41.9\" r=\"0.4\"/><circle cx=\"180.7\" cy=\"54.2\" r=\"0.4\"/></g><g data-layer=\"line\"><g data-token=\"0\" transform=\"translate(78.46 9.8)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"1\" transform=\"translate(-53.66 -68.92)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"2\" transform=\"translate(61.94 -0.04)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"3\" transform=\"translate(-86.68 -88.6)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"4\" transform=\"translate(-70.17 -78.76)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"5\" transform=\"translate(111.48 29.48)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"6\" transform=\"translate(-20.63 -49.24)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"7\" transform=\"translate(45.43 -9.88)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"8\" transform=\"translate(94.97 19.64)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"9\" transform=\"translate(12.4 -29.56)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"10\" transform=\"translate(28.91 -19.72)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"11\" transform=\"translate(-37.14 -59.08)\"><use href=\"#dw-draw-token\"/></g><g data-token=\"12\" transform=\"translate(-4.11 -39.4)\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M296.3 155l.9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2 0 6.5-1 2.2-2.7 1.8-4.1 1.1-4.6 0-4.1-.9-3-1.7-1.1-2.3z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M316.9 161.2l-1 2.2 0-6.5 1-2.2zM315.9 163.4l-2.7 1.8 0-6.4 2.7-1.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M313.2 165.2l-4.1 1.1 0-6.5 4.1-1zM309.1 166.3l-4.6 0 0-6.4 4.6-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M304.5 166.3l-4.1-.9 0-6.5 4.1 1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M300.4 165.4l-3-1.7 0-6.5 3 1.7zM297.4 163.7l-1.1-2.3 0-6.4 1.1 2.2z\"/><path class=\"iso-top\" d=\"M313.2 158.8l-4.1 1-4.6 .1-4.1-1-3-1.7-1.1-2.2 .9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2-1 2.2z\"/><path class=\"iso-line iso-crease\" data-tone=\"lo\" d=\"M316.9 154.7l-1 2.2-2.7 1.9-4.1 1-4.6 .1-4.1-1-3-1.7-1.1-2.2\"/><path class=\"iso-line iso-bevel\" data-tone=\"lo\" d=\"M316.9 154.7l-1.8 2.1-2.5 1.6-3.7 1-4.2 0-3.8-.8-2.6-1.6-2-2\"/><path class=\"iso-line iso-edge\" data-tone=\"hi\" d=\"M296.3 155l.9-2.3 2.8-1.8 4-1 4.6-.1 4.2 .9 2.9 1.8 1.2 2.2M316.9 161.2l-1 2.2-2.7 1.8-4.1 1.1-4.6 0-4.1-.9-3-1.7-1.1-2.3M296.3 155l0 6.4M316.9 154.7l0 6.5\"/></g><path class=\"iso-line\" data-tone=\"hi\" d=\"M309.7 156.7l-1.9 .5-2.2 0-2-.4-1.4-.8-.5-1.1 .4-1.1 1.3-.8 2-.5 2.2-.1 1.9 .5 1.4 .8 .6 1.1-.4 1z\"/><g class=\"iso-dots\" data-tone=\"hi\"><circle cx=\"306.6\" cy=\"154.8\" r=\"0.55\"/></g></g><g data-part=\"gate-bar\" transform=\"translate(-59.3 -35.34)\"><g data-part=\"flap\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M325.5 114l.2-.2 20.4-8.6 .6-.1 .4 .2 1.2 .7 .2 .2 0 31.6-.3 .2-20.4 8.6-.5 .1-.4-.2-1.2-.7-.2-.2z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M348.5 137.8l-.3 .2 0-31.5 .3-.3zM348.2 138l-20.4 8.6 0-31.6 20.4-8.5z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M327.8 146.6l-.5 .1 0-31.6 .5-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M327.3 146.7l-.4-.2 0-31.5 .4 .1z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M326.9 146.5l-1.2-.7 0-31.5 1.2 .7zM325.7 145.8l-.2-.2 0-31.6 .2 .3z\"/><path class=\"iso-top\" d=\"M348.3 106l.2 .2-.3 .3-20.4 8.5-.5 .1-.4-.1-1.2-.7-.2-.3 .2-.2 20.4-8.6 .6-.1 .4 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"lo\" d=\"M348.5 106.2l-.3 .3-20.4 8.5-.5 .1-.4-.1-1.2-.7-.2-.3\"/><path class=\"iso-line iso-edge\" data-tone=\"hi\" d=\"M325.5 114l.2-.2 20.4-8.6 .6-.1 .4 .2 1.2 .7 .2 .2M348.5 137.8l-.3 .2-20.4 8.6-.5 .1-.4-.2-1.2-.7-.2-.2M348.5 106.2l0 31.6M325.5 114l0 31.6\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M333.3 105.7l.3-.8 1-.7 1.5-.3 1.6-.1 1.6 .4 1 .6 .4 .8 0 4.5-.3 .8-1 .6-1.5 .4-1.6 0-1.6-.3-1-.6-.4-.8z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M340.7 110.1l-.3 .8 0-4.5 .3-.8zM340.4 110.9l-1 .6 0-4.4 1-.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M339.4 111.5l-1.5 .4 0-4.4 1.5-.4zM337.9 111.9l-1.6 0 0-4.4 1.6 0z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M336.3 111.9l-1.6-.3 0-4.4 1.6 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M334.7 111.6l-1-.6 0-4.5 1 .7zM333.7 111l-.4-.8 0-4.5 .4 .8z\"/><path class=\"iso-top\" d=\"M339.4 107.1l-1.5 .4-1.6 0-1.6-.3-1-.7-.4-.8 .3-.8 1-.7 1.5-.3 1.6-.1 1.6 .4 1 .6 .4 .8-.3 .8z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M340.7 105.6l-.3 .8-1 .7-1.5 .4-1.6 0-1.6-.3-1-.7-.4-.8\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M340.7 105.6l-.9 .7-.9 .5-1.2 .3-1.3 .1-1.2-.3-.9-.5-1-.7\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M333.3 105.7l.3-.8 1-.7 1.5-.3 1.6-.1 1.6 .4 1 .6 .4 .8M340.7 110.1l-.3 .8-1 .6-1.5 .4-1.6 0-1.6-.3-1-.6-.4-.8M333.3 105.7l0 4.5M340.7 105.6l0 4.5\"/></g></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M306.6 113l.6-.6 53-22.2 1.3-.3 1.3 .4 4.2 2.5 .4 .7 0 8.9-.6 .6-53 22.2-1.3 .2-1.3-.3-4.2-2.5-.4-.7z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M367.4 102.4l-.6 .6 0-8.9 .6-.6zM366.8 103l-53 22.2 0-8.9 53-22.2z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M313.8 125.2l-1.3 .2 0-8.9 1.3-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M312.5 125.4l-1.3-.3 0-8.9 1.3 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M311.2 125.1l-4.2-2.5 0-8.9 4.2 2.5zM307 122.6l-.4-.7 0-8.9 .4 .7z\"/><path class=\"iso-top\" d=\"M367 92.8l.4 .7-.6 .6-53 22.2-1.3 .2-1.3-.3-4.2-2.5-.4-.7 .6-.6 53-22.2 1.3-.3 1.3 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M367.4 93.5l-.6 .6-53 22.2-1.3 .2-1.3-.3-4.2-2.5-.4-.7\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M367.4 93.5l-1.5 .2-52.6 22.1-.7 .1-.7-.2-3.9-2.3-1.4-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M306.6 113l.6-.6 53-22.2 1.3-.3 1.3 .4 4.2 2.5 .4 .7M367.4 102.4l-.6 .6-53 22.2-1.3 .2-1.3-.3-4.2-2.5-.4-.7M367.4 93.5l0 8.9M306.6 113l0 8.9\"/></g><path class=\"iso-line\" data-tone=\"lo\" d=\"M349.2 98.9l.2 .3-.3 .3-21.5 9-.7 .2-.6-.2-1.5-.9-.2-.3 .3-.4 21.5-9 .7-.1 .6 .2z\"/><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"360.3\" cy=\"93.5\" r=\"0.45\"/><circle cx=\"313.7\" cy=\"113\" r=\"0.45\"/></g></g><g data-part=\"stop\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M415 190.3l.8-.8 30.1-12.6 1.7-.3 1.5 .5 3.6 2.1 .6 .9 0 21.2-.8 .8-30.1 12.6-1.7 .3-1.6-.4-3.6-2.2-.5-.8z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M453.3 201.3l-.8 .8 0-21.3 .8-.7zM452.5 202.1l-30.1 12.6 0-21.2 30.1-12.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M422.4 214.7l-1.7 .3 0-21.3 1.7-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M420.7 215l-1.6-.4 0-21.3 1.6 .4z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M419.1 214.6l-3.6-2.2 0-21.2 3.6 2.1zM415.5 212.4l-.5-.8 0-21.3 .5 .9z\"/><path class=\"iso-top\" d=\"M452.7 179.2l.6 .9-.8 .7-30.1 12.7-1.7 .2-1.6-.4-3.6-2.1-.5-.9 .8-.8 30.1-12.6 1.7-.3 1.5 .5z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M453.3 180.1l-.8 .7-30.1 12.7-1.7 .2-1.6-.4-3.6-2.1-.5-.9\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M453.3 180.1l-1.8 .4-29.7 12.4-1 .2-1-.2-3.3-2-1.5-.6\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M415 190.3l.8-.8 30.1-12.6 1.7-.3 1.5 .5 3.6 2.1 .6 .9M453.3 201.3l-.8 .8-30.1 12.6-1.7 .3-1.6-.4-3.6-2.2-.5-.8M453.3 180.1l0 21.2M415 190.3l0 21.3\"/></g><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"444\" cy=\"181.1\" r=\"0.45\"/><circle cx=\"424.3\" cy=\"189.3\" r=\"0.45\"/></g></g></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M191.1 66.8l.4-.4 1.5-.6 .8-.1 .8 .2 223.7 133.3 .3 .4 0 10.5-.4 .4-1.5 .6-.8 .2-.8-.2-223.7-133.3-.3-.5z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M418.6 210.1l-.4 .4 0-10.5 .4-.4zM418.2 210.5l-1.5 .6 0-10.5 1.5-.6z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M416.7 211.1l-.8 .2 0-10.5 .8-.2z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M415.9 211.3l-.8-.2 0-10.6 .8 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M415.1 211.1l-223.7-133.3 0-10.5 223.7 133.2zM191.4 77.8l-.3-.5 0-10.5 .3 .5z\"/><path class=\"iso-top\" d=\"M418.3 199.2l.3 .4-.4 .4-1.5 .6-.8 .2-.8-.3-223.7-133.2-.3-.5 .4-.4 1.5-.6 .8-.1 .8 .2z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M418.6 199.6l-.4 .4-1.5 .6-.8 .2-.8-.3-223.7-133.2-.3-.5\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M418.6 199.6l-1.2 .1-1.1 .5-.3 .1-.3-.1-223.5-133.2-1.1-.2\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M191.1 66.8l.4-.4 1.5-.6 .8-.1 .8 .2 223.7 133.3 .3 .4M418.6 210.1l-.4 .4-1.5 .6-.8 .2-.8-.2-223.7-133.3-.3-.5M418.6 199.6l0 10.5M191.1 66.8l0 10.5\"/></g><g class=\"iso-dots\" data-tone=\"mid\"><circle cx=\"255.3\" cy=\"103.7\" r=\"0.4\"/><circle cx=\"354.4\" cy=\"162.7\" r=\"0.4\"/></g><g data-part=\"gate-front\" transform=\"translate(-59.3 -35.34)\"><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M305.2 152.6l.1-.7 .8-.6 5-2.1 1.4-.4 1.4 .1 1.2 .4 6.6 4 .6 .6 0 4.1-.1 .7-.9 .6-5 2.1-1.3 .3-1.4-.1-1.2-.4-6.6-3.9-.6-.7z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M322.3 158l-.1 .7 0-4.1 .1-.7zM322.2 158.7l-.9 .6 0-4.1 .9-.6zM321.3 159.3l-5 2.1 0-4.1 5-2.1z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M316.3 161.4l-1.3 .3 0-4.1 1.3-.3z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M315 161.7l-1.4-.1 0-4 1.4 0z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M313.6 161.6l-1.2-.4 0-4 1.2 .4zM312.4 161.2l-6.6-3.9 0-4.1 6.6 4zM305.8 157.3l-.6-.7 0-4 .6 .6z\"/><path class=\"iso-top\" d=\"M321.7 153.3l.6 .6-.1 .7-.9 .6-5 2.1-1.3 .3-1.4 0-1.2-.4-6.6-4-.6-.6 .1-.7 .8-.6 5-2.1 1.4-.4 1.4 .1 1.2 .4z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M322.3 153.9l-.1 .7-.9 .6-5 2.1-1.3 .3-1.4 0-1.2-.4-6.6-4-.6-.6\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M322.3 153.9l-1 .6-.6 .4-4.9 2-.9 .3-1-.1-.9-.3-6.4-3.8-1.4-.4\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M305.2 152.6l.1-.7 .8-.6 5-2.1 1.4-.4 1.4 .1 1.2 .4 6.6 4 .6 .6M322.3 158l-.1 .7-.9 .6-5 2.1-1.3 .3-1.4-.1-1.2-.4-6.6-3.9-.6-.7M322.3 153.9l0 4.1M305.2 152.6l0 4\"/></g><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M309.1 115.6l.5-.8 1.1-.8 1.6-.4 1.8-.1 1.8 .3 1.4 .5 .9 .8 .2 .9 0 37.5-.5 .8-1.2 .7-1.6 .5-1.8 .1-1.7-.3-1.4-.6-.9-.7-.2-1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M318.4 153.5l-.5 .8 0-37.4 .5-.9zM317.9 154.3l-1.2 .7 0-37.4 1.2-.7z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M316.7 155l-1.6 .5 0-37.4 1.6-.5zM315.1 155.5l-1.8 .1 0-37.4 1.8-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M313.3 155.6l-1.7-.3 0-37.4 1.7 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M311.6 155.3l-1.4-.6 0-37.4 1.4 .6zM310.2 154.7l-.9-.7 0-37.5 .9 .8zM309.3 154l-.2-1 0-37.4 .2 .9z\"/><path class=\"iso-top\" d=\"M316.7 117.6l-1.6 .5-1.8 .1-1.7-.3-1.4-.6-.9-.8-.2-.9 .5-.8 1.1-.8 1.6-.4 1.8-.1 1.8 .3 1.4 .5 .9 .8 .2 .9-.5 .9z\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M309.1 115.6l.5-.8 1.1-.8 1.6-.4 1.8-.1 1.8 .3 1.4 .5 .9 .8 .2 .9M318.4 153.5l-.5 .8-1.2 .7-1.6 .5-1.8 .1-1.7-.3-1.4-.6-.9-.7-.2-1M309.1 115.6l0 37.4M318.4 116l0 37.5\"/></g><path class=\"iso-line\" data-tone=\"faint\" d=\"M318.4 140.1l-.2 .7-.7 .7-1 .5-1.3 .3-1.5 .1-1.4-.1-1.3-.3-1-.5-.7-.7-.2-.7\"/><g class=\"iso-solid\"><path class=\"iso-fill\" d=\"M307.9 112.7l.7-1.1 1.4-.8 2-.6 2.2-.1 2.2 .3 1.8 .7 1.1 1 .3 1.2 0 2.8-.7 1.1-1.4 .9-2 .5-2.3 .1-2.2-.3-1.7-.7-1.1-1-.3-1.1z\"/><path class=\"iso-shade\" data-shade=\"0\" d=\"M319.6 116.1l-.7 1.1 0-2.9 .7-1zM318.9 117.2l-1.4 .9 0-2.9 1.4-.9z\"/><path class=\"iso-shade\" data-shade=\"1\" d=\"M317.5 118.1l-2 .5 0-2.8 2-.6zM315.5 118.6l-2.3 .1 0-2.8 2.3-.1z\"/><path class=\"iso-shade\" data-shade=\"2\" d=\"M313.2 118.7l-2.2-.3 0-2.8 2.2 .3z\"/><path class=\"iso-shade\" data-shade=\"3\" d=\"M311 118.4l-1.7-.7 0-2.8 1.7 .7zM309.3 117.7l-1.1-1 0-2.8 1.1 1zM308.2 116.7l-.3-1.1 0-2.9 .3 1.2z\"/><path class=\"iso-top\" d=\"M317.5 115.2l-2 .6-2.3 .1-2.2-.3-1.7-.7-1.1-1-.3-1.2 .7-1.1 1.4-.8 2-.6 2.2-.1 2.2 .3 1.8 .7 1.1 1 .3 1.2-.7 1z\"/><path class=\"iso-line iso-crease\" data-tone=\"faint\" d=\"M319.6 113.3l-.7 1-1.4 .9-2 .6-2.3 .1-2.2-.3-1.7-.7-1.1-1-.3-1.2\"/><path class=\"iso-line iso-bevel\" data-tone=\"faint\" d=\"M319.6 113.3l-1.3 .9-1.3 .8-1.7 .4-2 .2-1.9-.3-1.6-.7-1-.8-.9-1.1\"/><path class=\"iso-line iso-edge\" data-tone=\"mid\" d=\"M307.9 112.7l.7-1.1 1.4-.8 2-.6 2.2-.1 2.2 .3 1.8 .7 1.1 1 .3 1.2M319.6 116.1l-.7 1.1-1.4 .9-2 .5-2.3 .1-2.2-.3-1.7-.7-1.1-1-.3-1.1M307.9 112.7l0 2.9M319.6 113.3l0 2.8\"/></g></g><g data-layer=\"air\"></g></svg></div><div class=\"dw-controls\"><label class=\"dw-range\"><span>Entries</span><input type=\"range\" data-control=\"entries\" min=\"1\" max=\"12\" step=\"1\" value=\"12\"><output data-show=\"entries\">12</output></label><label class=\"dw-range\"><span>Winner count</span><input type=\"range\" data-control=\"winners\" min=\"1\" max=\"6\" step=\"1\" value=\"4\"><output data-show=\"winners\">4</output></label><div class=\"dw-actions\"><label class=\"dw-switch\"><input type=\"checkbox\" role=\"switch\" data-control=\"keep\" checked><span class=\"dw-knob\"></span><span>Continue selecting until completed</span></label><button type=\"button\" class=\"dw-button\" data-primary data-control=\"lapse\">Lapse a winner</button><button type=\"button\" class=\"dw-button\" data-control=\"reset\" disabled>Reset</button></div></div></div><figcaption class=\"iso-legend\"><ol class=\"ffig-rows\" aria-label=\"The draw from Opens to Closes\" aria-live=\"polite\"><li><span class=\"ffig-chip\">11:00</span><span class=\"ffig-name\">Opens</span><span class=\"ffig-when\"></span><span class=\"ffig-verdict\"></span></li><li><span class=\"ffig-chip\">17:00</span><span class=\"ffig-name\">Draw at</span><span class=\"ffig-when\"></span><span class=\"ffig-verdict\"></span></li><li><span class=\"ffig-chip\">17:30</span><span class=\"ffig-name\">A late entry</span><span class=\"ffig-when\"></span><span class=\"ffig-verdict\"></span></li><li><span class=\"ffig-chip\">18:00</span><span class=\"ffig-name\">Payment windows end</span><span class=\"ffig-when\"></span><span class=\"ffig-verdict\"></span></li><li><span class=\"ffig-chip\">19:00</span><span class=\"ffig-name\">Closes</span><span class=\"ffig-when\"></span><span class=\"ffig-verdict\"></span></li></ol><span class=\"iso-keys\"><span class=\"iso-key\"><svg class=\"iso-swatch ffig-swatch\" viewBox=\"0 0 16 10\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"5\" r=\"3.6\"/></svg>An entry</span><span class=\"iso-key\"><svg class=\"iso-swatch ffig-swatch\" viewBox=\"0 0 16 10\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"5\" r=\"3.6\"/><circle class=\"is-dot\" cx=\"8\" cy=\"5\" r=\"1.2\"/></svg>The 17:30 entry</span><span class=\"iso-key\"><svg class=\"iso-swatch ffig-swatch\" viewBox=\"0 0 16 10\" aria-hidden=\"true\"><line x1=\"8\" y1=\"0.5\" x2=\"8\" y2=\"9.5\"/></svg>The gate: winners on the far side</span><span class=\"iso-key\"><svg class=\"iso-swatch ffig-swatch\" viewBox=\"0 0 16 10\" aria-hidden=\"true\"><path d=\"M5.5 2.5 10.5 7.5M10.5 2.5 5.5 7.5\"/></svg>A place lost to the draw</span><span class=\"iso-key\"><svg class=\"iso-swatch ffig-swatch\" viewBox=\"0 0 16 10\" aria-hidden=\"true\"><circle class=\"is-dim\" cx=\"8\" cy=\"5\" r=\"3.6\"/></svg>Not selected</span></span><span class=\"iso-caption\">Each token is one entry, placed along the track in the draw's random order; the places on the far side of the gate win, so the chance of a place at Draw at is the winner count over the entries, whenever an entry arrived. The dial reads that chance. A winner whose payment window lapses goes into the tray and cannot enter again. With Continue selecting until completed on, the line moves up and the next entry waiting takes the place; with it off, the place is lost. The figure draws at most twelve entries; a real draw works the same way with thousands.</span></figcaption></figure>";
  return (
    <div ref={root} className="ffig not-prose" data-figure="concepts-distributions-draw-odds">
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

// Each card's gradient is built from the platform's own brand colour, so the
// grid stays recognisable without anyone hand picking 22 sets of stops.

const clamp = n => Math.max(0, Math.min(255, Math.round(n)));
const parse = hex => { const n = parseInt(hex.replace('#', ''), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const toHex = rgb => '#' + rgb.map(v => clamp(v).toString(16).padStart(2, '0')).join('');
const mix = (rgb, towards, t) => rgb.map((v, i) => v + (towards[i] - v) * t);
const luma = ([r, g, b]) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

// Push a colour away from grey so the lightened stop keeps its hue instead of
// washing out to a pale smudge.
function saturate(rgb, amount) {
  const grey = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return rgb.map(v => grey + (v - grey) * amount);
}

// The night version of a brand colour: pulled down toward the page and drained
// of a little chroma, so a wall of cards sits on a dark page instead of glowing
// off it.
const NIGHT = [17, 17, 18];

export function cardGradient(hex, theme = 'light') {
  const night = theme === 'dark';
  const raw = parse(hex);
  const base = night ? mix(saturate(raw, 0.86), NIGHT, 0.34) : raw;
  const deep = luma(base) < 0.28;

  // Very dark brands (TikTok, X, Threads) need a stronger lift, or the card
  // reads as a grey slab rather than a lit surface.
  const liftTop = night ? (deep ? 0.3 : 0.18) : (deep ? 0.52 : 0.34);
  const sheen = night ? (deep ? 0.12 : 0.16) : (deep ? 0.24 : 0.34);

  const top = toHex(mix(saturate(base, deep ? 1 : 1.12), [255, 255, 255], liftTop));
  const mid = toHex(saturate(base, 1.04));
  const foot = toHex(night ? mix(base, NIGHT, deep ? 0.3 : 0.26) : mix(base, [0, 0, 0], deep ? 0.1 : 0.2));

  return [
    // A soft sheen sitting high on the card.
    `radial-gradient(90% 55% at 28% 8%, rgba(255,255,255,${sheen}) 0%, rgba(255,255,255,0) 60%)`,
    `linear-gradient(158deg, ${top} 0%, ${mid} 52%, ${foot} 100%)`
  ].join(', ');
}

/* ---- Glass ------------------------------------------------------------- */
// The card itself is colourless now: a translucent pane over a pool of the
// brand's own light. Which means the colour has to be right twice — once as
// the light under the glass, and once as the ink on top of it — and the ink
// has to stay legible against a pane that is nearly the page colour. The
// gradient above survives as the opaque card, for readers who ask for less
// transparency.

// The real thing, not the eyeball approximation `luma` uses: WCAG contrast is
// defined on linearised channels, and a brand colour picked by eye can miss
// 4.5:1 by enough to matter at 12.5px.
const channel = v => { const c = clamp(v) / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const relLuma = rgb => 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
const contrast = (a, b) => {
  const x = relLuma(a) + 0.05;
  const y = relLuma(b) + 0.05;
  return x > y ? x / y : y / x;
};

// The pool of light a card sits in. It reaches past the card's own edges, so
// neighbours overlap and the grid mixes its own field instead of needing one
// painted behind it. On a dark page the same colour has to carry as a glow
// rather than a tint, hence the heavier stops.
export function cardBloom(hex, theme = 'light') {
  const night = theme === 'dark';
  const raw = parse(hex);

  // A black brand has no light in it to give. Bloomed in its own colour it
  // leaves a grey cloud around the card that reads as dirt on the page, so the
  // five black marks get a cool neutral instead, faint and held close: under a
  // clear pane that lands as a shadow, which is the honest answer to a brand
  // with no colour.
  const flat = Math.max(...raw) - Math.min(...raw) < 26 && luma(raw) < 0.3;
  const c = (flat ? (night ? [170, 172, 180] : [104, 108, 122]) : saturate(raw, night ? 1.1 : 1.18)).map(clamp).join(',');
  const core = flat ? 0.17 : (night ? 0.37 : 0.42);
  const halo = flat ? 0.05 : (night ? 0.13 : 0.16);
  const reach = flat ? '48% 44%' : '58% 52%';

  return `radial-gradient(${reach} at 50% 38%, rgba(${c},${core}) 0%, rgba(${c},${halo}) 46%, rgba(${c},0) 76%)`;
}

// The brand colour as ink. Walks the colour toward the page's own text colour
// until it clears `target` against the lightest surface it can land on — white
// in daylight, the tinted pane at night — and stops at the first step that
// does, so a brand that was already legible keeps its hue untouched.
//
// Two targets are in use: 5.5 for the pill and 3 for the glyph, which WCAG
// counts as a graphic. Snapchat yellow is the reason they differ — held to the
// text figure the mark goes olive, and the mark is the thing a reader who
// cannot read the name is navigating by. The pill asks for 5.9 rather than the
// required 4.5 because it is printed on a wash of its own ink over a lit card,
// neither of which this function can see: measured on the rendered page that
// gap costs about a point and a half, and 5.9 here lands every one of the
// twenty-two between 4.6 and 5.4 there.
export function brandInk(hex, theme = 'light', target = 5.9) {
  const night = theme === 'dark';
  const raw = parse(hex);

  // TikTok, X, Threads, Uber and Apple are black with no hue in them. Walking
  // a colourless colour toward white only ever arrives at grey, so at night
  // they take the page's own ink — which is what those marks are printed in on
  // a dark ground anyway.
  if (night && Math.max(...raw) - Math.min(...raw) < 26 && luma(raw) < 0.3) return '#F6F4F0';

  const base = saturate(raw, night ? 1.16 : 1.06);
  const floor = night ? [255, 255, 255] : [24, 24, 26];
  const against = night ? mix(NIGHT, raw, 0.22) : [255, 255, 255];

  for (let t = 0; t < 1; t += 0.04) {
    const ink = mix(base, floor, t);
    if (contrast(ink, against) >= target) return toHex(ink);
  }
  return toHex(floor);
}

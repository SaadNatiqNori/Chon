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

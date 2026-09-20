import { BRAND_ICONS } from '../data/icons.js';

// TikTok is the one brand in the set whose logo is not a silhouette. The cyan
// and pink copies sitting behind the note are the mark — drop them and what is
// left reads as any other music app — so it gets drawn as three copies of the
// same path, the two brand colours behind and the card's usual ink on top.
// Every other platform stays the single mark the grid is built on, and the
// front copy is still inherited ink, which is how the logo is printed anyway:
// near-black on a light page, off-white on a dark one.
//
// Offsets are in viewBox units, so the glitch scales with the mark instead of
// needing a size passed in.
const GLITCH = {
  tiktok: [['#25F4EE', -0.85, -0.5], ['#FE2C55', 0.85, 0.5]]
};

export default function Glyph({ id, width, height, fill }) {
  const d = BRAND_ICONS[id];
  if (!d) return null;

  return (
    <svg viewBox="0 0 24 24" width={width} height={height} fill={fill}>
      {(GLITCH[id] || []).map(([colour, x, y]) => (
        <path key={colour} d={d} fill={colour} transform={`translate(${x} ${y})`} />
      ))}
      <path d={d} />
    </svg>
  );
}

import { BRAND_ICONS } from '../data/icons.js';

// The platform's own mark on its own colour. Decorative — the name is always
// rendered next to it, so screen readers skip the tile.
export default function Brand({ id, tile, size = 34, radius = 10 }) {
  const d = BRAND_ICONS[id];
  return (
    <span aria-hidden="true" style={{ width: size, height: size, borderRadius: radius, background: tile, display: 'grid', placeItems: 'center', flex: 'none' }}>
      {d
        ? <svg viewBox="0 0 24 24" width={Math.round(size * 0.55)} height={Math.round(size * 0.55)} fill="#fff"><path d={d} /></svg>
        : <span style={{ width: size * 0.3, height: size * 0.3, borderRadius: '50%', background: '#fff', opacity: 0.9 }} />}
    </span>
  );
}

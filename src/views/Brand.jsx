import { Squircle } from 'corner-smoothing';
import { BRAND_ICONS } from '../data/icons.js';
import Glyph from './Glyph.jsx';

// The platform's own mark on its own colour. Decorative — the name is always
// rendered next to it, so screen readers skip the tile. Squircle rather than
// border-radius so the tile matches the controls it sits beside.
export default function Brand({ id, tile, size = 34, radius = 10, smoothing = 0.85 }) {
  const d = BRAND_ICONS[id];
  return (
    <Squircle
      as="span"
      cornerRadius={radius}
      cornerSmoothing={smoothing}
      aria-hidden="true"
      style={{ width: size, height: size, background: tile, display: 'grid', placeItems: 'center', flex: 'none' }}
    >
      {d
        ? <Glyph id={id} width={Math.round(size * 0.55)} height={Math.round(size * 0.55)} fill="#fff" />
        : <span style={{ width: size * 0.3, height: size * 0.3, borderRadius: '50%', background: '#fff', opacity: 0.9 }} />}
    </Squircle>
  );
}

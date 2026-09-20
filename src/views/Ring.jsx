import { Squircle } from 'corner-smoothing';

// A bordered squircle.
//
// A border or an inset box-shadow follows the element's rectangle, and
// clip-path then cuts away everything outside the squircle, so the ring
// survives on the straight edges and vanishes around every corner. Drawing it
// as two nested squircles instead gives a ring that hugs the real silhouette:
// the outer one is the ring colour, the inner one sits `width` pixels inside it
// and carries the fill.
export default function Ring({
  radius = 14,
  width = 1,
  smoothing = 0.85,
  color = 'var(--c-border)',
  background = 'transparent',
  as = 'div',
  className = '',
  innerClassName = '',
  style,
  innerStyle,
  children,
  ...rest
}) {
  return (
    <Squircle
      as={as}
      cornerRadius={radius}
      cornerSmoothing={smoothing}
      className={className}
      // A button or an anchor brings its own user agent border and appearance,
      // which would sit inside the clip and eat into the ring. Reset here so a
      // Ring is safe whatever it is rendered as.
      style={{ background: color, padding: width, border: 0, appearance: 'none', textDecoration: 'none', ...style }}
      {...rest}
    >
      <Squircle
        cornerRadius={Math.max(0, radius - width)}
        cornerSmoothing={smoothing}
        className={innerClassName}
        style={{ background, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', ...innerStyle }}
      >
        {children}
      </Squircle>
    </Squircle>
  );
}

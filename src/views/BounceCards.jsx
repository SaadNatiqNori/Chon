import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// ReactBits BounceCards. Unlike the two helpers in motion.jsx this one is kept
// as the upstream component rather than rewritten in CSS, so the elastic curve
// is the real elastic.out and not an approximation of it. Three things are
// added on top, all of them things this site needs and the original does not:
// a `cards` prop so the fan can hold brand tiles instead of photographs, the
// mirroring below, and the reduced motion branch in the effect.

const DEFAULT_TRANSFORMS = [
  'rotate(10deg) translate(-170px)',
  'rotate(5deg) translate(-85px)',
  'rotate(-3deg)',
  'rotate(-10deg) translate(85px)',
  'rotate(2deg) translate(170px)'
];

// Three of the four languages read right to left. Flipping the lean and the
// spread together mirrors the whole fan, so it falls away from the heading the
// same way round as it does in English rather than leaning back into the text.
function mirror(transform) {
  return transform
    .replace(/rotate\(\s*(-?[\d.]+)deg\s*\)/g, (_, n) => 'rotate(' + -parseFloat(n) + 'deg)')
    .replace(/translate\(\s*(-?[\d.]+)px/g, (_, n) => 'translate(' + -parseFloat(n) + 'px');
}

export default function BounceCards({
  className = '',
  images = [],
  cards = null,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = DEFAULT_TRANSFORMS,
  enableHover = false,
  rtl = false
}) {
  const root = useRef(null);

  const items = cards ?? images.map((src, i) => (
    <img className="bounceCards__image" src={src} alt="" key={i} />
  ));
  const styles = rtl ? transformStyles.map(mirror) : transformStyles;

  // Every query is scoped to this container. The original reaches for a bare
  // `.card` on the document, which would also catch anything else on the page
  // that happened to be called one.
  const pick = i => root.current && root.current.querySelector('[data-bcard="' + i + '"]');

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-bcard]');

    // GSAP writes inline transforms, so it walks straight past the reduced
    // motion rules in styles.css. The cards land in their final places at once.
    const still = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) {
      gsap.set(targets, { scale: 1 });
      return;
    }

    const tween = gsap.fromTo(
      targets,
      { scale: 0 },
      { scale: 1, stagger: animationStagger, ease: easeType, delay: animationDelay }
    );
    return () => tween.kill();
  }, [animationStagger, easeType, animationDelay, items.length]);

  const getNoRotationTransform = t => {
    if (/rotate\(\s*-?[\d.]+deg\s*\)/.test(t)) return t.replace(/rotate\(\s*-?[\d.]+deg\s*\)/, 'rotate(0deg)');
    return t === 'none' ? 'rotate(0deg)' : t + ' rotate(0deg)';
  };

  const getPushedTransform = (base, offsetX) => {
    const re = /translate\(\s*(-?[\d.]+)px\s*\)/;
    const m = base.match(re);
    if (m) return base.replace(re, 'translate(' + (parseFloat(m[1]) + offsetX) + 'px)');
    return base === 'none' ? 'translate(' + offsetX + 'px)' : base + ' translate(' + offsetX + 'px)';
  };

  const pushSiblings = hovered => {
    if (!enableHover) return;
    items.forEach((_, i) => {
      const el = pick(i);
      if (!el) return;
      gsap.killTweensOf(el);
      const base = styles[i] || 'none';
      if (i === hovered) {
        gsap.to(el, { transform: getNoRotationTransform(base), duration: 0.4, ease: 'back.out(1.4)', overwrite: 'auto' });
      } else {
        const offsetX = (i < hovered ? -160 : 160) * (rtl ? -1 : 1);
        gsap.to(el, {
          transform: getPushedTransform(base, offsetX),
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay: Math.abs(hovered - i) * 0.05,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    items.forEach((_, i) => {
      const el = pick(i);
      if (!el) return;
      gsap.killTweensOf(el);
      gsap.to(el, { transform: styles[i] || 'none', duration: 0.4, ease: 'back.out(1.4)', overwrite: 'auto' });
    });
  };

  return (
    <div
      ref={root}
      className={('bounceCards ' + className).trim()}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          data-bcard={i}
          className="bounceCards__card"
          style={{ transform: styles[i] ?? 'none' }}
          onMouseEnter={() => pushSiblings(i)}
          onMouseLeave={resetSiblings}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

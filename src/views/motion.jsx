import { useEffect, useRef, useState } from 'react';

// Enter-on-scroll helpers modelled on ReactBits (AnimatedContent, BlurText).
// ReactBits is a copy-in library rather than a runtime dependency, so these are
// local components: a few lines of IntersectionObserver over CSS transitions,
// with no animation engine shipped to the reader. The reduced-motion rules live
// in styles.css, so a viewer who asks for stillness gets the content at once.

function useInView({ once = true, threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView];
}

/** Fades and lifts its children into place when they scroll into view. */
export function AnimatedContent({ children, delay = 0, y = 18, scale = 1, className = '', style, as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={('reveal ' + (inView ? 'is-in ' : '') + className).trim()}
      style={{ '--reveal-d': delay + 'ms', '--reveal-y': y + 'px', '--reveal-s': scale, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Reveals a line word by word, each one unblurring a beat after the last. */
export function BlurText({ text, as: Tag = 'span', className = '', style, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const words = String(text ?? '').split(' ');

  return (
    <Tag ref={ref} className={('blurtext ' + (inView ? 'is-in ' : '') + className).trim()} style={style} {...rest}>
      {words.map((w, i) => (
        <span key={i} style={{ '--i': i }}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

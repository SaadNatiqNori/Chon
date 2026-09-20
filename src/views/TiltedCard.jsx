import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

// ReactBits TiltedCard. Like BounceCards this is the upstream component rather
// than a CSS rewrite, because a spring cannot be written as a transition and an
// ease would give the settle away. What changed: it wraps children instead of
// an <img>, since the thing leaning here is a whole platform card and not a
// photograph, and the cursor caption went with the image — the card already
// carries its name and its pill, so a tooltip would only say them twice. The
// upstream mobile warning is gone too, replaced by the first guard below.

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  children,
  className = '',
  scaleOnHover = 1.05,
  rotateAmplitude = 12
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const still = useReducedMotion();

  // A finger has no hover: on a touch screen the tap would tilt the card and
  // then leave it that way, with no pointer left to straighten it. Those
  // screens get the card flat, and so does a reader who asked for stillness.
  const tiltable = () => !still
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function handleMouse(e) {
    if (!ref.current || !tiltable()) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    if (!tiltable()) return;
    scale.set(scaleOnHover);
  }

  // Unguarded, so that a card caught mid-lean when the setting changes still
  // has a way back to flat.
  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      className={('tilted-card ' + className).trim()}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="tilted-card__inner" style={{ rotateX, rotateY, scale }}>
        {children}
      </motion.div>
    </div>
  );
}

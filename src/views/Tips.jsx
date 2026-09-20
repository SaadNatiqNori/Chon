import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TIP_ICONS } from '../data/tips.js';
import { withTerms } from './terms.jsx';

// Safety notes, delivered the way a messenger delivers them: a thread in the
// corner that fills from the foot up. Each note announces itself as three
// bouncing dots, holds for a beat, and then opens out into the message.
//
// Nothing fades and nothing travels. A note arrives by growing, from no height
// at all to a small pill and from the pill to its full size, which is also what
// lifts the notes above it: the column is pinned to the bottom of the screen,
// so a note growing at the foot pushes the older ones up rather than landing on
// top of them.

// Late enough that the splash has finished and the grid has been seen.
const START = 3400;
// How long the dots run before the message opens.
const TYPE = 1100;
// One note starting, then the next. Two on screen at a time, briefly three.
const GAP = 3800;
const LIFE = 6400;
// Must match the tip-out animation in styles.css.
const EXIT = 460;

const OFF_KEY = 'chon.tips';

function wasDismissed() {
  try { return sessionStorage.getItem(OFF_KEY) === 'off'; } catch (e) { return false; }
}

// One note. Its height is the only thing measured: the width of both states is
// written in the stylesheet and moves on its own, but how tall a message is
// depends on how far the words wrap, which only the browser can say. Setting
// the height explicitly is what lets it be a transition at all, and what lets
// the notes above it move as it grows rather than jumping when it lands.
function Note({ tip, phase, leaving, dismissLabel, onDismiss }) {
  const slot = useRef(null);
  const content = useRef(null);
  const height = useRef(0);

  useLayoutEffect(() => {
    const el = slot.current;
    const inner = content.current;
    if (!el || !inner) return undefined;

    const to = inner.offsetHeight;
    if (to !== height.current) {
      const from = height.current;
      height.current = to;
      el.style.height = from + 'px';
      // Reading a layout value flushes the pending style, which gives the
      // transition a height to start from. Without it the browser only ever
      // sees the final value and there is nothing to animate.
      void el.offsetHeight;
      el.style.height = to + 'px';
    }

    // A rotated phone rewraps the words, and a note that kept its old height
    // would clip them. Re-measuring costs nothing while nothing is changing.
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => {
      const next = inner.offsetHeight;
      if (next === height.current) return;
      height.current = next;
      el.style.height = next + 'px';
    });
    ro.observe(inner);
    return () => ro.disconnect();
  }, [phase, tip.t, tip.d]);

  const typing = phase === 'typing';

  return (
    <div
      ref={slot}
      className={'tip' + (typing ? ' tip--typing' : '') + (leaving ? ' tip--out' : '')}
    >
      <div ref={content} className="tip__content">
        {typing ? (
          <span className="tip__dots" aria-hidden="true">
            <i /><i /><i />
          </span>
        ) : (
          <>
            <span className="tip__icon" style={{ background: 'var(--c-' + tip.tone + ')' }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
                strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                {(TIP_ICONS[tip.icon] || []).map(d => <path key={d} d={d} />)}
              </svg>
            </span>

            <span className="tip__text">
              <span className="tip__title">{tip.t}</span>
              <span className="tip__body">{withTerms(tip.d)}</span>
            </span>

            <button type="button" className="tip__close" onClick={onDismiss}
              aria-label={dismissLabel} title={dismissLabel}>
              <span aria-hidden="true">×</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Tips({ v }) {
  const tips = v.tips;
  const count = tips.length;

  const [off, setOff] = useState(wasDismissed);
  const [live, setLive] = useState([]);
  // Which note is next. A ref, not state, so that advancing it never re-runs
  // the effect that reads it.
  const next = useRef(0);
  const halted = useRef(false);

  // One effect owns every timer: a note's arrival and, from that moment, when
  // its dots become a message, when it leaves and when it is taken out. Doing
  // it here rather than inside each note means a note's life is not restarted
  // by a re-render, which is what every language change and route change is.
  useEffect(() => {
    if (off || !count) return undefined;

    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => { timers.delete(id); fn(); }, ms);
      timers.add(id);
    };
    const set = (i, patch) => setLive(l => l.map(b => (b.i === i ? { ...b, ...patch } : b)));

    const push = () => {
      if (halted.current) return;
      // A note read out to an empty room is a note wasted, so a hidden tab
      // waits rather than spending the queue on nobody.
      if (typeof document !== 'undefined' && document.hidden) { later(push, 900); return; }

      const i = next.current;
      if (i >= count) return;
      next.current = i + 1;

      setLive(l => l.concat({ i, phase: 'typing', leaving: false }));
      later(() => set(i, { phase: 'message' }), TYPE);
      later(() => set(i, { leaving: true }), TYPE + LIFE);
      later(() => setLive(l => l.filter(b => b.i !== i)), TYPE + LIFE + EXIT);

      if (next.current < count) later(push, GAP);
    };

    later(push, next.current === 0 ? START : GAP);
    return () => timers.forEach(clearTimeout);
  }, [off, count]);

  // Closing one closes them all, and they stay closed for the rest of the
  // visit. Everything on screen is asked to leave first so the corner empties
  // the way it filled.
  const dismiss = () => {
    halted.current = true;
    try { sessionStorage.setItem(OFF_KEY, 'off'); } catch (e) {}
    setLive(l => l.map(b => ({ ...b, leaving: true })));
    setTimeout(() => setOff(true), EXIT);
  };

  if (off || !live.length) return null;

  return (
    <div className="tips" aria-live="polite">
      <div className="tips__inner" style={{ maxWidth: v.wide ? '1180px' : '620px' }}>
        {live.map(b => {
          const tip = tips[b.i];
          if (!tip) return null;
          return (
            <Note
              key={tip.id}
              tip={tip}
              phase={b.phase}
              leaving={b.leaving}
              dismissLabel={v.t('tipsDismiss')}
              onDismiss={dismiss}
            />
          );
        })}
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { s } from '../css.js';
import PhoneScreen from './PhoneScreen.jsx';

export default function Viewer({ v }) {
  const vw = v.viewer;
  const panel = useRef(null);

  // The dialog takes focus on open so Escape and the arrow keys land somewhere sensible.
  useEffect(() => { panel.current?.focus(); }, []);

  return (
    <div role="dialog" aria-modal="true" aria-label={vw.aria} onMouseDown={e => { if (e.target === e.currentTarget) vw.close(); }}
      style={s('position:fixed;inset:0;z-index:80;background:rgba(9,12,20,.72);display:flex;align-items:center;justify-content:center;padding:20px;animation:chonIn .15s ease-out')}>
      <div ref={panel} tabIndex={-1} style={s('background:var(--c-bg);border-radius:18px;border:1px solid var(--c-border);width:min(100%,780px);max-height:92vh;overflow:auto;box-shadow:var(--c-shadow-lift);outline:none')}>
        <div style={s('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg)')}>
          <span style={s('display:flex;align-items:center;gap:10px;min-width:0')}>
            <span style={s('font-size:14px;font-weight:700')}>{vw.counter}</span>
            <span style={s('font-size:11.5px;font-weight:600;padding:3px 8px;border-radius:6px;background:var(--c-bg-subtle);color:var(--c-fg-2)')}>{vw.device}</span>
          </span>
          <span style={s('display:flex;gap:6px')}>
            <button onClick={vw.zoom} aria-label={v.t.zoom} style={s('background:var(--c-surface);border:1px solid var(--c-border);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:13px')}>{vw.zoomIcon}</button>
            <button onClick={vw.close} aria-label={v.t.close} style={s('background:var(--c-surface);border:1px solid var(--c-border);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:13px')}>✕</button>
          </span>
        </div>

        <div style={s('padding:22px;display:flex;justify-content:center;background:var(--c-bg-subtle)')}>
          <div style={s('transition:width .2s ease;background:var(--c-surface);border:1px solid var(--c-border-strong);border-radius:22px;padding:8px;box-shadow:var(--c-shadow-lift)', { width: vw.frameWidth })}>
            <div>
              <PhoneScreen mock={vw.step.mock} scale={1.35} alt={vw.step.title} />
              {!vw.step.mock.shot && (
                <p style={s('margin:10px 0 0;font-size:11px;color:var(--c-fg-muted);text-align:center')}>{v.t.mockNote}</p>
              )}
            </div>
          </div>
        </div>

        <div dir={v.contentDir} style={s('padding:18px')}>
          <p style={s('margin:0 0 4px;font-size:11.5px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:var(--c-primary)')}>{v.t.whatTap}</p>
          <h3 style={s('margin:0 0 6px;font-size:18px;font-weight:700')}>{vw.step.title}</h3>
          <p style={s('margin:0;font-size:14.5px;color:var(--c-fg-2);text-wrap:pretty')}>{vw.step.desc}</p>
          {vw.step.hasNote && (
            <p style={s('margin:12px 0 0;font-size:13.5px;color:var(--c-warning);background:var(--c-warning-soft);border:1px solid var(--c-warning);border-radius:10px;padding:11px 13px;text-wrap:pretty')}>{vw.step.note}</p>
          )}
          <div style={s('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px')}>
            <button onClick={vw.prev} disabled={vw.prevDisabled}
              style={s('background:var(--c-surface);border:1px solid var(--c-border-strong);padding:10px 16px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer', { opacity: vw.prevOpacity })}>{vw.prevLabel}</button>
            <span style={s('font-size:12.5px;color:var(--c-fg-muted)')}>{vw.counter}</span>
            <button onClick={vw.next} style={s('background:var(--c-primary);color:#fff;border:0;padding:10px 18px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer')}>{vw.nextLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { s } from '../css.js';

export default function Wizard({ v }) {
  const w = v.wizard;
  return (
    <section style={s('padding:34px 0 0;max-width:720px;margin:0 auto')}>
      <p style={s('margin:0 0 8px;font-size:12.5px;font-weight:600;color:var(--c-primary)')}>{w.progressLabel}</p>
      <div style={s('height:6px;border-radius:99px;background:var(--c-bg-subtle);overflow:hidden;margin-bottom:24px')}>
        <div style={s('height:100%;border-radius:99px;background:var(--c-primary);transition:width .3s ease', { width: w.pct })} />
      </div>
      <h1 style={s('margin:0 0 6px;font-size:28px;font-weight:700;letter-spacing:-.5px;text-wrap:pretty')}>{w.question}</h1>
      <p style={s('margin:0 0 22px;font-size:15px;color:var(--c-fg-2)')}>{w.hint}</p>

      <div style={s('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:10px')}>
        {w.options.map(o => (
          <button key={o.key} onClick={o.pick} aria-pressed={o.pressed}
            style={s('text-align:start;border-radius:12px;padding:15px;cursor:pointer;display:flex;align-items:flex-start;gap:11px', { background: o.bg, border: '1.5px solid ' + o.bc })}>
            <span aria-hidden="true" style={s('width:20px;height:20px;color:#fff;display:grid;place-items:center;font-size:11px;font-weight:700;flex:none;margin-top:1px', { borderRadius: o.markRadius, border: '1.5px solid ' + o.markBc, background: o.markBg })}>{o.mark}</span>
            <span style={s('display:flex;flex-direction:column;gap:2px')}>
              <span style={s('font-size:14.5px;font-weight:600')}>{o.label}</span>
              <span style={s('font-size:12.5px;color:var(--c-fg-2);text-wrap:pretty')}>{o.sub}</span>
            </span>
          </button>
        ))}
      </div>

      <div style={s('display:flex;align-items:center;gap:10px;margin-top:26px;flex-wrap:wrap')}>
        <button onClick={w.back} style={s('background:var(--c-surface);border:1px solid var(--c-border-strong);padding:10px 16px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer')}>{v.t.back}</button>
        <button onClick={w.next} disabled={w.nextDisabled}
          style={s('border:0;padding:10px 20px;border-radius:10px;font-size:14px;font-weight:600', { background: w.nextBg, color: w.nextFg, cursor: w.nextCursor })}>{w.nextLabel}</button>
        <span style={s('font-size:12.5px;color:var(--c-fg-muted)')}>{v.t.wizardPrivacy}</span>
      </div>
    </section>
  );
}

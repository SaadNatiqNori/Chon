import { s } from '../css.js';

export default function Safety({ v }) {
  return (
    <section style={s('padding:34px 0 0;max-width:860px')}>
      <h1 style={s('margin:0 0 6px;font-size:32px;font-weight:700;letter-spacing:-.6px;text-wrap:pretty')}>{v.t.lostTitle}</h1>
      <p style={s('margin:0 0 20px;font-size:15.5px;color:var(--c-fg-2);text-wrap:pretty')}>{v.t.lostSub}</p>

      <div style={s('display:flex;gap:14px;background:var(--c-danger-soft);border:1px solid var(--c-danger);border-radius:14px;padding:16px 18px;margin-bottom:26px')}>
        <span aria-hidden="true" style={s('color:var(--c-danger);font-weight:700')}>!</span>
        <p style={s('margin:0;font-size:14px;color:var(--c-fg-2);text-wrap:pretty')}>{v.t.lostWarn}</p>
      </div>

      {v.contentFallback && (
        <div role="status" style={s('display:flex;gap:10px;background:var(--c-info-soft);border:1px solid var(--c-info);border-radius:12px;padding:12px 14px;margin-bottom:22px')}>
          <span aria-hidden="true" style={s('color:var(--c-info);font-weight:700')}>i</span>
          <p style={s('margin:0;font-size:13.5px;color:var(--c-fg-2)')}>{v.t.transFallback}</p>
        </div>
      )}

      <h2 style={s('margin:0 0 12px;font-size:20px;font-weight:700')}>{v.t.orderMatters}</h2>
      <ol style={s('margin:0 0 34px;padding:0;list-style:none;display:flex;flex-direction:column;gap:2px')}>
        {v.lostSteps.map(st => (
          <li key={st.n} dir={v.contentDir} style={s('display:flex;gap:14px;align-items:flex-start;padding:13px 15px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;margin-bottom:8px')}>
            <span aria-hidden="true" style={s('width:26px;height:26px;border-radius:7px;background:var(--c-bg-subtle);color:var(--c-fg-2);display:grid;place-items:center;font-size:12.5px;font-weight:700;flex:none')}>{st.n}</span>
            <span style={s('display:flex;flex-direction:column;gap:3px')}>
              <span style={s('font-size:15px;font-weight:600')}>{st.title}</span>
              <span style={s('font-size:13.5px;color:var(--c-fg-2);text-wrap:pretty')}>{st.body}</span>
            </span>
          </li>
        ))}
      </ol>

      <h2 style={s('margin:0 0 6px;font-size:20px;font-weight:700')}>{v.t.twofaTitle}</h2>
      <p style={s('margin:0 0 16px;font-size:14.5px;color:var(--c-fg-2);max-width:75ch;text-wrap:pretty')}>{v.t.twofaSub}</p>
      <div style={s('display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:12px;margin-bottom:34px')}>
        {v.twofaCards.map(c => (
          <div key={c.key} dir={v.contentDir} style={s('background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:15px;display:flex;flex-direction:column;gap:6px')}>
            <span style={s('font-size:11px;font-weight:700;letter-spacing:.3px;padding:3px 7px;border-radius:6px;align-self:flex-start', { background: c.bg, color: c.ink })}>{c.tag}</span>
            <span style={s('font-size:15px;font-weight:600')}>{c.title}</span>
            <span style={s('font-size:13.5px;color:var(--c-fg-2);text-wrap:pretty')}>{c.body}</span>
          </div>
        ))}
      </div>

      <h2 style={s('margin:0 0 12px;font-size:20px;font-weight:700')}>{v.t.troubleshooting}</h2>
      <div style={s('display:flex;flex-direction:column;gap:8px')}>
        {v.globalTrouble.map(q => (
          <div key={q.key} dir={v.contentDir} style={s('background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;overflow:hidden')}>
            <button onClick={q.toggle} aria-expanded={q.expanded}
              style={s('width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:none;border:0;padding:14px 16px;cursor:pointer;text-align:start')}>
              <span style={s('font-size:14.5px;font-weight:600')}>{q.q}</span>
              <span aria-hidden="true" style={s('color:var(--c-fg-muted);font-size:13px;flex:none')}>{q.chev}</span>
            </button>
            {q.open && (
              <div style={s('padding:0 16px 15px;animation:chonIn .16s ease-out')}>
                <p style={s('margin:0;font-size:14px;color:var(--c-fg-2);text-wrap:pretty')}>{q.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

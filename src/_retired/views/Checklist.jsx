import { s } from '../css.js';

export default function Checklist({ v }) {
  const c = v.checklist;
  return (
    <section style={s('padding:34px 0 0;max-width:820px')}>
      <h1 style={s('margin:0 0 6px;font-size:32px;font-weight:700;letter-spacing:-.6px')}>{v.t.checklistTitle}</h1>
      <p style={s('margin:0 0 22px;font-size:15px;color:var(--c-fg-2)')}>{v.t.checklistSub}</p>

      {c.empty && (
        <div style={s('border:1px dashed var(--c-border-strong);border-radius:14px;padding:44px 24px;text-align:center;background:var(--c-surface-2)')}>
          <p style={s('margin:0 0 6px;font-size:17px;font-weight:700')}>{v.t.checklistEmptyTitle}</p>
          <p style={s('margin:0 0 18px;font-size:14px;color:var(--c-fg-2)')}>{v.t.checklistEmptyBody}</p>
          <button onClick={v.goWizard} style={s('background:var(--c-primary);color:#fff;border:0;padding:11px 18px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer')}>{v.t.startWizard}</button>
        </div>
      )}

      {c.any && (
        <div>
          <div style={s('background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;padding:18px;margin-bottom:16px')}>
            <div style={s('display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:10px')}>
              <span style={s('font-size:14px;font-weight:700')}>{v.t.progress}</span>
              <span style={s('font-size:14px;font-weight:700;color:var(--c-primary)')}>{c.pctLabel}</span>
            </div>
            <div role="progressbar" aria-valuenow={c.done} aria-valuemin="0" aria-valuemax={c.total}
              style={s('height:10px;border-radius:99px;background:var(--c-bg-subtle);overflow:hidden')}>
              <div style={s('height:100%;border-radius:99px;background:var(--c-success);transition:width .35s ease', { width: c.pct })} />
            </div>
            <div style={s('display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px;flex-wrap:wrap')}>
              <span style={s('font-size:13px;color:var(--c-fg-2)')}>{c.countLabel}</span>
              <span style={s('display:flex;gap:8px')}>
                <button onClick={v.goWizard} style={s('background:var(--c-surface-2);border:1px solid var(--c-border);padding:7px 12px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer')}>{v.t.rerunWizard}</button>
                <button onClick={c.reset} style={s('background:none;border:1px solid var(--c-border);padding:7px 12px;border-radius:9px;font-size:12.5px;font-weight:600;color:var(--c-danger);cursor:pointer')}>{v.t.reset}</button>
              </span>
            </div>
          </div>

          <ul style={s('margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px')}>
            {c.items.map(i => (
              <li key={i.id} style={s('display:flex;align-items:center;gap:12px;border-radius:12px;padding:13px 15px', { background: i.bg, border: '1px solid ' + i.bc })}>
                <button onClick={i.toggle} role="checkbox" aria-checked={i.checked} aria-label={i.label}
                  style={s('width:24px;height:24px;border-radius:7px;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:700;cursor:pointer;flex:none', { border: '1.5px solid ' + i.boxBc, background: i.boxBg })}>{i.mark}</button>
                <span style={s('flex:1;min-width:0;display:flex;flex-direction:column')}>
                  <span style={s('font-size:14.5px;font-weight:600', { textDecoration: i.deco, color: i.fg })}>{i.label}</span>
                  <span style={s('font-size:12.5px;color:var(--c-fg-muted)')}>{i.meta}</span>
                </span>
                {i.hasGuide && (
                  <button onClick={i.go} className="h-border"
                    style={s('background:var(--c-surface);border:1px solid var(--c-border-strong);padding:7px 12px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer;flex:none')}>{v.t.openGuide}</button>
                )}
              </li>
            ))}
          </ul>
          <p style={s('margin:14px 0 0;font-size:12.5px;color:var(--c-fg-muted)')}>{v.t.localOnly}</p>
        </div>
      )}
    </section>
  );
}

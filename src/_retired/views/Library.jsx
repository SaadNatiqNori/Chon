import { s } from '../css.js';
import Brand from './Brand.jsx';

export default function Library({ v }) {
  return (
    <section style={s('padding:32px 0 0')}>
      <h1 style={s('margin:0 0 6px;font-size:32px;font-weight:700;letter-spacing:-.6px')}>{v.t.libTitle}</h1>
      <p style={s('margin:0 0 22px;font-size:15.5px;color:var(--c-fg-2)')}>{v.t.libSub}</p>

      <div style={s('display:flex;align-items:center;gap:10px;background:var(--c-surface);border:1px solid var(--c-border-strong);border-radius:12px;padding:10px 13px;max-width:520px')}>
        <span aria-hidden="true" style={s('color:var(--c-fg-muted)')}>⌕</span>
        <input type="search" value={v.query} onChange={v.onSearch} placeholder={v.t.searchPh} aria-label={v.t.searchPh}
          style={s('flex:1;border:0;outline:none;background:none;font-size:15px;color:var(--c-fg);min-width:0')} />
      </div>

      <div style={s('display:flex;flex-wrap:wrap;gap:24px;margin-top:22px;align-items:flex-start')}>
        <aside aria-label={v.t.filters} style={s('flex:1 1 220px;max-width:100%;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:18px')}>
          <div style={s('display:flex;align-items:center;justify-content:space-between')}>
            <span style={s('font-size:14px;font-weight:700')}>{v.t.filters}</span>
            <button onClick={v.clearFilters} style={s('background:none;border:0;padding:0;font-size:12.5px;color:var(--c-primary);font-weight:600;cursor:pointer')}>{v.t.clear}</button>
          </div>
          {v.filterGroups.map(g => (
            <div key={g.label} style={s('display:flex;flex-direction:column;gap:8px')}>
              <span style={s('font-size:11.5px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:var(--c-fg-muted)')}>{g.label}</span>
              <div style={s('display:flex;flex-wrap:wrap;gap:6px')}>
                {g.options.map(o => (
                  <button key={o.key} onClick={o.toggle} aria-pressed={o.pressed}
                    style={s('padding:5px 10px;border-radius:18px;font-size:12.5px;font-weight:500;cursor:pointer', { background: o.bg, color: o.fg, border: '1px solid ' + o.bc })}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div style={s('flex:999 1 320px;min-width:0')}>
          <p style={s('margin:0 0 12px;font-size:13px;color:var(--c-fg-muted)')}>{v.resultsLabel}</p>
          <div style={s('display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:12px')}>
            {v.results.map(p => (
              <button key={p.id} onClick={p.go} className="h-lift"
                style={s('text-align:start;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:14px;cursor:pointer;display:flex;flex-direction:column;gap:10px')}>
                <span style={s('display:flex;align-items:center;gap:10px')}>
                  <Brand id={p.id} tile={p.tile} size={34} radius={10} />
                  <span style={s('display:flex;flex-direction:column;min-width:0')}>
                    <span style={s('font-size:14.5px;font-weight:600')}>{p.name}</span>
                    <span style={s('font-size:11.5px;color:var(--c-fg-muted)')}>{p.catLabel}</span>
                  </span>
                </span>
                <span style={s('display:flex;flex-wrap:wrap;gap:6px')}>
                  <span style={s('font-size:11px;font-weight:600;padding:3px 7px;border-radius:6px', { background: p.statusBg, color: p.statusFg })}>{p.statusLabel}</span>
                  <span style={s('font-size:11px;font-weight:500;padding:3px 7px;border-radius:6px;background:var(--c-bg-subtle);color:var(--c-fg-2)')}>{p.deviceLabel}</span>
                </span>
                <span style={s('font-size:12px;color:var(--c-fg-2)')}>{p.flagLine}</span>
              </button>
            ))}
          </div>
          {v.noResults && (
            <div style={s('border:1px dashed var(--c-border-strong);border-radius:14px;padding:40px 20px;text-align:center')}>
              <p style={s('margin:0 0 6px;font-size:16px;font-weight:600')}>{v.t.emptyTitle}</p>
              <p style={s('margin:0 0 14px;font-size:14px;color:var(--c-fg-2)')}>{v.t.emptyBody}</p>
              <button onClick={v.clearFilters} style={s('background:var(--c-primary);color:#fff;border:0;padding:9px 16px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer')}>{v.t.clear}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

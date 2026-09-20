import { Squircle } from 'corner-smoothing';
import { s } from '../css.js';
import Ring from './Ring.jsx';
import Brand from './Brand.jsx';
import { AnimatedContent } from './motion.jsx';

const TONE = { warn: 'warning', danger: 'danger', done: 'success' };

function Callout({ kind, icon, title, children }) {
  const tone = TONE[kind];
  return (
    <Ring
      radius={19}
      color={`color-mix(in srgb, var(--c-${tone}) 38%, var(--c-bg))`}
      background={`var(--c-${tone}-soft)`}
      className={'callout callout--' + kind}
      innerClassName="callout__inner"
    >
      <Squircle as="span" cornerRadius={9} cornerSmoothing={0.9} className="callout__icon" aria-hidden="true">
        {icon}
      </Squircle>
      <div style={s('min-width:0')}>
        {title && <p className="callout__title">{title}</p>}
        <p className="callout__body">{children}</p>
      </div>
    </Ring>
  );
}

export default function Guide({ v }) {
  const p = v.platform;
  if (!p) return null;

  return (
    <section style={s('padding:22px 0 0')}>
      {/* Back sits on the same line as the platform, the way a phone's own
          navigation bar does, rather than floating above it. */}
      <div style={s('display:flex;align-items:center;gap:13px;margin-bottom:22px')}>
        <Ring as="button" radius={14} color="var(--c-border)" background="var(--c-surface)"
          className="backbtn" onClick={v.goHome} aria-label={v.t('back')} title={v.t('back')}>
          <span aria-hidden="true">{v.dir === 'rtl' ? '→' : '←'}</span>
        </Ring>

        <Brand id={p.id} tile={p.tile} size={46} radius={13} />

        <div style={s('min-width:0')}>
          <h1 className="guide-title" style={s('margin:0;font-size:26px;font-weight:700;letter-spacing:-.4px;line-height:1.2')}>{p.name}</h1>
          {v.steps.length > 0 && (
            <p style={s('margin:2px 0 0;font-size:13.5px;color:var(--c-fg-muted)')}>
              {v.t('stepsCount', { n: v.steps.length })}{v.soleDevice ? ' · ' + v.soleDevice : ''}
            </p>
          )}
        </div>

        {/* Mirrors Back across the title. A drawn mark rather than a character,
            because the glyph has to read the same in all four languages. */}
        <Ring as="button" radius={14} color="var(--c-border)" background="var(--c-surface)"
          className="backbtn sharebtn" onClick={v.share}
          aria-label={v.shared ? v.t('shareCopied') : v.t('share')}
          title={v.shared ? v.t('shareCopied') : v.t('share')}>
          {v.shared ? (
            <span aria-hidden="true">✓</span>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15.5V3.5" />
              <path d="m7.5 8 4.5-4.5L16.5 8" />
              <path d="M5.5 12.5v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6" />
            </svg>
          )}
        </Ring>
      </div>

      <span className="sr-only" aria-live="polite">{v.shared ? v.t('shareCopied') : ''}</span>

      {v.tabs.length > 1 && (
        <Ring radius={15} color="var(--c-border)" background="var(--c-bg-subtle)" role="tablist"
          style={s('display:inline-flex;margin-bottom:20px')}
          innerStyle={s('display:flex;gap:4px;padding:4px')}>
          {v.tabs.map(tab => (
            <Squircle as="button" key={tab.key} cornerRadius={10} cornerSmoothing={0.85}
              role="tab" aria-selected={tab.active ? 'true' : 'false'} onClick={tab.pick}
              style={s('border:0;padding:8px 18px;font-size:14px;font-weight:600;cursor:pointer',
                { background: tab.active ? 'var(--c-surface)' : 'transparent', color: tab.active ? 'var(--c-fg)' : 'var(--c-fg-2)', boxShadow: tab.active ? 'var(--c-shadow)' : 'none' })}>
              {tab.label}
            </Squircle>
          ))}
        </Ring>
      )}

      {v.steps.length === 0 ? (
        <Ring radius={21} color="var(--c-border)" background="var(--c-surface-2)"
          innerStyle={s('display:block;padding:30px 24px')}>
          <p style={s('margin:0 0 7px;font-size:18px;font-weight:700')}>{v.t('notReadyTitle')}</p>
          <p style={s('margin:0 0 20px;font-size:15px;color:var(--c-fg-2);line-height:1.6;text-wrap:pretty')}>{v.t('notReadyBody')}</p>
          <Squircle as="a" cornerRadius={14} cornerSmoothing={0.85} className="btn btn--brand"
            href={p.url} target="_blank" rel="noopener noreferrer" style={s('text-decoration:none')}>
            {v.t('openOfficial')} ↗
          </Squircle>
        </Ring>
      ) : (
        <>
          <AnimatedContent y={10} style={s('margin-bottom:28px')}>
            <Callout kind="warn" icon="!" title={v.t('warnTitle')}>{v.t('warnBody')}</Callout>
          </AnimatedContent>

          <ol style={s('margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:36px')}>
            {v.steps.map(step => (
              <AnimatedContent as="li" className="guide-step" key={step.n} y={20}>
                <div style={s('display:flex;align-items:flex-start;gap:12px;margin-bottom:13px')}>
                  <Squircle as="span" cornerRadius={11} cornerSmoothing={0.9} aria-hidden="true"
                    style={s('width:32px;height:32px;background:var(--c-brand);color:var(--c-brand-ink);display:grid;place-items:center;font-size:15px;font-weight:700;flex:none')}>
                    {step.n}
                  </Squircle>
                  <div style={s('min-width:0;padding-top:3px')}>
                    <h2 style={s('margin:0 0 5px;font-size:19px;font-weight:700;line-height:1.3;text-wrap:pretty')}>{step.title}</h2>
                    <p style={s('margin:0;font-size:15.5px;color:var(--c-fg-2);line-height:1.6;text-wrap:pretty')}>{step.desc}</p>
                  </div>
                </div>

                {/* The first picture is what the reader sees on arrival, so it
                    loads straight away; the rest wait until scrolled near. */}
                <Squircle cornerRadius={18} cornerSmoothing={0.85}
                  style={s('margin-inline:auto;overflow:hidden;background:var(--c-surface-2)',
                    { maxWidth: step.h / step.w > 1.3 ? '330px' : '100%' })}>
                  <img
                    src={step.shot}
                    alt={step.label}
                    width={step.w}
                    height={step.h}
                    loading={step.n === 1 ? 'eager' : 'lazy'}
                    fetchpriority={step.n === 1 ? 'high' : 'low'}
                    decoding="async"
                    style={s('display:block;width:100%;height:auto')}
                  />
                </Squircle>

                {step.scam && (
                  <div style={s('margin-top:13px')}>
                    <Callout kind="danger" icon="!">{v.t('scamNote')}</Callout>
                  </div>
                )}

                {step.note && (
                  <div style={s('margin-top:13px')}>
                    <Callout kind="warn" icon="!">{step.note}</Callout>
                  </div>
                )}
              </AnimatedContent>
            ))}
          </ol>

          <AnimatedContent y={12} style={s('margin-top:34px')}>
            <Callout kind="done" icon="✓" title={v.t('doneTitle')}>{v.doneBody}</Callout>
          </AnimatedContent>

          <Ring as="a" radius={17} color="var(--c-border-strong)" background="var(--c-surface)"
            className="btn btn--quiet" href={p.url} target="_blank" rel="noopener noreferrer"
            style={s('display:flex;margin-top:12px;padding:1px')}
            innerStyle={s('padding:14px;gap:8px')}>
            {v.t('openOfficial')} ↗
          </Ring>
        </>
      )}
    </section>
  );
}

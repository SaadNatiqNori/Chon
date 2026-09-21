import { s } from '../css.js';
import { AnimatedContent } from './motion.jsx';
import { PulseStats, PulseLike } from './Pulse.jsx';

export default function Footer({ v }) {
  const width = v.wide ? '1180px' : '620px';

  return (
    <footer className="site-footer">
      {/* The wordmark, outlined and nearly invisible, anchoring the corner. */}
      <img className="watermark" src="brand/logo-outline.png" alt="" aria-hidden="true" width="1005" height="482" />

      <div className="site-footer__inner" style={{ maxWidth: width }}>
        <AnimatedContent className="site-footer__top" y={12}>
          <div className="site-footer__brand">
            <img className="brandmark__light" src="brand/logo-light.png" alt="چۆن" width="1005" height="482" />
            <img className="brandmark__dark" src="brand/logo-dark.png" alt="چۆن" width="1005" height="482" />
            <p className="site-footer__tag" style={s('margin:0')}>{v.t('tagline')}</p>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__h">{v.t('coverageTitle')}</span>
            <span className="site-footer__stat"><b>{v.readyCount}</b> {v.t('coverageApps')}</span>
            <span className="site-footer__stat"><b>{v.stepCount}</b> {v.t('coverageSteps')}</span>
            <span className="site-footer__stat"><b>4</b> {v.t('coverageLangs')}</span>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__h">{v.t('languageLabel')}</span>
            {v.langs.map(l => (
              <button
                key={l.code}
                lang={l.code}
                onClick={l.pick}
                className="site-footer__stat"
                style={s('background:none;border:0;padding:0;cursor:pointer;text-align:start', {
                  color: l.active ? 'var(--c-fg)' : 'var(--c-fg-2)',
                  fontWeight: l.active ? 700 : 400
                })}
              >
                {l.native}
              </button>
            ))}
          </div>
          <PulseStats v={v} />
        </AnimatedContent>

        <PulseLike v={v} />

        <div className="site-footer__rule" />
        <p className="site-footer__legal" style={s('margin:0')}>{v.t('disclaimer')}</p>
        <p className="site-footer__legal" style={s('margin:8px 0 0')}>{v.t('privacyNote')}</p>
      </div>
    </footer>
  );
}

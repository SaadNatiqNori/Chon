import { useEffect, useState } from 'react';
import { Squircle } from 'corner-smoothing';
import Ring from './Ring.jsx';

export default function Header({ v }) {
  const [stuck, setStuck] = useState(false);

  // The hairline and shadow only appear once the page has moved, so the header
  // sits flush with the content at rest.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const width = v.wide ? '1180px' : '620px';

  return (
    <header className={'site-header' + (stuck ? ' is-stuck' : '')}>
      <div className="site-header__bar" style={{ maxWidth: width }}>
        <button className="brandmark" onClick={v.goHome} aria-label={v.t('homeLabel')}>
          <img className="brandmark__light" src="brand/logo-light.png" alt="چۆن" width="1005" height="482" />
          <img className="brandmark__dark" src="brand/logo-dark.png" alt="چۆن" width="1005" height="482" />
        </button>

        <Ring radius={15} color="var(--c-border)" background="var(--c-bg-subtle)"
          className="seg" innerClassName="seg__inner" role="group" aria-label={v.t('languageLabel')}>
          {v.langs.map(l => (
            <Squircle
              as="button"
              key={l.code}
              cornerRadius={11}
              cornerSmoothing={0.85}
              className="seg__btn"
              lang={l.code}
              aria-pressed={l.active ? 'true' : 'false'}
              onClick={l.pick}
              title={l.native}
            >
              {l.short}
            </Squircle>
          ))}
        </Ring>

        <Ring as="button" radius={13} color="var(--c-border)" background="var(--c-bg-subtle)"
          className="icon-btn" onClick={v.cycleTheme} aria-label={v.t('themeLabel')} title={v.themeName}>
          {v.themeIcon}
        </Ring>
      </div>
    </header>
  );
}

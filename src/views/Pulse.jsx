import { s } from '../css.js';

// The part of the footer the readers write.
//
// Two pieces that sit in the same row as the coverage numbers: a column of
// totals with the countries under it, and the question that produces the only
// number here a person chooses to give.

const FLAG_BASE = 0x1f1e6;
const LETTER_A = 65;

// Two letters into the pair of regional indicators the phone draws as a flag.
// ZZ is the reserved code for unknown and has no flag, so it gets a globe.
function flag(code) {
  if (!/^[A-Z]{2}$/.test(code) || code === 'ZZ') return '🌍';
  return String.fromCodePoint(
    ...[...code].map(c => FLAG_BASE + (c.charCodeAt(0) - LETTER_A))
  );
}

// The browser already knows what every country is called in Arabic and in
// English, so there is no table of two hundred names to carry or translate.
// Kurdish is not a locale it has names for, which is what the fallback is for.
function countryName(code, locale, fallback) {
  if (code === 'ZZ') return fallback;
  try {
    const names = new Intl.DisplayNames([locale, 'en'], { type: 'region', fallback: 'none' });
    return names.of(code) || code;
  } catch (e) {
    return code;
  }
}

// The interface writes numbers in Western digits in all four languages, so the
// grouping is the only thing to get right and it is the same one everywhere.
function num(n) {
  try { return new Intl.NumberFormat('en-US').format(n); }
  catch (e) { return String(n); }
}

export function PulseStats({ v }) {
  const p = v.pulse;
  if (!p.show) return null;

  return (
    <div className="site-footer__col">
      <span className="site-footer__h">{v.t('pulseTitle')}</span>
      <span className="site-footer__stat">
        <b>{num(p.visitors)}</b> {v.t('pulsePeople')}
      </span>
      <span className="site-footer__stat">
        <b>{num(p.views)}</b> {v.t('pulseVisits')}
      </span>

      {p.countries.length > 0 && (
        <>
          <span className="site-footer__h pulse__h--sub">{v.t('pulseFrom')}</span>
          <ul className="pulse__places">
            {p.countries.map(c => (
              <li key={c.code} className="pulse__place">
                <span className="pulse__flag" aria-hidden="true">{flag(c.code)}</span>
                <span className="pulse__country">
                  {countryName(c.code, v.locale, v.t('countryOther'))}
                </span>
                <b className="pulse__n">{num(c.n)}</b>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function PulseLike({ v }) {
  const p = v.pulse;
  if (!p.show) return null;

  return (
    <div className="pulse__ask">
      <p className="pulse__question" style={s('margin:0')}>
        {p.liked ? v.t('likeDone') : v.t('likeAsk')}
      </p>

      <button
        type="button"
        onClick={p.toggleLike}
        aria-pressed={p.liked}
        className={'pulse__heart' + (p.liked ? ' is-on' : '')}
      >
        <span className="pulse__heart-mark" aria-hidden="true">{p.liked ? '♥' : '♡'}</span>
        <span>{p.liked ? v.t('likeDone') : v.t('likeYes')}</span>
      </button>

      {/* Live, because the number beside a button the reader just pressed is
          the one place a screen reader needs to hear the change. */}
      <span className="pulse__tally" aria-live="polite">
        {v.t('likeCount', { n: num(p.likes) })}
      </span>
    </div>
  );
}

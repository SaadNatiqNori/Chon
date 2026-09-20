import { useId, useState } from 'react';
import { Squircle } from 'corner-smoothing';
import Ring from './Ring.jsx';
import { withTerms } from './terms.jsx';

// The panel for the code that never came.
//
// It sits at the foot of every guide, closed, because the reader who does not
// need it should not have to scroll past nine paragraphs to reach the official
// help link, and the reader who does need it is already at the bottom of the
// page looking for exactly this. Closed it is one line; open it is the whole
// list, numbered in the order worth trying.
//
// The list is an <ol>, so the order survives for a screen reader even though
// the printed numbers are decorative.
export default function OtpHelp({ v }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (!v.otp.length) return null;

  return (
    <Ring
      radius={19}
      color="var(--c-border)"
      background="var(--c-surface-2)"
      className="otp"
      innerStyle={{ display: 'block', alignItems: 'stretch', justifyContent: 'flex-start' }}
    >
      <button
        type="button"
        className="otp__head"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls={panelId}
        onClick={() => setOpen(o => !o)}
      >
        <Squircle as="span" cornerRadius={9} cornerSmoothing={0.9} className="otp__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
            strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.6 3.4h6.8a1.6 1.6 0 0 1 1.6 1.6v14a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 19V5a1.6 1.6 0 0 1 1.6-1.6Z" />
            <path d="M10.2 8.4h3.6" />
            <path d="M10.2 11.8h3.6" />
          </svg>
        </Squircle>

        <span className="otp__heading">
          <span className="otp__title">{v.t('otpTitle')}</span>
          <span className="otp__sub">{v.t('otpSub')}</span>
        </span>

        {/* A drawn chevron rather than a character, so it reads the same in all
            four languages, and turned by CSS rather than swapped for a second
            mark so the two states are one movement. */}
        <span className={'otp__chev' + (open ? ' is-open' : '')} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 10 5 5 5-5" />
          </svg>
        </span>
      </button>

      <div id={panelId} className="otp__panel" hidden={!open}>
        <ol className="otp__list">
          {v.otp.map((fix, i) => (
            <li className="otp__item" key={fix.id}>
              <Squircle as="span" cornerRadius={8} cornerSmoothing={0.9} className="otp__n" aria-hidden="true">
                {i + 1}
              </Squircle>
              <span className="otp__text">
                <span className="otp__t">{fix.t}</span>
                <span className="otp__d">{withTerms(fix.d)}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="otp__note">{v.t('otpNote')}</p>
      </div>
    </Ring>
  );
}

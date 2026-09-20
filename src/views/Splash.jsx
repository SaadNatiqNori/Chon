import { Fragment, useEffect, useState } from 'react';
import { Squircle } from 'corner-smoothing';
import { BRAND_ICONS } from '../data/icons.js';
import { brandInk, cardBloom, cardGradient } from '../tint.js';
import BounceCards from './BounceCards.jsx';
import Glyph from './Glyph.jsx';

// The intro layer. The wordmark, and under it the same five tiles the grid
// opens with, fanned across a full screen of page colour and then got out of
// the way. The logo settles first and the cards bounce in beneath it, so the
// eye is given the brand before it is given the apps.
const HERO = ['whatsapp', 'telegram', 'instagram', 'google', 'facebook'];

const TRANSFORMS = [
  'rotate(5deg) translate(-150px)',
  'rotate(0deg) translate(-70px)',
  'rotate(-5deg)',
  'rotate(5deg) translate(70px)',
  'rotate(-5deg) translate(150px)'
];

// Long enough for the last card to finish its bounce and be seen landing,
// short enough that nobody arriving for the second time resents it.
const HOLD = 2000;
const FADE = 520;

function stillness() {
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Splash({ v }) {
  // Someone who has asked for stillness is never shown the layer at all. An
  // intro is the one thing on the site that carries no information, so the
  // honest reduced motion answer is to skip it rather than to flash it.
  const [phase, setPhase] = useState(() => (stillness() ? 'gone' : 'in'));

  useEffect(() => {
    if (phase === 'gone') return undefined;

    if (phase === 'out') {
      const t = setTimeout(() => setPhase('gone'), FADE);
      return () => clearTimeout(t);
    }

    const leave = () => setPhase('out');
    const t = setTimeout(leave, HOLD);

    // Any sign of impatience takes the layer away at once.
    window.addEventListener('pointerdown', leave);
    window.addEventListener('keydown', leave);
    window.addEventListener('wheel', leave, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener('pointerdown', leave);
      window.removeEventListener('keydown', leave);
      window.removeEventListener('wheel', leave);
    };
  }, [phase]);

  // The page underneath must not scroll while it is covered, or a reader who
  // flicks at the splash lands halfway down a grid they have not seen yet.
  useEffect(() => {
    if (phase === 'gone') return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [phase]);

  if (phase === 'gone') return null;

  const cards = HERO
    .map(id => v.platforms.find(p => p.id === id))
    .filter(Boolean)
    .map(p => (
      // The grid's glass, in the fan's hand: the same four values off the one
      // brand colour, and the same light sitting outside the tile so it can
      // spill past the squircle's edge.
      <Fragment key={p.id}>
        <span
          className="bcard__bloom"
          style={{ background: cardBloom(p.glow || p.tile, v.resolvedTheme) }}
        />
        <Squircle
          cornerRadius={26}
          cornerSmoothing={0.8}
          className="bcard"
          style={{
            '--ink-art': brandInk(p.glow || p.tile, v.resolvedTheme, 3),
            '--solid': cardGradient(p.tile, v.resolvedTheme)
          }}
        >
          {BRAND_ICONS[p.id] && <Glyph id={p.id} width="42%" height="42%" />}
        </Squircle>
      </Fragment>
    ));

  return (
    <div className={'splash' + (phase === 'out' ? ' splash--out' : '')} aria-hidden="true">
      {/* The same pair the header uses, so the theme swap in styles.css
          governs this too and there is no second copy of that rule. */}
      <div className="splash__logo">
        <img className="brandmark__light" src="brand/logo-light.png" alt="" width="1005" height="482" fetchpriority="high" />
        <img className="brandmark__dark" src="brand/logo-dark.png" alt="" width="1005" height="482" fetchpriority="high" />
      </div>

      <BounceCards
        cards={cards}
        containerWidth={500}
        containerHeight={250}
        animationDelay={0.35}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={TRANSFORMS}
        enableHover={false}
        rtl={v.dir === 'rtl'}
      />
    </div>
  );
}

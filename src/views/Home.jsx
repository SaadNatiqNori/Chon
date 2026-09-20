import { Squircle } from 'corner-smoothing';
import { s } from '../css.js';
import { BRAND_ICONS } from '../data/icons.js';
import { brandInk, cardBloom, cardGradient } from '../tint.js';
import Glyph from './Glyph.jsx';
import { AnimatedContent, BlurText } from './motion.jsx';
import TiltedCard from './TiltedCard.jsx';

function Card({ p, v, i }) {
  const d = BRAND_ICONS[p.id];
  const theme = v.resolvedTheme;

  // Four values, all drawn from the brand colour: the light the card sits in,
  // the ink its name and pill are set in, the slightly bolder ink the mark
  // gets, and the opaque card kept in reserve for readers who have asked their
  // system for less transparency. The stylesheet decides which are used. The
  // two that carry the colour openly take `glow` where a brand sets one.
  const tone = {
    '--bloom': cardBloom(p.glow || p.tile, theme),
    '--ink': brandInk(p.tile, theme),
    '--ink-art': brandInk(p.glow || p.tile, theme, 3),
    '--solid': cardGradient(p.tile, theme)
  };

  return (
    <AnimatedContent className="pcard-shell" delay={Math.min(i, 9) * 55} y={22} scale={0.97} style={tone}>
      {/* Outside the tilt on purpose: the light stays where it is while the
          pane leans over it, and that small disagreement between the two is
          what reads as glass rather than as a coloured rectangle. */}
      <span className="pcard__bloom" aria-hidden="true" />

      <TiltedCard>
        <Squircle
          as="button"
          cornerRadius={34}
          cornerSmoothing={0.8}
          className={'pcard' + (p.ready ? '' : ' pcard--soon')}
          onClick={() => v.openPlatform(p.id)}
          aria-label={p.name + ', ' + (p.ready ? v.t('openGuide') : v.t('soon'))}
        >
          <span className="pcard__art" aria-hidden="true">
            {d
              ? <Glyph id={p.id} width="44%" height="44%" />
              : <span className="pcard__dot" />}
          </span>

          <span className="pcard__body">
            <span className="pcard__name">{p.name}</span>
            <Squircle as="span" cornerRadius={16} cornerSmoothing={0.9} className="pcard__pill">
              {p.ready ? v.t('openGuide') : v.t('soon')}
            </Squircle>
          </span>
        </Squircle>
      </TiltedCard>
    </AnimatedContent>
  );
}

// The footer's corner watermark, brought onto the page: the same outlined
// wordmark printed three times down the sides, each one turned differently so
// the repeat reads as a pattern rather than a stamp. Decorative throughout.
function Watermarks() {
  return (
    <div className="wm-field" aria-hidden="true">
      <img className="watermark wm-field__a" src="brand/logo-outline.png" alt="" width="1005" height="482" decoding="async" />
      <img className="watermark wm-field__b" src="brand/logo-outline.png" alt="" width="1005" height="482" decoding="async" />
      <img className="watermark wm-field__c" src="brand/logo-outline.png" alt="" width="1005" height="482" decoding="async" />
    </div>
  );
}

export default function Home({ v }) {
  const ready = v.platforms.filter(p => p.ready);
  const soon = v.platforms.filter(p => !p.ready);

  return (
    <section className="home" style={s('padding:34px 0 0;position:relative')}>
      <Watermarks />
      <BlurText as="h1" text={v.t('pickTitle')} style={s('margin:0 0 6px;font-size:34px;font-weight:900;letter-spacing:-.4px;line-height:1.15;text-align:center')} />
      <AnimatedContent as="p" delay={120} y={10} style={s('margin:0 0 28px;font-size:16px;color:var(--c-fg-2);text-wrap:pretty;text-align:center')}>
        {v.t('pickSub')}
      </AnimatedContent>

      <div className="card-grid">
        {ready.map((p, i) => <Card key={p.id} p={p} v={v} i={i} />)}
      </div>

      {soon.length > 0 && (
        <>
          <AnimatedContent as="h2" y={10} style={s('margin:40px 0 16px;font-size:17px;font-weight:800;letter-spacing:.2px;text-align:center;color:var(--c-fg-muted)')}>
            {v.t('soon')}
          </AnimatedContent>
          <div className="card-grid">
            {soon.map((p, i) => <Card key={p.id} p={p} v={v} i={i} />)}
          </div>
        </>
      )}
    </section>
  );
}

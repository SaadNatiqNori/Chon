import { Squircle } from 'corner-smoothing';
import { s } from '../css.js';
import { BRAND_ICONS } from '../data/icons.js';
import { cardGradient } from '../tint.js';
import { AnimatedContent, BlurText } from './motion.jsx';

function Card({ p, v, i }) {
  const d = BRAND_ICONS[p.id];

  return (
    <AnimatedContent className="pcard-shell" delay={Math.min(i, 9) * 55} y={22} scale={0.97}>
      <Squircle
        as="button"
        cornerRadius={34}
        cornerSmoothing={0.8}
        className={'pcard' + (p.ready ? '' : ' pcard--soon')}
        style={{ background: cardGradient(p.tile, v.resolvedTheme) }}
        onClick={() => v.openPlatform(p.id)}
        aria-label={p.name + ', ' + (p.ready ? v.t('openGuide') : v.t('soon'))}
      >
        <span className="pcard__art" aria-hidden="true">
          {d
            ? <svg viewBox="0 0 24 24" width="44%" height="44%" fill="rgba(255,255,255,.96)"><path d={d} /></svg>
            : <span style={{ width: '20%', aspectRatio: '1', borderRadius: '50%', background: 'rgba(255,255,255,.9)' }} />}
        </span>

        <span className="pcard__body">
          <span className="pcard__name">{p.name}</span>
          <Squircle as="span" cornerRadius={16} cornerSmoothing={0.9} className="pcard__pill">
            {p.ready ? v.t('openGuide') : v.t('soon')}
          </Squircle>
        </span>
      </Squircle>
    </AnimatedContent>
  );
}

export default function Home({ v }) {
  const ready = v.platforms.filter(p => p.ready);
  const soon = v.platforms.filter(p => !p.ready);

  return (
    <section style={s('padding:34px 0 0;position:relative')}>
      <BlurText as="h1" text={v.t('pickTitle')} style={s('margin:0 0 6px;font-size:34px;font-weight:900;letter-spacing:-.4px;line-height:1.15')} />
      <AnimatedContent as="p" delay={120} y={10} style={s('margin:0 0 28px;font-size:16px;color:var(--c-fg-2);text-wrap:pretty')}>
        {v.t('pickSub')}
      </AnimatedContent>

      <div className="card-grid">
        {ready.map((p, i) => <Card key={p.id} p={p} v={v} i={i} />)}
      </div>

      {soon.length > 0 && (
        <>
          <AnimatedContent as="h2" y={10} style={s('margin:40px 0 14px;font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--c-fg-muted)')}>
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

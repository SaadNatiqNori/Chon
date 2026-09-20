import { useState, useEffect, useCallback } from 'react';
import { LANGS, META, t as tr, deviceLabel } from './data/ui.js';
import { PLATFORMS } from './data/platforms.js';
import { GUIDES, guideFor, devicesWithGuides, hasGuide, DONE } from './data/guides.js';

function applyMeta(locale) {
  const m = META[locale] || META.en;
  document.title = m.title;

  const set = (sel, attr, value) => {
    const el = document.head.querySelector(sel);
    if (el) el.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', m.description);
  set('meta[property="og:title"]', 'content', m.title);
  set('meta[property="og:description"]', 'content', m.description);
  set('meta[property="og:locale"]', 'content', m.ogLocale);
  set('meta[name="twitter:title"]', 'content', m.title);
  set('meta[name="twitter:description"]', 'content', m.description);
}

function resolveTheme(theme) {
  if (theme !== 'system') return theme;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyDoc(locale, theme) {
  const l = LANGS.find(x => x.code === locale) || LANGS[0];
  const root = document.documentElement;
  root.setAttribute('lang', l.code);
  root.setAttribute('dir', l.dir);
  applyMeta(l.code);
  const th = resolveTheme(theme);
  root.setAttribute('data-theme', th);
  return th;
}

export function useApp() {
  const [locale, setLocale] = useState('ckb');
  const [theme, setTheme] = useState('dark');
  const [route, setRoute] = useState('home');
  const [resolved, setResolved] = useState('dark');
  const [platformId, setPlatformId] = useState(null);
  const [device, setDevice] = useState('ios');

  useEffect(() => {
    let loc = 'ckb', th = 'dark';
    try {
      const a = localStorage.getItem('chon.locale');
      const b = localStorage.getItem('chon.theme');
      if (a && LANGS.some(l => l.code === a)) { loc = a; setLocale(a); }
      if (b) { th = b; setTheme(b); }
    } catch (e) {}
    setResolved(applyDoc(loc, th));
  }, []);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const on = () => { if (theme === 'system') setResolved(applyDoc(locale, 'system')); };
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [theme, locale]);

  const t = useCallback((key, vars) => tr(key, locale, vars), [locale]);

  const pickLocale = code => {
    setLocale(code);
    try { localStorage.setItem('chon.locale', code); } catch (e) {}
    setResolved(applyDoc(code, theme));
  };

  const cycleTheme = () => {
    const order = ['dark', 'light', 'system'];
    const next = order[(order.indexOf(theme) + 1) % 3];
    setTheme(next);
    try { localStorage.setItem('chon.theme', next); } catch (e) {}
    setResolved(applyDoc(locale, next));
  };

  const openPlatform = id => {
    const devices = devicesWithGuides(id);
    setPlatformId(id);
    if (devices.length) setDevice(devices.includes(device) ? device : devices[0]);
    setRoute('guide');
    window.scrollTo(0, 0);
  };

  const goHome = () => { setRoute('home'); window.scrollTo(0, 0); };

  const lang = LANGS.find(l => l.code === locale) || LANGS[0];
  const brandName = p => (p.names && p.names[locale]) || p.name;

  const raw = PLATFORMS.find(p => p.id === platformId) || null;
  const platform = raw ? { ...raw, name: brandName(raw) } : null;
  const rawSteps = platform ? guideFor(platform.id, device) : null;

  const steps = rawSteps
    ? rawSteps.map((s, i) => {
        const copy = s[locale] || s.en;
        return {
          n: i + 1,
          shot: s.shot,
          w: s.w,
          h: s.h,
          title: copy.t,
          desc: copy.d,
          scam: !!copy.scam,
          done: !!copy.done,
          note: copy.note || '',
          label: t('stepOf', { n: i + 1, total: rawSteps.length })
        };
      })
    : [];

  const readyCount = PLATFORMS.filter(p => hasGuide(p.id)).length;
  const stepCount = Object.values(GUIDES).reduce(
    (sum, byDevice) => sum + Object.values(byDevice).reduce((n, steps) => n + steps.length, 0), 0
  );

  return {
    dir: lang.dir,
    readyCount,
    stepCount,
    locale,
    localeShort: lang.short,
    langs: LANGS.map(l => ({ ...l, active: l.code === locale, pick: () => pickLocale(l.code) })),
    resolvedTheme: resolved,
    themeIcon: theme === 'dark' ? '☾' : theme === 'light' ? '☀' : '◐',
    themeName: theme,
    cycleTheme,
    t,
    route,
    wide: route === 'home',
    goHome,
    openPlatform,
    platforms: PLATFORMS.map(p => ({ ...p, name: brandName(p), ready: hasGuide(p.id) })),
    platform,
    steps,
    soleDevice: platform && devicesWithGuides(platform.id).length === 1
      ? deviceLabel(devicesWithGuides(platform.id)[0], locale)
      : null,
    doneBody: (platform && DONE[platform.id] && (DONE[platform.id][locale] || DONE[platform.id].en)) || t('doneBody'),
    tabs: platform
      ? devicesWithGuides(platform.id).map(d => ({
          key: d, label: deviceLabel(d, locale), active: d === device, pick: () => { setDevice(d); window.scrollTo(0, 0); }
        }))
      : []
  };
}

import { useState, useEffect, useCallback, useRef } from 'react';
import { LANGS, META, t as tr, deviceLabel } from './data/ui.js';
import { PLATFORMS } from './data/platforms.js';
import { GUIDES, guideFor, devicesWithGuides, hasGuide, DONE } from './data/guides.js';
import { TIPS } from './data/tips.js';
import { keepOffline } from './pwa/register.js';
import { hashFor, readHash, writeHash, baseUrl } from './route.js';

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

// The clipboard API needs a secure context and this is served over plain http
// from XAMPP, so fall back to the old selection trick where it is missing.
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}
  try {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.cssText = 'position:fixed;top:0;opacity:0;pointer-events:none';
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(el);
    return ok;
  } catch (e) {
    return false;
  }
}

export function useApp() {
  const [locale, setLocale] = useState('ckb');
  const [theme, setTheme] = useState('dark');
  const [route, setRoute] = useState('home');
  const [resolved, setResolved] = useState('dark');
  const [platformId, setPlatformId] = useState(null);
  const [device, setDevice] = useState('ios');
  const [shared, setShared] = useState(false);
  const sharedTimer = useRef(0);

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

  // Read the hash on arrival, and again whenever the browser moves through
  // history. Setting the same state twice costs nothing, so it does not matter
  // that Back fires both of these events.
  useEffect(() => {
    const sync = () => {
      const target = readHash(window.location.hash);
      if (!target) { setRoute('home'); return; }
      setPlatformId(target.platformId);
      setDevice(target.device);
      setRoute('guide');
    };
    sync();
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  useEffect(() => () => clearTimeout(sharedTimer.current), []);

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
    const d = devices.length ? (devices.includes(device) ? device : devices[0]) : device;
    setPlatformId(id);
    setDevice(d);
    setRoute('guide');
    writeHash(hashFor(id, d));
    window.scrollTo(0, 0);
  };

  const goHome = () => { setRoute('home'); writeHash(''); window.scrollTo(0, 0); };

  const lang = LANGS.find(l => l.code === locale) || LANGS[0];
  const brandName = p => (p.names && p.names[locale]) || p.name;

  const raw = PLATFORMS.find(p => p.id === platformId) || null;
  const platform = raw ? { ...raw, name: brandName(raw) } : null;
  const rawSteps = platform ? guideFor(platform.id, device) : null;

  // The pictures further down a guide are lazily loaded, so a reader who
  // never scrolls to them would find them missing offline. Opening a guide
  // hands the whole set to the service worker to keep.
  useEffect(() => {
    if (rawSteps && rawSteps.length) keepOffline(rawSteps.map(st => st.shot));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platformId, device]);

  // The phone's own share sheet where there is one, because sending a link into
  // WhatsApp is one tap there; copying the link is the desktop answer.
  const share = async () => {
    if (!platform) return;
    const url = baseUrl() + hashFor(platform.id, device);
    if (navigator.share) {
      try {
        await navigator.share({
          title: platform.name + ' · ' + t('tagline'),
          text: t('shareText', { app: platform.name }),
          url
        });
        return;
      } catch (e) {
        // A cancelled sheet is not a failure and wants no answer; anything else
        // falls through to the clipboard.
        if (e && e.name === 'AbortError') return;
      }
    }
    if (!(await copyText(url))) return;
    clearTimeout(sharedTimer.current);
    setShared(true);
    sharedTimer.current = setTimeout(() => setShared(false), 1800);
  };

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
    share,
    shared,
    steps,
    tips: TIPS.map(tip => {
      const copy = tip[locale] || tip.en;
      return { id: tip.id, icon: tip.icon, tone: tip.tone, t: copy.t, d: copy.d };
    }),
    soleDevice: platform && devicesWithGuides(platform.id).length === 1
      ? deviceLabel(devicesWithGuides(platform.id)[0], locale)
      : null,
    doneBody: (platform && DONE[platform.id] && (DONE[platform.id][locale] || DONE[platform.id].en)) || t('doneBody'),
    tabs: platform
      ? devicesWithGuides(platform.id).map(d => ({
          key: d,
          label: deviceLabel(d, locale),
          active: d === device,
          // Replaced rather than pushed: flicking between iPhone and Android is
          // not a place you should have to press Back through.
          pick: () => { setDevice(d); writeHash(hashFor(platform.id, d), true); window.scrollTo(0, 0); }
        }))
      : []
  };
}

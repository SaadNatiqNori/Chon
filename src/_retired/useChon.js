import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TODAY, CATS, PLATFORMS, GUIDES, GEN, GUIDE_TROUBLE, GLOBAL_TROUBLE,
  LOST_STEPS, TWOFA_CARDS, EXTRA_ITEMS, I18N, LBL, LANGS,
  WIZ_Q1, WIZ_Q2, WIZ_Q3, row
} from './data/source.js';
import { shotFor } from './data/shots.js';

const INITIAL = {
  locale: 'en',
  theme: 'system',
  route: 'home',
  platformId: 'whatsapp',
  device: 'ios',
  query: '',
  langOpen: false,
  filters: { cat: [], device: [], status: [], flags: [] },
  open: {},
  viewer: { open: false, index: 0, zoom: false },
  checklist: { items: [], done: {} },
  wizard: { step: 0, a1: null, a2: null, a3: null, a4: [] }
};

function applyDoc(locale, theme) {
  const l = LANGS.find(x => x.code === locale) || LANGS[0];
  const root = document.documentElement;
  root.setAttribute('lang', l.code);
  root.setAttribute('dir', l.dir);
  let t = theme;
  if (t === 'system') t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', t);
}

function save(cl) {
  try { localStorage.setItem('chon.checklist.v1', JSON.stringify(cl)); } catch (e) {}
}

export function useChon(props = {}) {
  const { verifiedWindowDays = 90, reviewWindowDays = 180 } = props;
  const [st, setSt] = useState(INITIAL);

  // Latest state for listeners registered once.
  const ref = useRef(st);
  ref.current = st;

  const setState = useCallback(patch => setSt(s => ({ ...s, ...patch })), []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('chon.checklist.v1');
      const patch = {};
      if (raw) patch.checklist = JSON.parse(raw);
      const loc = localStorage.getItem('chon.locale');
      const th = localStorage.getItem('chon.theme');
      if (loc && I18N[loc]) patch.locale = loc;
      if (th) patch.theme = th;
      if (Object.keys(patch).length) setState(patch);
      applyDoc(patch.locale || INITIAL.locale, patch.theme || INITIAL.theme);
    } catch (e) {
      applyDoc(INITIAL.locale, INITIAL.theme);
    }
  }, [setState]);

  // Re-resolve `system` theme when the OS preference flips.
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const on = () => { if (ref.current.theme === 'system') applyDoc(ref.current.locale, 'system'); };
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // ---- helpers (were instance methods)
  const t = useCallback((key, vars) => {
    const L = I18N[st.locale] || I18N.en;
    let s = L[key] != null ? L[key] : (I18N.en[key] != null ? I18N.en[key] : key);
    if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }, [st.locale]);

  const lbl = k => { const m = LBL[k] || {}; return m[st.locale] || m.en || k; };

  const catLabel = id => {
    const c = CATS.find(x => x[0] === id) || CATS[CATS.length - 1];
    const idx = { en: 1, ar: 2, ckb: 3, ku: 4 }[st.locale] || 1;
    return c[idx];
  };

  const deviceLabel = d => {
    const m = {
      ios: { en: 'iPhone', ar: 'آيفون', ckb: 'ئایفۆن', ku: 'ئایفۆن' },
      android: { en: 'Android', ar: 'أندرويد', ckb: 'ئەندرۆید', ku: 'ئەندرۆید' },
      web: { en: 'Web', ar: 'الويب', ckb: 'وێب', ku: 'وێب' }
    };
    return (m[d] && (m[d][st.locale] || m[d].en)) || d;
  };

  const diffLabel = d => {
    const m = {
      easy: { en: 'Easy', ar: 'سهل', ckb: 'ئاسان', ku: 'ئاسان' },
      medium: { en: 'Medium', ar: 'متوسط', ckb: 'مامناوەند', ku: 'نافنجی' },
      hard: { en: 'Hard', ar: 'صعب', ckb: 'قورس', ku: 'زەحمەت' }
    };
    return (m[d] && (m[d][st.locale] || m[d].en)) || d;
  };

  const days = iso => Math.round((TODAY - new Date(iso)) / 86400000);

  const fresh = iso => {
    const d = days(iso);
    const dateStr = new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    if (d <= verifiedWindowDays) return { label: t('freshVerified', { d: dateStr }), bg: 'var(--c-success-soft)', fg: 'var(--c-success)', stale: false };
    if (d <= reviewWindowDays) return { label: t('freshReview', { d: dateStr }), bg: 'var(--c-warning-soft)', fg: 'var(--c-warning)', stale: true };
    return { label: t('freshStale', { d: dateStr }), bg: 'var(--c-danger-soft)', fg: 'var(--c-danger)', stale: true };
  };

  const statusOf = p => (p.status === 'pending' && GEN[p.id] ? 'generic' : p.status);

  const status = s => {
    if (s === 'official') return { label: t('statusOfficial'), bg: 'var(--c-success-soft)', fg: 'var(--c-success)', icon: '✓' };
    if (s === 'reference') return { label: t('statusReference'), bg: 'var(--c-info-soft)', fg: 'var(--c-info)', icon: 'i' };
    if (s === 'generic') return { label: lbl('statusGeneric'), bg: 'var(--c-warning-soft)', fg: 'var(--c-warning)', icon: '≈' };
    return { label: t('statusPending'), bg: 'var(--c-warning-soft)', fg: 'var(--c-warning)', icon: '⚠' };
  };

  const go = (route, patch) => { setState({ route, langOpen: false, ...(patch || {}) }); window.scrollTo(0, 0); };

  const genericGuide = p => {
    const s = GEN[p.id];
    if (!s) return null;
    const out = {};
    p.devices.forEach(d => {
      const chrome = d === 'ios' ? 'iPhone' : d === 'android' ? 'Android' : 'Web';
      const steps = [
        { title: 'Open ' + p.name + '. Tap ' + s.home + '.', desc: 'The words may look a little different on your phone. Look for your profile or your account.', mock: { title: p.name, chrome, rows: [row('Home', ''), row('Notifications', ''), row(s.home, 'Account and settings', true)] } },
        { title: 'Tap ' + s.settings, desc: 'This is where your account details live.', mock: { title: s.home, chrome, rows: [row(s.settings, '', true), row('Privacy', ''), row('Notifications', ''), row('Help', '')] } },
        { title: 'Tap ' + s.account, desc: 'Your phone number is kept here.', mock: { title: s.settings, chrome, rows: [row(s.account, '', true), row('Password', ''), row('Email', ''), row('Data and privacy', '')] } },
        { title: 'Add your new number', desc: 'Type your new number. They send you a code. Type the code in. Do all of this inside the app only.', mock: { title: s.phone, chrome, rows: [row('New phone number', 'Include the country code'), row('Send code', ''), row('Enter code', '', true)] }, note: 'Chon never needs your number or your code. Nobody honest will ask you for them.' },
        { title: 'Remove your old number', desc: 'Only after the new one works. Then nobody else can use your old number to get in.', mock: { title: s.phone, chrome, rows: [row('New number', 'Verified'), row('Old number', 'Remove', true)] } }
      ];
      if (p.twofa) steps.push({ title: 'Check two-factor authentication', desc: 'This is a different setting. Change the number here too, then save your recovery codes.', mock: { title: 'Security', chrome, rows: [row('Two-factor authentication', '', true), row('Recovery codes', ''), row('Active sessions', '')] }, note: 'This is the step that locks people out. Do it before your old SIM stops working.' });
      out[d] = {
        generic: true,
        prereqs: ['Your new number works and can get texts.', 'You can open ' + p.name + ' right now.', 'You know if ' + p.name + ' texts you a code when you log in.'],
        steps,
        warnings: [
          { level: 'high', text: 'These steps are a general guide, not the exact screens for ' + p.name + '. Check the official help page before you rely on them.' },
          { level: 'medium', text: 'Do not remove your old number until the new one works. You could lock yourself out.' }
        ]
      };
    });
    return out;
  };

  const guideFor = p => GUIDES[p.id] || genericGuide(p);

  const currentGuide = () => {
    const p = PLATFORMS.find(x => x.id === st.platformId) || PLATFORMS[0];
    const g = guideFor(p);
    const variant = g ? (g[st.device] || g[Object.keys(g)[0]]) : null;
    return { p, g, variant };
  };

  const openPlatform = id => {
    const p = PLATFORMS.find(x => x.id === id);
    const g = guideFor(p);
    let device = p.devices[0];
    if (g) { const avail = Object.keys(g); device = avail.includes(st.device) ? st.device : avail[0]; }
    go('guide', { platformId: id, device });
  };

  const stepBy = useCallback(n => {
    setSt(s => {
      const p = PLATFORMS.find(x => x.id === s.platformId) || PLATFORMS[0];
      const g = GUIDES[p.id] || genericGuideFor(p);
      const variant = g ? (g[s.device] || g[Object.keys(g)[0]]) : null;
      if (!variant) return s;
      const total = variant.steps.length;
      const i = (s.viewer.index + n + total) % total;
      return { ...s, viewer: { ...s.viewer, index: i } };
    });
  }, []);

  // stepBy runs inside a setState updater, so it needs a guide builder free of render state.
  function genericGuideFor(p) { return genericGuide(p); }

  const toggleFilter = (kind, val) => {
    const f = { ...st.filters };
    const arr = f[kind].slice();
    const i = arr.indexOf(val);
    if (i >= 0) arr.splice(i, 1); else arr.push(val);
    f[kind] = arr;
    setState({ filters: f });
  };

  const addItems = ids => {
    const cl = { items: st.checklist.items.slice(), done: { ...st.checklist.done } };
    ids.forEach(id => { if (!cl.items.includes(id)) cl.items.push(id); });
    setState({ checklist: cl });
    save(cl);
  };

  // Keyboard control for the step viewer.
  useEffect(() => {
    const onKey = e => {
      if (!ref.current.viewer.open) return;
      if (e.key === 'Escape') setSt(s => ({ ...s, viewer: { ...s.viewer, open: false } }));
      if (e.key === 'ArrowRight') stepBy(1);
      if (e.key === 'ArrowLeft') stepBy(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [stepBy]);

  const mockRows = rows => rows.map(r => ({
    label: r.label,
    hint: r.hint,
    tap: !!r.tap,
    fw: r.tap ? 700 : 500,
    fg: r.tap ? 'var(--c-primary)' : 'var(--c-fg)',
    bg: r.tap ? 'var(--c-primary-soft)' : 'var(--c-surface-2)',
    bc: r.tap ? 'var(--c-primary)' : 'var(--c-divider)',
    arrow: r.tap ? 'var(--c-primary)' : 'var(--c-fg-muted)',
    tip: r.tap ? '●' : '›',
    tipFull: r.tap ? (st.locale === 'en' ? '← Tap' : '←') : '›'
  }));

  const buildSteps = variant => variant.steps.map((s, i) => ({
    num: i + 1,
    title: s.title,
    desc: s.desc,
    note: s.note || '',
    hasNote: !!s.note,
    deviceBadge: deviceLabel(st.device).toUpperCase(),
    viewLabel: t('stepOf', { n: i + 1, total: variant.steps.length }),
    open: () => setState({ viewer: { open: true, index: i, zoom: false } }),
    mock: { title: s.mock.title, chrome: s.mock.chrome, clock: '9:41', num: i + 1, shot: shotFor(st.platformId, st.device, i), rows: mockRows(s.mock.rows) }
  }));

  // ---- view model
  const L = LANGS.find(x => x.code === st.locale) || LANGS[0];
  const tt = {};
  Object.keys(I18N.en).forEach(k => { tt[k] = t(k); });
  const rtl = L.dir === 'rtl';

  const navItems = [
    ['guides', 'navGuides', 'library'],
    ['wizard', 'navWizard', 'wizard'],
    ['checklist', 'navChecklist', 'checklist'],
    ['safety', 'navSafety', 'safety']
  ].map(([id, key, route]) => ({
    key: id,
    label: t(key),
    current: st.route === route ? 'page' : 'false',
    bg: st.route === route ? 'var(--c-bg-subtle)' : 'transparent',
    fg: st.route === route ? 'var(--c-fg)' : 'var(--c-fg-2)',
    go: () => go(route)
  }));

  const card = p => {
    const s = status(statusOf(p));
    const f = fresh(p.verified);
    return {
      id: p.id, name: p.name, tile: p.tile, catLabel: catLabel(p.cat),
      statusLabel: s.label, statusBg: s.bg, statusFg: s.fg,
      timeLabel: p.min + ' min', deviceLabel: p.devices.map(d => deviceLabel(d)).join(' · '),
      flagLine: (p.direct ? '✓ ' + t('directChange') : '⚠ ' + t('directChange')) + (p.oldNumber ? ' · ' + t('reqOld') : ''),
      freshLabel: f.label,
      go: () => openPlatform(p.id)
    };
  };

  const q = st.query.trim().toLowerCase();
  const matches = p => {
    if (!q) return true;
    const hay = [p.name, p.id, catLabel(p.cat), p.cat, p.src].join(' ').toLowerCase();
    const syn = { whatsapp: 'wa messaging chat', instagram: 'insta ig meta', facebook: 'fb meta', google: 'gmail youtube android', apple: 'icloud apple id iphone', x: 'twitter tweet', microsoft: 'outlook skype hotmail', telegram: 'tg' };
    return hay.includes(q) || (syn[p.id] || '').includes(q) || ('change phone number new sim lost old number 2fa'.includes(q) && p.status !== 'pending');
  };
  const f = st.filters;
  const passFilters = p =>
    (!f.cat.length || f.cat.includes(p.cat)) &&
    (!f.device.length || f.device.some(d => p.devices.includes(d))) &&
    (!f.status.length || f.status.includes(statusOf(p))) &&
    (!f.flags.length || f.flags.every(fl => (fl === 'old' ? p.oldNumber : fl === 'direct' ? p.direct : fl === 'twofa' ? p.twofa : true)));
  const results = PLATFORMS.filter(p => matches(p) && passFilters(p));

  const chip = on => ({ bg: on ? 'var(--c-primary-soft)' : 'var(--c-surface-2)', fg: on ? 'var(--c-primary)' : 'var(--c-fg-2)', bc: on ? 'var(--c-primary)' : 'var(--c-border)', pressed: on ? 'true' : 'false' });

  const filterGroups = [
    { label: t('category'), options: CATS.filter(c => PLATFORMS.some(p => p.cat === c[0])).map(c => ({ key: c[0], label: catLabel(c[0]), ...chip(f.cat.includes(c[0])), toggle: () => toggleFilter('cat', c[0]) })) },
    { label: t('device'), options: ['ios', 'android', 'web'].map(d => ({ key: d, label: deviceLabel(d), ...chip(f.device.includes(d)), toggle: () => toggleFilter('device', d) })) },
    { label: t('source'), options: [['official', t('statusOfficial')], ['reference', t('statusReference')], ['generic', lbl('statusGeneric')], ['pending', t('statusPending')]].map(([k, l]) => ({ key: k, label: l, ...chip(f.status.includes(k)), toggle: () => toggleFilter('status', k) })) },
    { label: t('requirements'), options: [['old', t('reqOld')], ['direct', t('directChange')], ['twofa', t('twofaAffected')]].map(([k, l]) => ({ key: k, label: l, ...chip(f.flags.includes(k)), toggle: () => toggleFilter('flags', k) })) }
  ];

  // ---- guide view
  const { p: gp, g, variant } = currentGuide();
  const gs = status(statusOf(gp));
  const gf = fresh(gp.verified);
  const onList = st.checklist.items.includes(gp.id);
  const guide = {
    id: gp.id, name: gp.name, tile: gp.tile,
    h1: gp.name, h2: st.locale === 'en' ? 'Change your phone number' : t('navWizard'),
    statusLabel: gs.label, statusBg: gs.bg, statusFg: gs.fg, statusIcon: gs.icon,
    freshLabel: gf.label, freshBg: gf.bg, freshFg: gf.fg, stale: gf.stale && statusOf(gp) !== 'pending',
    diffLabel: t('difficulty') + ': ' + diffLabel(gp.diff),
    timeLabel: gp.min + ' min',
    route: '/' + st.locale + '/' + gp.id + '/change-phone-number',
    sourceName: gp.src, sourceUrl: gp.url,
    missing: !variant, hasSteps: !!variant,
    hasTabs: !!g && Object.keys(g).length > 1,
    transFallback: !!variant && st.locale !== 'en',
    tabs: g ? Object.keys(g).map(d => ({
      key: d,
      label: deviceLabel(d), selected: d === st.device ? 'true' : 'false',
      bg: d === st.device ? 'var(--c-surface)' : 'transparent',
      fg: d === st.device ? 'var(--c-fg)' : 'var(--c-fg-2)',
      shadow: d === st.device ? 'var(--c-shadow)' : 'none',
      pick: () => setState({ device: d, viewer: { open: false, index: 0, zoom: false } })
    })) : [],
    prereqs: variant ? variant.prereqs.map(x => ({ text: x })) : [],
    steps: variant ? buildSteps(variant) : [],
    stepsHint: variant ? t('stepOf', { n: 1, total: variant.steps.length }) + ' · ' + deviceLabel(st.device) : '',
    warnings: variant ? variant.warnings.map(w => ({
      text: w.text,
      level: lbl(w.level === 'high' ? 'high' : w.level === 'medium' ? 'medium' : 'low'),
      glyph: w.level === 'high' ? '!' : '⚠',
      bg: w.level === 'high' ? 'var(--c-danger-soft)' : w.level === 'medium' ? 'var(--c-warning-soft)' : 'var(--c-info-soft)',
      bc: w.level === 'high' ? 'var(--c-danger)' : w.level === 'medium' ? 'var(--c-warning)' : 'var(--c-info)',
      ink: w.level === 'high' ? 'var(--c-danger)' : w.level === 'medium' ? 'var(--c-warning)' : 'var(--c-info)'
    })) : [],
    trouble: (GUIDE_TROUBLE[gp.id] || []).map((x, i) => {
      const key = 'g-' + gp.id + '-' + i;
      return { key, q: x.q, a: x.a, open: !!st.open[key], expanded: st.open[key] ? 'true' : 'false', chev: st.open[key] ? '▴' : '▾', toggle: () => setState({ open: { ...st.open, [key]: !st.open[key] } }) };
    }),
    facts: [
      { k: t('factDirect'), v: gp.direct ? t('yes') : t('unknown'), ink: gp.direct ? 'var(--c-success)' : 'var(--c-warning)' },
      { k: t('factOld'), v: gp.oldNumber ? t('yes') : t('no'), ink: gp.oldNumber ? 'var(--c-warning)' : 'var(--c-fg)' },
      { k: t('factSms'), v: gp.sms ? t('yes') : t('no'), ink: 'var(--c-fg)' },
      { k: t('factEmail'), v: gp.email ? t('yes') : t('no'), ink: 'var(--c-fg)' },
      { k: t('factTwofa'), v: gp.twofa ? t('yes') : t('no'), ink: gp.twofa ? 'var(--c-danger)' : 'var(--c-fg)' },
      { k: t('factDevices'), v: gp.devices.map(d => deviceLabel(d)).join(', '), ink: 'var(--c-fg)' }
    ],
    related: PLATFORMS.filter(x => x.cat === gp.cat && x.id !== gp.id).slice(0, 4).map(x => ({ id: x.id, name: x.name, tile: x.tile, go: () => openPlatform(x.id) })),
    addLabel: onList ? t('addedToChecklist') : t('addToChecklist'),
    addBg: onList ? 'var(--c-success-soft)' : 'var(--c-primary)',
    addFg: onList ? 'var(--c-success)' : '#fff',
    addBc: onList ? 'var(--c-success)' : 'var(--c-primary)',
    addToChecklist: () => { if (!onList) addItems([gp.id]); }
  };

  // ---- viewer
  const vsteps = guide.steps;
  const vstep = vsteps[Math.min(st.viewer.index, Math.max(0, vsteps.length - 1))] || { title: '', desc: '', hasNote: false, note: '', mock: { title: '', chrome: '', clock: '', num: null, shot: null, rows: [] } };
  const viewer = {
    open: st.viewer.open && vsteps.length > 0,
    aria: t('whatTap'),
    counter: t('stepOf', { n: st.viewer.index + 1, total: vsteps.length }),
    device: deviceLabel(st.device),
    step: vstep,
    frameWidth: st.viewer.zoom ? '420px' : '300px',
    zoomIcon: st.viewer.zoom ? '−' : '+',
    zoom: () => setState({ viewer: { ...st.viewer, zoom: !st.viewer.zoom } }),
    close: () => setState({ viewer: { ...st.viewer, open: false } }),
    prev: () => stepBy(-1),
    next: () => stepBy(1),
    prevDisabled: st.viewer.index === 0,
    prevOpacity: st.viewer.index === 0 ? '.45' : '1',
    prevLabel: (rtl ? '→ ' : '← ') + t('prev'),
    nextLabel: t('next') + (rtl ? ' ←' : ' →')
  };

  // ---- checklist
  const labelFor = id => {
    const p = PLATFORMS.find(x => x.id === id);
    if (p) return p.name;
    const e = EXTRA_ITEMS.find(x => x[0] === id);
    return e ? e[1] : id;
  };
  const items = st.checklist.items.map(id => {
    const p = PLATFORMS.find(x => x.id === id);
    const done = !!st.checklist.done[id];
    return {
      id,
      label: labelFor(id),
      meta: p ? catLabel(p.cat) + ' · ' + p.min + ' min' : t('navSafety'),
      checked: done ? 'true' : 'false',
      mark: done ? '✓' : '',
      boxBg: done ? 'var(--c-success)' : 'transparent',
      boxBc: done ? 'var(--c-success)' : 'var(--c-border-strong)',
      bg: done ? 'var(--c-success-soft)' : 'var(--c-surface)',
      bc: done ? 'var(--c-success)' : 'var(--c-border)',
      fg: done ? 'var(--c-fg-2)' : 'var(--c-fg)',
      deco: done ? 'line-through' : 'none',
      hasGuide: !!p,
      go: () => p && openPlatform(id),
      toggle: () => {
        const cl = { items: st.checklist.items.slice(), done: { ...st.checklist.done } };
        if (cl.done[id]) delete cl.done[id]; else cl.done[id] = true;
        setState({ checklist: cl }); save(cl);
      }
    };
  });
  const doneCount = items.filter(i => i.checked === 'true').length;
  const total = items.length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const checklist = {
    items, any: total > 0, empty: total === 0, done: doneCount, total,
    pct: pct + '%', pctLabel: pct + '%',
    countLabel: t('countLabel', { done: doneCount, total }),
    reset: () => { const cl = { items: [], done: {} }; setState({ checklist: cl }); save(cl); }
  };

  // ---- wizard
  const w = st.wizard;
  const wizQ = [
    { key: 'a1', title: t('q1'), hint: t('q1hint'), opts: WIZ_Q1, multi: false },
    { key: 'a2', title: t('q2'), hint: t('q2hint'), opts: WIZ_Q2, multi: false },
    { key: 'a3', title: t('q3'), hint: t('q3hint'), opts: WIZ_Q3, multi: false },
    { key: 'a4', title: t('q4'), hint: t('q4hint'), opts: PLATFORMS.slice(0, 12).map(p => [p.id, p.name, catLabel(p.cat)]).concat(EXTRA_ITEMS.map(e => [e[0], e[1], catLabel(e[2])])), multi: true }
  ];
  const cur = wizQ[Math.min(w.step, 3)];
  const picked = w[cur.key];
  const isPicked = v => (cur.multi ? picked.indexOf(v) >= 0 : picked === v);
  const wizBlocked = cur.multi ? w.a4.length === 0 : !picked;
  const wizard = {
    step: w.step,
    progressLabel: t('wizStep', { n: w.step + 1, total: 4 }),
    pct: ((w.step + 1) / 4 * 100) + '%',
    question: cur.title, hint: cur.hint,
    options: cur.opts.map(([v, label, sub]) => {
      const on = isPicked(v);
      return {
        key: v, label, sub,
        pressed: on ? 'true' : 'false',
        bg: on ? 'var(--c-primary-soft)' : 'var(--c-surface)',
        bc: on ? 'var(--c-primary)' : 'var(--c-border)',
        markRadius: cur.multi ? '6px' : '50%',
        markBg: on ? 'var(--c-primary)' : 'transparent',
        markBc: on ? 'var(--c-primary)' : 'var(--c-border-strong)',
        mark: on ? '✓' : '',
        pick: () => {
          const nw = { ...w };
          if (cur.multi) {
            const arr = nw.a4.slice();
            const i = arr.indexOf(v);
            if (i >= 0) arr.splice(i, 1); else arr.push(v);
            nw.a4 = arr;
          } else { nw[cur.key] = v; }
          setState({ wizard: nw });
        }
      };
    }),
    nextDisabled: wizBlocked,
    nextCursor: wizBlocked ? 'not-allowed' : 'pointer',
    nextBg: wizBlocked ? 'var(--c-bg-subtle)' : 'var(--c-primary)',
    nextFg: wizBlocked ? 'var(--c-fg-muted)' : '#fff',
    nextLabel: w.step === 3 ? t('finish') : t('next'),
    back: () => { if (w.step === 0) go('home'); else setState({ wizard: { ...w, step: w.step - 1 } }); },
    next: () => {
      if (wizBlocked) return;
      if (w.step < 3) { setState({ wizard: { ...w, step: w.step + 1 } }); window.scrollTo(0, 0); return; }
      const base = w.a4.slice();
      if (w.a2 === 'no' || w.a1 === 'no-old' || w.a1 === 'stolen') {
        ['gen-email', 'gen-2fa', 'gen-bank'].forEach(x => { if (!base.includes(x)) base.unshift(x); });
      }
      const patch = {};
      if (w.a3 && ['ios', 'android', 'web'].includes(w.a3)) patch.device = w.a3;
      const cl = { items: st.checklist.items.slice(), done: { ...st.checklist.done } };
      base.forEach(id => { if (!cl.items.includes(id)) cl.items.push(id); });
      save(cl);
      setState({ ...patch, checklist: cl, route: 'checklist', langOpen: false });
      window.scrollTo(0, 0);
    }
  };

  return {
    dir: L.dir, t: tt,
    contentDir: 'ltr',
    contentFallback: st.locale !== 'en',
    localeShort: L.short,
    langOpen: st.langOpen, langOpenStr: st.langOpen ? 'true' : 'false',
    toggleLangMenu: () => setState({ langOpen: !st.langOpen }),
    closeLangMenu: () => setState({ langOpen: false }),
    langs: LANGS.map(l => ({
      key: l.code,
      native: l.native, meta: l.meta, check: l.code === st.locale ? '✓' : '',
      bg: l.code === st.locale ? 'var(--c-bg-subtle)' : 'transparent',
      pick: () => { setState({ locale: l.code, langOpen: false }); try { localStorage.setItem('chon.locale', l.code); } catch (e) {} applyDoc(l.code, st.theme); }
    })),
    themeIcon: st.theme === 'dark' ? '☾' : st.theme === 'light' ? '☀' : '◐',
    themeName: st.theme,
    cycleTheme: () => {
      const order = ['system', 'light', 'dark'];
      const next = order[(order.indexOf(st.theme) + 1) % 3];
      setState({ theme: next });
      try { localStorage.setItem('chon.theme', next); } catch (e) {}
      applyDoc(st.locale, next);
    },
    nav: navItems,
    crumbSep: rtl ? '‹' : '›',
    goHome: () => go('home'),
    goLibrary: () => go('library'),
    goWizard: () => go('wizard'),
    isHome: st.route === 'home', isLibrary: st.route === 'library', isGuide: st.route === 'guide',
    isWizard: st.route === 'wizard', isChecklist: st.route === 'checklist', isSafety: st.route === 'safety',
    query: st.query,
    onSearch: e => setState({ query: e.target.value, route: st.route === 'home' ? 'home' : 'library' }),
    quickPicks: ['whatsapp', 'instagram', 'facebook', 'tiktok', 'google', 'apple', 'telegram'].map(id => {
      const p = PLATFORMS.find(x => x.id === id);
      return { key: id, name: p.name, go: () => openPlatform(id) };
    }),
    homeActions: [
      { key: 'wiz', glyph: '◷', tint: 'var(--c-primary-soft)', ink: 'var(--c-primary)', title: t('navWizard'), sub: st.locale === 'en' ? 'Four questions, no phone number needed. Chon builds the list of accounts you must update.' : t('q4hint'), cta: t('startWizard'), go: () => go('wizard') },
      { key: 'chk', glyph: '✓', tint: 'var(--c-success-soft)', ink: 'var(--c-success)', title: t('navChecklist'), sub: t('checklistSub'), cta: t('progress'), go: () => go('checklist') },
      { key: 'saf', glyph: '!', tint: 'var(--c-danger-soft)', ink: 'var(--c-danger)', title: t('lostTitle'), sub: t('twofaSub'), cta: t('navSafety'), go: () => go('safety') }
    ],
    popular: ['whatsapp', 'instagram', 'facebook', 'tiktok', 'google', 'apple', 'telegram', 'linkedin'].map(id => card(PLATFORMS.find(x => x.id === id))),
    categoryCards: CATS.map(c => {
      const n = PLATFORMS.filter(p => p.cat === c[0]).length;
      return { key: c[0], label: catLabel(c[0]), countLabel: n === 1 ? t('resultsOne') : t('resultsMany', { n }), go: () => { setState({ filters: { cat: [c[0]], device: [], status: [], flags: [] }, query: '', route: 'library', langOpen: false }); window.scrollTo(0, 0); } };
    }),
    filterGroups,
    clearFilters: () => setState({ filters: { cat: [], device: [], status: [], flags: [] }, query: '' }),
    results: results.map(card),
    noResults: results.length === 0,
    resultsLabel: results.length === 1 ? t('resultsOne') : t('resultsMany', { n: results.length }),
    guide, viewer, checklist, wizard,
    lostSteps: LOST_STEPS.map((s, i) => ({ n: i + 1, title: s[0], body: s[1] })),
    twofaCards: TWOFA_CARDS.map((c, i) => ({
      key: i, title: c[0], body: c[2],
      tag: lbl(c[1] === 'high' ? 'breaks' : c[1] === 'medium' ? 'checkit' : c[1] === 'safe' ? 'safest' : 'fine'),
      bg: c[1] === 'high' ? 'var(--c-danger-soft)' : c[1] === 'medium' ? 'var(--c-warning-soft)' : c[1] === 'safe' ? 'var(--c-success-soft)' : 'var(--c-info-soft)',
      ink: c[1] === 'high' ? 'var(--c-danger)' : c[1] === 'medium' ? 'var(--c-warning)' : c[1] === 'safe' ? 'var(--c-success)' : 'var(--c-info)'
    })),
    globalTrouble: GLOBAL_TROUBLE.map((x, i) => {
      const key = 'gt-' + i;
      return { key, q: x.q, a: x.a, open: !!st.open[key], expanded: st.open[key] ? 'true' : 'false', chev: st.open[key] ? '▴' : '▾', toggle: () => setState({ open: { ...st.open, [key]: !st.open[key] } }) };
    })
  };
}

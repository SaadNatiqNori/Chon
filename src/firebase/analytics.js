// What gets reported to Google Analytics.
//
// The Firebase console shows this under Analytics, and it collects a great deal
// on its own: country, city, device, browser, language, how long a session
// lasted, whether the visitor came back. The events below are the part it
// cannot guess, which is what anyone actually does here. Which app was opened,
// on which phone, in which language, and whether the guide reached its end.
//
// Every call is safe before Firebase has loaded. Events raised in the first
// second of a visit go into a queue and are sent once the SDK is ready, so the
// arrival of a reader is never the one event that gets lost.

import { analytics, hasAnalytics } from './client.js';

const MAX_QUEUE = 40;
const queue = [];
let sink = null;
let starting = false;

function flush() {
  if (!sink) return;
  while (queue.length) {
    const [name, params] = queue.shift();
    try { sink(name, params); } catch (e) {}
  }
}

function start() {
  if (starting || !hasAnalytics) return;
  starting = true;
  Promise.all([analytics(), import('firebase/analytics')])
    .then(([instance, ga]) => {
      if (!instance) return;
      sink = (name, params) => ga.logEvent(instance, name, params);
      // Held back until there is somewhere to send it, so the property is
      // attached to every event rather than to whatever arrives after it.
      if (pendingProps) { try { ga.setUserProperties(instance, pendingProps); } catch (e) {} }
      flush();
    })
    .catch(() => {});
}

let pendingProps = null;

// Dimensions to slice every report by. A user property has to be registered
// once in the console before it shows up in reports, which FIREBASE.md covers.
export function describeVisitor(props) {
  const clean = {};
  for (const [k, v] of Object.entries(props)) if (v != null && v !== '') clean[k] = String(v);
  if (!Object.keys(clean).length) return;

  if (!sink) {
    pendingProps = { ...(pendingProps || {}), ...clean };
    start();
    return;
  }
  Promise.all([analytics(), import('firebase/analytics')])
    .then(([instance, ga]) => { if (instance) ga.setUserProperties(instance, clean); })
    .catch(() => {});
}

export function track(name, params) {
  if (!hasAnalytics) return;
  if (sink) {
    try { sink(name, params || {}); } catch (e) {}
    return;
  }
  // A visitor who opens twenty guides before the SDK lands is not a real
  // visitor, and an unbounded queue is a memory leak waiting for one.
  if (queue.length < MAX_QUEUE) queue.push([name, params || {}]);
  start();
}

// Chon is one document with a hash on the end, so the automatic page_view fires
// once and never again. Reporting each guide as its own page is what makes the
// Pages report in the console say anything useful.
export function trackScreen(path, title) {
  track('page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
}

// The footer's numbers, as React sees them.
//
// One round trip on mount: register the arrival, then read the totals back.
// Everything after that is local. The heart moves the moment it is pressed and
// the write goes out behind it, because a counter that waits for Firestore
// before it moves feels broken on a phone in a village with two bars.

import { useState, useEffect, useCallback, useRef } from 'react';
import { arrive, setLiked, readStats } from './firebase/pulse.js';
import { track, describeVisitor } from './firebase/analytics.js';
import { configured } from './firebase/client.js';

// React's strict mode runs effects twice in development, and the second run
// would be a second view on every reload. The visit belongs to the page load,
// not to the component, so the guard lives outside React.
let arrived = false;

const EMPTY = { likes: 0, visitors: 0, views: 0, countries: [] };

export function usePulse(locale) {
  const [stats, setStats] = useState(EMPTY);
  const [liked, setLikedState] = useState(false);
  const [ready, setReady] = useState(false);
  const alive = useRef(true);
  const inFlight = useRef(false);

  useEffect(() => () => { alive.current = false; }, []);

  useEffect(() => {
    if (!configured || arrived) return;
    arrived = true;

    (async () => {
      const visit = await arrive();
      if (visit) {
        // Country as a user property means every report in the console can be
        // broken down by it, not just the ones that happen to carry it.
        describeVisitor({ country: visit.country, app_locale: locale });
        if (visit.isNew) track('first_visit', { country: visit.country });
        if (!alive.current) return;
        setLikedState(visit.liked);
      }

      const totals = await readStats();
      if (!alive.current) return;
      if (totals) setStats(totals);
      setReady(Boolean(totals));
    })();
    // The visit is recorded once per load; a language change afterwards is
    // reported on its own and must not re-run any of this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLike = useCallback(async () => {
    if (!configured || inFlight.current) return;
    inFlight.current = true;

    const next = !liked;
    setLikedState(next);
    setStats(s => ({ ...s, likes: Math.max(0, s.likes + (next ? 1 : -1)) }));
    track(next ? 'like' : 'unlike', { surface: 'footer' });

    const ok = await setLiked(next);
    inFlight.current = false;
    if (ok || !alive.current) return;

    // The rules turned it down, or the network did. Put it back rather than
    // leave a number on screen that the database does not agree with.
    setLikedState(!next);
    setStats(s => ({ ...s, likes: Math.max(0, s.likes + (next ? -1 : 1)) }));
  }, [liked]);

  return {
    // Until Firestore has answered there is nothing honest to show, and a row
    // of zeroes is a lie rather than a loading state.
    show: ready,
    likes: stats.likes,
    visitors: stats.visitors,
    views: stats.views,
    countries: stats.countries,
    liked,
    toggleLike
  };
}

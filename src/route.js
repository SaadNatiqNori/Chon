// Where you are, written into the address bar.
//
// A guide is `#whatsapp/ios`, the home page is no hash at all. The hash is what
// makes a guide linkable, and it is also what gives the browser's own Back
// button somewhere to go: without it, Back from a guide left the site.
import { PLATFORMS } from './data/platforms.js';
import { devicesWithGuides } from './data/guides.js';

// A platform with no guide yet still gets a hash, just without the device part,
// since its 'not ready' panel is worth linking to as well.
export function hashFor(platformId, device) {
  if (!platformId) return '';
  return '#' + platformId + (devicesWithGuides(platformId).includes(device) ? '/' + device : '');
}

// A hash naming an app that does not exist reads as no hash, so a stale or
// mistyped link lands on the home page rather than on an empty guide. A device
// the platform has no pictures for falls back to the first one it does.
export function readHash(hash) {
  const raw = (hash || '').replace(/^#\/?/, '');
  if (!raw) return null;

  const [id, device] = raw.split('/').map(part => {
    try { return decodeURIComponent(part); } catch (e) { return part; }
  });
  if (!PLATFORMS.some(p => p.id === id)) return null;

  const devices = devicesWithGuides(id);
  return { platformId: id, device: devices.includes(device) ? device : (devices[0] || 'ios') };
}

// The page's address with the hash taken off, which is what a share link is
// built from. Keeps the /Chon/dist/ sub path and any query string intact.
export function baseUrl() {
  return window.location.href.split('#')[0];
}

// pushState and replaceState do not fire hashchange, which is what keeps
// writing the hash from feeding back into the listener that reads it.
export function writeHash(hash, replace) {
  const url = baseUrl() + hash;
  if (url === window.location.href) return;
  window.history[replace ? 'replaceState' : 'pushState'](null, '', url);
}

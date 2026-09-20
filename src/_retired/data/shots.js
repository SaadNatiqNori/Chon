// Real screenshots, keyed "<platform>/<device>/<step number>".
//
// Drop an image at public/shots/<platform>/<device>/<n>.png and add the line
// here; the step renders that picture instead of the drawn screen. Anything
// not listed falls back to the drawn screen, so this can be filled in one
// step at a time.
//
//   'instagram/ios/1': 'shots/instagram/ios/1.png',
//
// Capture these yourself on your own phone: they are then accurate to the app
// version you are actually looking at, and they are yours to publish.
export const SHOTS = {};

export function shotFor(platform, device, index) {
  return SHOTS[platform + '/' + device + '/' + (index + 1)] || null;
}

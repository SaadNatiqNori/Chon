// Which country a reader is in, answered by Vercel's edge rather than by a
// server we run.
//
// The browser will not tell you this. It knows a timezone and a language, and
// both are wrong often enough to be useless: a Kurdish speaker in Germany reads
// as Germany in one and Iraq in the other. The network knows, though, and
// Vercel puts what it knows into a header on every request that reaches it.
//
// Nothing is stored here and no address is logged. The IP never leaves Vercel's
// edge; only the two letter country code is handed back to the page.

export const config = { runtime: 'edge' };

// A code we cannot vouch for is worse than no code, because it becomes a row in
// the visitor table that nobody can explain. ZZ is the reserved code for
// unknown, and the interface has a label for it.
const UNKNOWN = 'ZZ';

function codeFrom(request) {
  const raw =
    request.headers.get('x-vercel-ip-country') ||
    // Set when the project sits behind Cloudflare as well, which costs nothing
    // to support and saves an afternoon if the domain ever moves.
    request.headers.get('cf-ipcountry') ||
    '';
  const code = raw.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) && code !== 'T1' ? code : UNKNOWN;
}

export default function handler(request) {
  const country = codeFrom(request);

  return new Response(JSON.stringify({ country }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // Per visitor and never shared. A cached answer would hand the first
      // reader's country to everyone behind the same edge node.
      'cache-control': 'no-store, private',
      'access-control-allow-origin': '*'
    }
  });
}

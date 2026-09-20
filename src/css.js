// The prototype expressed every style as a CSS declaration string. Parsing those
// strings here keeps the JSX a line-for-line match with the design source.
const cache = new Map();

export function s(text, ...extra) {
  let out = cache.get(text);
  if (!out) {
    out = {};
    for (const decl of text.split(';')) {
      const i = decl.indexOf(':');
      if (i < 0) continue;
      const prop = decl.slice(0, i).trim();
      const val = decl.slice(i + 1).trim();
      if (!prop || !val) continue;
      const key = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      out[key] = val;
    }
    cache.set(text, out);
  }
  return extra.length ? Object.assign({}, out, ...extra) : out;
}

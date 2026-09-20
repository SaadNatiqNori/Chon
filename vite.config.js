import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Files under public/ that are part of the shell rather than of a guide. The
// screenshots live under public/shots and are deliberately not here: they are
// ten megabytes, and the worker keeps them as they are read instead.
const PUBLIC_SHELL = ['brand', 'site.webmanifest'];

function filesUnder(dir, prefix) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const path = prefix ? prefix + '/' + name : name;
    if (statSync(full).isDirectory()) out.push(...filesUnder(full, path));
    else if (!name.startsWith('.') && name !== 'README.md') out.push(path);
  }
  return out;
}

function shellFromPublic(root) {
  const out = [];
  for (const entry of PUBLIC_SHELL) {
    const full = join(root, 'public', entry);
    try {
      if (statSync(full).isDirectory()) out.push(...filesUnder(full, entry));
      else out.push(entry);
    } catch (e) {
      // A shell file that is not there yet is not worth failing a build over.
    }
  }
  return out;
}

// Writes dist/sw.js, with the list of everything the build produced baked into
// it. The list is what makes the site work with no network after one visit, and
// its hash is what makes a new deploy replace the last one's cache.
function serviceWorker() {
  let root = process.cwd();

  return {
    name: 'chon-service-worker',
    apply: 'build',
    configResolved(config) { root = config.root; },
    generateBundle(_options, bundle) {
      const built = Object.keys(bundle).filter(name => name !== 'sw.js');
      // './' is how the browser asks for the page when the address ends at the
      // directory, which is the usual way in; index.html covers the other.
      const precache = ['./', 'index.html', ...built, ...shellFromPublic(root)];

      const version = createHash('sha256').update(precache.join('\n')).digest('hex').slice(0, 12);
      const source = readFileSync(join(root, 'src/pwa/service-worker.js'), 'utf8')
        .replace('__VERSION__', version)
        .replace('__PRECACHE__', JSON.stringify(precache, null, 2));

      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    }
  };
}

export default defineConfig({
  plugins: [react(), serviceWorker()],
  // Served from XAMPP at http://localhost/Chon/dist/ after `npm run build`.
  base: './',
  build: { outDir: 'dist' }
});

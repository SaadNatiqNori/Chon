import { useApp } from './useApp.js';
import { s } from './css.js';
import Header from './views/Header.jsx';
import Footer from './views/Footer.jsx';
import Home from './views/Home.jsx';
import Guide from './views/Guide.jsx';
import Splash from './views/Splash.jsx';
import Tips from './views/Tips.jsx';

export default function App() {
  const v = useApp();

  return (
    <div dir={v.dir} style={s('min-height:100vh;overflow-x:clip;background:var(--c-bg);color:var(--c-fg);font-size:16px;line-height:1.55', { fontFamily: 'var(--c-font)' })}>
      <Splash v={v} />
      <Header v={v} />
      <main style={s('margin:0 auto;padding:0 18px 20px', { maxWidth: v.route === 'home' ? '1180px' : '620px' })}>
        {v.route === 'home' ? <Home v={v} /> : <Guide v={v} />}
      </main>
      <Footer v={v} />
      <Tips v={v} />
    </div>
  );
}

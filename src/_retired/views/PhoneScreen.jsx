// One step's picture: a real screenshot when the project has one registered,
// otherwise a drawn screen annotated the way a screenshot would be — the tap
// target ringed, numbered and labelled.

const CHROME = {
  iPhone: { centreTitle: true, back: '‹', grouped: true },
  Android: { centreTitle: false, back: '←', grouped: false },
  Web: { centreTitle: false, back: '', grouped: true, browser: true }
};

function StatusBar({ k, clock, chrome }) {
  if (chrome.browser) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${5 * k}px ${11 * k}px ${3 * k}px`, fontSize: 10 * k, fontWeight: 600, color: '#111' }}>
      <span>{clock}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 3 * k }}>
        {/* signal, wi-fi, battery */}
        <svg width={11 * k} height={9 * k} viewBox="0 0 11 9" fill="#111">
          <rect x="0" y="6" width="2" height="3" rx=".5" /><rect x="3" y="4" width="2" height="5" rx=".5" />
          <rect x="6" y="2" width="2" height="7" rx=".5" /><rect x="9" y="0" width="2" height="9" rx=".5" />
        </svg>
        <svg width={11 * k} height={9 * k} viewBox="0 0 16 12" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round">
          <path d="M1 4.2a11 11 0 0 1 14 0M3.6 7a7.3 7.3 0 0 1 8.8 0" /><circle cx="8" cy="10" r=".9" fill="#111" stroke="none" />
        </svg>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 1 * k }}>
          <span style={{ width: 16 * k, height: 8 * k, border: `${Math.max(1, 1 * k)}px solid #111`, borderRadius: 2.5 * k, padding: 1 * k, display: 'block' }}>
            <span style={{ display: 'block', width: '72%', height: '100%', background: '#111', borderRadius: 1 * k }} />
          </span>
          <span style={{ width: 1.5 * k, height: 3 * k, background: '#111', borderRadius: 1 }} />
        </span>
      </span>
    </div>
  );
}

function TopBar({ k, title, chrome }) {
  if (chrome.browser) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 * k, padding: `${6 * k}px ${8 * k}px`, background: '#EDEDEF', borderBottom: '1px solid #DCDCDF' }}>
        <span style={{ display: 'flex', gap: 3 * k }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
            <span key={c} style={{ width: 5 * k, height: 5 * k, borderRadius: '50%', background: c }} />
          ))}
        </span>
        <span style={{ flex: 1, background: '#fff', borderRadius: 4 * k, padding: `${3 * k}px ${7 * k}px`, fontSize: 8.5 * k, color: '#6B7280', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{title}</span>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 * k, padding: `${7 * k}px ${11 * k}px`, borderBottom: '1px solid #E8E8EB', background: '#F7F7F8' }}>
      <span style={{ fontSize: 15 * k, color: '#1F6FEB', lineHeight: 1, width: 10 * k }}>{chrome.back}</span>
      <span style={{ flex: 1, fontSize: 12 * k, fontWeight: 700, color: '#111', textAlign: chrome.centreTitle ? 'center' : 'start' }}>{title}</span>
      <span style={{ width: 10 * k }} />
    </div>
  );
}

function Row({ k, row, chrome, last, num }) {
  // Same DOM shape for tapped and untapped rows, and border longhands only —
  // React warns if a `border` shorthand and a `borderBottom` longhand ever swap
  // places on one node across renders (which they would when the device tab
  // changes and a different row becomes the target).
  const w = row.tap ? Math.max(2, 2 * k) : 0;
  const inner = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 * k,
    boxSizing: 'border-box',
    padding: row.tap ? `${8 * k}px ${9 * k}px` : `${9 * k}px ${11 * k}px`,
    background: row.tap ? '#FFF6F5' : '#fff',
    borderStyle: 'solid',
    borderColor: '#F91701',
    borderTopWidth: w, borderRightWidth: w, borderBottomWidth: w, borderLeftWidth: w,
    borderRadius: row.tap ? 7 * k : 0
  };
  const outer = {
    padding: row.tap ? `${3 * k}px ${4 * k}px` : 0,
    borderStyle: 'solid',
    borderColor: '#EFEFF1',
    borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0,
    borderBottomWidth: last ? 0 : 1
  };

  return (
    <div style={outer}>
      <div style={inner}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 * k, minWidth: 0 }}>
          {row.tap && num != null && (
            <span style={{ width: 15 * k, height: 15 * k, borderRadius: '50%', background: '#F91701', color: '#fff', fontSize: 9 * k, fontWeight: 700, display: 'grid', placeItems: 'center', flex: 'none' }}>{num}</span>
          )}
          <span style={{ minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 11 * k, fontWeight: row.tap ? 700 : 500, color: row.tap ? '#C71201' : '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.label}</span>
            {row.hint && <span style={{ display: 'block', fontSize: 8.5 * k, color: row.tap ? '#B0554B' : '#9AA0AA', marginTop: 1 * k }}>{row.hint}</span>}
          </span>
        </span>
        {row.tap
          ? (k >= 0.8 && <span style={{ background: '#F91701', color: '#fff', fontSize: 8.5 * k, fontWeight: 700, padding: `${3 * k}px ${7 * k}px`, borderRadius: 99, flex: 'none', letterSpacing: .3 }}>TAP</span>)
          : <span style={{ fontSize: 11 * k, color: '#C4C7CE', flex: 'none' }}>›</span>}
      </div>
    </div>
  );
}

export default function PhoneScreen({ mock, scale = 1, alt }) {
  const k = scale;
  const chrome = CHROME[mock.chrome] || CHROME.iPhone;

  if (mock.shot) {
    return (
      <img src={mock.shot} alt={alt || mock.title} loading="lazy"
        style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 10 * k, border: '1px solid #E6E6E9', background: '#fff' }} />
    );
  }

  return (
    <div dir="ltr" style={{ background: '#fff', borderRadius: 10 * k, overflow: 'hidden', border: '1px solid #E6E6E9', boxShadow: `0 ${1 * k}px ${3 * k}px rgba(15,23,42,.06)` }}>
      <StatusBar k={k} clock={mock.clock} chrome={chrome} />
      <TopBar k={k} title={mock.title} chrome={chrome} />
      <div style={{ padding: chrome.grouped ? 6 * k : 0, background: '#F2F2F5' }}>
        <div style={{ background: '#fff', borderRadius: chrome.grouped ? 8 * k : 0, overflow: 'hidden', border: chrome.grouped ? '1px solid #EBEBEE' : 'none' }}>
          {mock.rows.map((r, i) => (
            <Row key={i} k={k} row={r} chrome={chrome} last={i === mock.rows.length - 1} num={r.tap ? mock.num : null} />
          ))}
        </div>
      </div>
    </div>
  );
}

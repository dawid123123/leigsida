/** Mini website preview — fixed aspect, looks like the real site */
export default function TemplateThumb({
  name,
  niche,
  cover,
  headline,
  tone = 'dark',
}: {
  name: string;
  niche: string;
  cover?: string;
  headline?: [string, string, string];
  tone?: 'dark' | 'light' | 'soon';
}) {
  const isSoon = tone === 'soon';
  const dark = !isSoon && tone !== 'light';
  const paper = isSoon ? '#12181a' : dark ? '#0c0c0c' : '#f4f2ee';
  const ink = isSoon || !dark ? '#e8eeef' : '#f3f3ef';
  const muted = 'rgba(238,244,245,0.45)';
  const accent = isSoon ? '#5a6a70' : dark ? '#c8e84a' : '#3d9aa6';

  return (
    <div className="thumb">
      <div className="thumb-site" style={{ background: paper, color: ink }}>
        {isSoon ? (
          <div className="thumb-soon">
            <span>{niche}</span>
            <strong>{name}</strong>
            <em>Kemur bráðum</em>
          </div>
        ) : (
          <div className="thumb-home">
            <div className="thumb-copy">
              <span style={{ color: muted }}>{niche}</span>
              {headline ? (
                <strong>
                  <b>{headline[0]}</b>
                  <b style={{ color: accent }}>{headline[1]}</b>
                  <b>{headline[2]}</b>
                </strong>
              ) : (
                <strong>{name}</strong>
              )}
              <i style={{ background: accent }} />
            </div>
            <div className="thumb-photo">
              {cover ? <img src={cover} alt="" /> : <span style={{ background: muted }} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

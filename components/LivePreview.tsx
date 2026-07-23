'use client';

import { useEffect, useRef, useState } from 'react';

/** Desktop demo canvas — no fake browser chrome */
const DESKTOP_W = 1440;

export default function LivePreview({
  url,
  title,
}: {
  url: string;
  title: string;
  host?: string;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      setScale(w > 0 ? Math.min(1, w / DESKTOP_W) : 1);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!url) {
    return (
      <p style={{ padding: '2rem', color: 'var(--dim)' }}>
        Engin virk sýn skráð.
      </p>
    );
  }

  const viewH = Math.round(820 * scale);

  return (
    <div
      ref={shellRef}
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: '#111',
      }}
    >
      <div
        style={{
          height: viewH,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <iframe
          title={title}
          src={url}
          style={{
            width: DESKTOP_W,
            height: 820,
            border: 0,
            display: 'block',
            background: '#111',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'auto',
          }}
        />
      </div>
    </div>
  );
}

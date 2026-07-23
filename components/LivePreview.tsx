'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/** Desktop demo canvas — no fake browser chrome */
const DESKTOP_W = 1440;
const PROD_PREVIEW =
  process.env.NEXT_PUBLIC_KS_PREVIEW_URL || 'https://ks-protect.vercel.app';

function resolveUrl(url: string) {
  if (!url) return url;
  const isLocalHost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');
  // Never serve localhost iframe to real visitors
  if (!isLocalHost && /localhost|127\.0\.0\.1/.test(url)) {
    return PROD_PREVIEW;
  }
  return url;
}

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
  const src = useMemo(() => resolveUrl(url), [url]);

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

  if (!src) {
    return (
      <p style={{ padding: '2rem', color: 'var(--muted)' }}>
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
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen"
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

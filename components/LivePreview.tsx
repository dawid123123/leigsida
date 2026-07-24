'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Template } from '../lib/templates';

/** Desktop canvas — embeds the live KS Next.js site in DEMO mode (no client brand) */
const DESKTOP_W = 1440;
const PROD_PREVIEW =
  process.env.NEXT_PUBLIC_KS_PREVIEW_URL || 'https://ks-protect.vercel.app';
const LOCAL_PREVIEW = 'http://localhost:3000';

function resolveUrl(url: string) {
  if (!url) return url;
  const isLocalHost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');

  // Prefer local KS demo when developing Leigsíða
  if (isLocalHost && /ks-protect\.vercel\.app/.test(url)) {
    return LOCAL_PREVIEW;
  }

  // Never serve localhost iframe to real visitors
  if (!isLocalHost && /localhost|127\.0\.0\.1/.test(url)) {
    return PROD_PREVIEW;
  }
  return url;
}

export default function LivePreview({
  template,
  title,
  url,
}: {
  template: Template;
  title?: string;
  url?: string;
  host?: string;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const raw =
    url || template.previewUrl || (template.live ? PROD_PREVIEW : '');
  const src = useMemo(() => resolveUrl(raw), [raw]);
  const label = title || template.name;

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
      className="live-preview-shell"
      aria-label={label}
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: '#0c0c0c',
      }}
    >
      <div style={{ height: viewH, overflow: 'hidden', position: 'relative' }}>
        <iframe
          title={label}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen"
          style={{
            width: DESKTOP_W,
            height: 820,
            border: 0,
            display: 'block',
            background: '#0c0c0c',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'auto',
          }}
        />
      </div>
    </div>
  );
}

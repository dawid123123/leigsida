'use client';

import { useEffect, useRef, useState } from 'react';
import type { Template } from '../lib/templates';

/** Same-origin 1:1 template (template-bilaverd DEMO) — not an external KS URL */
const DESKTOP_W = 1440;
const PREVIEW_PATH = '/synishorn/bilaverd';

export default function LivePreview({
  template,
  title,
}: {
  template: Template;
  title?: string;
  /** @deprecated ignored */
  url?: string;
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

  const viewH = Math.round(820 * scale);
  const label = title || template.name;

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
          src={PREVIEW_PATH}
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

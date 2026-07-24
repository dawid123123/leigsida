'use client';

import { useEffect, useRef, useState } from 'react';
import TemplateSiteDemo from './TemplateSiteDemo';
import type { Template } from '../lib/templates';

/** In-app template preview only — never loads an external KS Protect URL */
const DESKTOP_W = 1440;

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

  return (
    <div
      ref={shellRef}
      className="live-preview-shell"
      aria-label={title || template.name}
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: '#0c0c0c',
      }}
    >
      <div style={{ height: viewH, overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            width: DESKTOP_W,
            height: 820,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <TemplateSiteDemo template={template} />
        </div>
      </div>
    </div>
  );
}

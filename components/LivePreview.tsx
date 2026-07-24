'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import TemplateSiteDemo from './TemplateSiteDemo';
import type { Template } from '../lib/templates';

/** Desktop canvas — local: live template on :3000 · prod: in-app DEMO (KS Vercel is blocked) */
const DESKTOP_W = 1440;
const LOCAL_PREVIEW = 'http://localhost:3000';

function useIsLocalHost() {
  const [local, setLocal] = useState(false);
  useEffect(() => {
    const h = window.location.hostname;
    setLocal(h === 'localhost' || h === '127.0.0.1');
  }, []);
  return local;
}

export default function LivePreview({
  template,
  title,
}: {
  template: Template;
  title?: string;
  url?: string;
  host?: string;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isLocal = useIsLocalHost();
  const label = title || template.name;

  // Only iframe the live 1:1 template locally. Production cannot embed
  // ks-protect.vercel.app (403 / refused to connect).
  const src = useMemo(() => (isLocal ? LOCAL_PREVIEW : ''), [isLocal]);

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
      aria-label={label}
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: '#0c0c0c',
      }}
    >
      <div style={{ height: viewH, overflow: 'hidden', position: 'relative' }}>
        {src ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
}

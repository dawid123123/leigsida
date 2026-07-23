import type { ReactNode } from 'react';

/** Plain frame for previews — no fake browser chrome */
export default function SiteFrame({ children }: { children: ReactNode; url?: string }) {
  return (
    <div
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      {children}
    </div>
  );
}

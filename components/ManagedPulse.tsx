'use client';

const rows = [
  { label: 'Hýsing', value: 'Online', pulse: true },
  { label: 'SSL', value: 'Virkt', pulse: true },
  { label: 'Afrit', value: 'Í nótt', pulse: false },
  { label: 'Umsjón', value: 'Virk', pulse: true },
];

export default function ManagedPulse() {
  return (
    <div className="lx-pulse" aria-label="Staða umsjónar">
      {rows.map((r) => (
        <div key={r.label} className="lx-pulse-row">
          <span className="lx-pulse-label">{r.label}</span>
          <span className={'lx-pulse-val' + (r.pulse ? ' is-live' : '')}>
            {r.pulse ? <i /> : null}
            {r.value}
          </span>
          <span className="lx-pulse-bar" aria-hidden="true">
            <b />
          </span>
        </div>
      ))}
    </div>
  );
}

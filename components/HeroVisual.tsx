'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type MouseEvent } from 'react';
import { useLang } from '../lib/i18n/LanguageProvider';
import { isk, lowestMonthly } from '../lib/pricing';

export default function HeroVisual() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x1 = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 90, damping: 16 });
  const y1 = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 90, damping: 16 });
  const x2 = useSpring(useTransform(mx, [-0.5, 0.5], [22, -22]), { stiffness: 70, damping: 16 });
  const y2 = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), { stiffness: 70, damping: 16 });
  const x3 = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 110, damping: 18 });
  const y3 = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 110, damping: 18 });
  const rotate = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 80, damping: 18 });

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="hero-visual" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div className="hero-orb hero-orb-a" style={{ x: x1, y: y1 }} />
      <motion.div className="hero-orb hero-orb-b" style={{ x: x2, y: y2 }} />

      <motion.div
        className="hero-stage"
        style={{ rotate }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-stage-grid" aria-hidden="true" />

        <motion.p className="hero-stage-kicker" style={{ x: x3, y: y3 }}>
          {t.heroVisual.from}
        </motion.p>

        <motion.h2
          className="display hero-stage-price"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {isk(lowestMonthly())}
        </motion.h2>
        <p className="hero-stage-unit">{t.heroVisual.unit}</p>

        <div className="hero-chips">
          {t.heroVisual.chips.map((chip, i) => (
            <motion.span
              key={chip}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ duration: 0.25 }}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-ring"
        style={{ x: x2, y: y1 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

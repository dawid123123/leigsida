'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, type MouseEvent } from 'react';
import { isk, lowestBuy, lowestMonthly } from '../lib/pricing';

export default function PriceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 90,
    damping: 16,
  });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), {
    stiffness: 90,
    damping: 16,
  });
  const tilt = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), {
    stiffness: 80,
    damping: 18,
  });

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

  const monthly = lowestMonthly();
  const buy = lowestBuy();

  return (
    <div className="price-visual" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div className="price-visual-glow" style={{ x, y }} />

      <motion.div
        className="price-visual-stack"
        style={{ rotate: tilt }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/byrja?term=askrift" className="price-visual-card is-hot">
          <span>Leigja</span>
          <strong className="display">{isk(monthly)}</strong>
          <em>/ mán.</em>
          <small>Við sjáum um allt</small>
        </Link>

        <Link href="/byrja?term=kaupa" className="price-visual-card">
          <span>Kaupa</span>
          <strong className="display">frá {isk(buy)}</strong>
          <em>einskiptis</em>
          <small>Þú eignast síðuna</small>
        </Link>
      </motion.div>
    </div>
  );
}

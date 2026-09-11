import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface MagneticProps {
  children: React.ReactNode;
  /** Desplazamiento máximo en px hacia el cursor. */
  strength?: number;
  className?: string;
}

/**
 * Efecto magnético (patrón trending GitHub): el elemento sigue
 * sutilmente al cursor con rAF. Se desactiva en táctil y con
 * prefers-reduced-motion. Sin dependencias.
 */
export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 6, className }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let active = false;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      if (active || Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) {
        raf.current = requestAnimationFrame(loop);
      } else {
        el.style.transform = '';
      }
    };
    const kick = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * (strength / Math.max(r.width, 1)) * 2;
      ty = (e.clientY - (r.top + r.height / 2)) * (strength / Math.max(r.height, 1)) * 2;
      tx = Math.max(-strength, Math.min(strength, tx));
      ty = Math.max(-strength, Math.min(strength, ty));
      active = true;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      active = false;
      kick();
    };

    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf.current);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced, strength]);

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', willChange: 'transform' }}>
      {children}
    </span>
  );
};

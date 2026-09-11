import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  /** Retraso escalonado en ms (entradas hero). */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li';
}

/**
 * Reveal-on-scroll con IntersectionObserver (una sola vez).
 * Sin dependencias; con reduced-motion aparece directo.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className, as = 'div' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translate3d(0, 22px, 0)',
        transition: reduced ? 'none' : `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: visible ? undefined : 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
};

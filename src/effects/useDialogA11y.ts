import { useEffect, useRef } from 'react';

/**
 * A11y mínima para diálogos: cierra con Escape, mueve el foco al
 * contenedor al abrir y lo devuelve al elemento previo al cerrar.
 */
export function useDialogA11y<T extends HTMLElement>(onClose: () => void, active: boolean) {
  const ref = useRef<T | null>(null);
  const prevFocus = useRef<Element | null>(null);

  useEffect(() => {
    if (!active) return;
    prevFocus.current = document.activeElement;
    ref.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      (prevFocus.current as HTMLElement | null)?.focus?.({ preventScroll: true });
    };
  }, [active, onClose]);

  return ref;
}

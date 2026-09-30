/**
 * Hook de accesibilidad para dialogos y cajones modales.
 *
 * POR QUE EXISTE: un dialogo que solo se cierra con el raton deja fuera a
 * quien navega con teclado o lector de pantalla. Este hook concentra el
 * comportamiento que hace falta para que un modal sea usable de verdad:
 *
 *  - Escape cierra el dialogo.
 *  - El foco entra en el dialogo al abrirse.
 *  - El foco vuelve al elemento que lo abrio al cerrarse.
 *  - El fondo no se puede desplazar mientras el dialogo esta abierto.
 *
 * Devuelve la ref que hay que colocar en el contenedor del dialogo.
 */
import { useEffect, useRef } from 'react';

export function useDialogA11y<T extends HTMLElement>(
  onClose: () => void,
  isOpen: boolean,
) {
  const ref = useRef<T | null>(null);
  // Se guarda quien tenia el foco para devolverselo al cerrar.
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const node = ref.current;
    if (node) {
      // Si el contenedor no es enfocable, se le pone tabIndex para poder
      // mover el foco dentro sin depender de que haya un boton.
      if (!node.hasAttribute('tabindex')) node.setAttribute('tabindex', '-1');
      node.focus();
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    // Se bloquea el scroll del fondo y se restaura el valor anterior,
    // que puede no ser vacio si ya habia otro modal abierto.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return ref;
}

export default useDialogA11y;

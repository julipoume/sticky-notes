import { useRef, type PointerEvent, type RefObject } from 'react';
import type { Position } from '../../types';

export const useDragAndDrop = (
  position: Position,
  onPositionChange: (changes: Position) => void,
  onDelete: () => void,
  trashRef: RefObject<HTMLDivElement | null>,
) => {
  const dragOffset = useRef<Position | null>(null);

  // Start dragging when the user presses the note
  const startDragging = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('textarea')) return;

    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  // Move the note as the pointer moves
  const moveDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragOffset.current) return;

    onPositionChange({
      x: event.clientX - dragOffset.current.x,
      y: event.clientY - dragOffset.current.y,
    });
  };

  // Stop dragging when the user lets go of the note
  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragOffset.current) return;

    const trash = trashRef.current?.getBoundingClientRect();
    if (
      trash &&
      event.clientX >= trash.left &&
      event.clientX <= trash.right &&
      event.clientY >= trash.top &&
      event.clientY <= trash.bottom
    ) {
      onDelete();
    }

    dragOffset.current = null;
  };

  return {
    dragProps: {
      onPointerDown: startDragging,
      onPointerMove: moveDragging,
      onPointerUp: stopDragging,
      onPointerCancel: () => {
        dragOffset.current = null;
      },
    },
  };
};

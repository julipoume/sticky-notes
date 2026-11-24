import { useState, type MouseEvent } from 'react';
import type { Note } from '../../types';

const createId = () => crypto.randomUUID();

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const onCreate = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const board = event.currentTarget.getBoundingClientRect();

    setNotes((prev) => {
      const zIndex = Math.max(0, ...prev.map((note) => note.zIndex)) + 1;
      return [
        ...prev,
        {
          id: createId(),
          x: event.clientX - board.left,
          y: event.clientY - board.top,
          width: 220,
          height: 180,
          text: '',
          color: 'yellow',
          zIndex,
        },
      ];
    });
  };

  return { notes, onCreate };
};



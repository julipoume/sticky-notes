import { useState, type MouseEvent } from 'react';
import type { Note } from '../../types';

// todo: improve id generation to avoid issues
const createId = () => crypto.randomUUID();

export const useBoard = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent adding a note if the click is on an existing note
    if (event.target !== event.currentTarget) return;

    const board = event.currentTarget.getBoundingClientRect();
   
    setNotes((prev) => {
      const zIndex = prev.length + 1;
      return [
        ...prev,
        {
          id: createId(),
          x: event.clientX - board.left,
          y: event.clientY - board.top,
          width: 220,
          height: 180,
          text: '',
          color: '#fff0b3',
          zIndex,
        },
      ];
    });
  };

  return { notes, addNote };
};



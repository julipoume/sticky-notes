import { useState, type RefObject } from 'react';
import type { Position } from '../../types';
import { useDragAndDrop } from './useDragAndDrop';
import './StickyNote.css';

interface StickyNoteProps {
  id: string;
  position: Position;
  trashRef: RefObject<HTMLDivElement | null>;
  onPositionChange: (changes: Position) => void;
  onDelete: () => void;
}

export const StickyNote = ({
  id,
  position,
  trashRef,
  onPositionChange,
  onDelete,
}: StickyNoteProps) => {
  const [text, setText] = useState('');
  const { dragProps } = useDragAndDrop(
    position,
    onPositionChange,
    onDelete,
    trashRef,
  );

  return (
    <div
      className="note"
      data-id={id}
      style={{ left: position.x, top: position.y }}
      {...dragProps}
    >
      <header className="note-header" />
      <textarea
        className="note-content"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
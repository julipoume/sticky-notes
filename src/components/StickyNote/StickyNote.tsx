import { useState, type CSSProperties, type RefObject } from 'react';
import { NOTE_COLORS, type NoteColor, type Position } from '../../types';
import { useDragAndDrop } from './useDragAndDrop';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import './StickyNote.css';

interface StickyNoteProps {
  id: string;
  position: Position;
  color: NoteColor;
  zIndex: number;
  trashRef: RefObject<HTMLDivElement | null>;
  onPositionChange: (changes: Position) => void;
  onDelete: () => void;
  onColorChange: (color: NoteColor) => void;
}

export const StickyNote = ({
  id,
  position,
  color,
  zIndex,
  trashRef,
  onPositionChange,
  onDelete,
  onColorChange,
}: StickyNoteProps) => {
  const [text, setText] = useState('');
  const { dragProps } = useDragAndDrop(
    position,
    onPositionChange,
    onDelete,
    trashRef,
  );

  const noteStyle = {
    left: position.x,
    top: position.y,
    '--note-color': NOTE_COLORS[color],
    backgroundColor: NOTE_COLORS[color],
    zIndex,
  } as CSSProperties;

  return (
    <div
      className="note"
      data-id={id}
      style={noteStyle}
      {...dragProps}
    >
      <header className="note-header">
        <ColorPicker value={color} onChange={onColorChange} />
      </header>
      <textarea
        className="note-content"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
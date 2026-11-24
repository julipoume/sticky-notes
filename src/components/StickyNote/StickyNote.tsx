import { useState } from 'react';
import type { Position } from '../../types';
import './StickyNote.css';

interface StickyNoteProps {
  position: Position;
}

export const StickyNote = ({ position }: StickyNoteProps) => {
  const [text, setText] = useState('');
  return (
    <div className="note" style={{ left: position.x, top: position.y }}>
      <header className="note-header" />
      <textarea
        className='note-content'
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
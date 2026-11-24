import { useRef } from 'react';
import { useBoard } from './useBoard';
import { StickyNote } from '../StickyNote/StickyNote';
import { TrashZone } from '../TrashZone/TrashZone';
import './Board.css';

export const Board = () => {
  const { notes, addNote, updateNote, removeNote } = useBoard();
  const trashRef = useRef<HTMLDivElement>(null);

  return (
    <div className="board" onDoubleClick={addNote}>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          id={note.id}
          position={{ x: note.x, y: note.y }}
          trashRef={trashRef}
          onPositionChange={(changes) => updateNote(note.id, changes)}
          onDelete={() => removeNote(note.id)}
        />
      ))}
      <TrashZone trashRef={trashRef} />
    </div>
  );
};
import { useBoard } from './useBoard';
import { StickyNote } from '../StickyNote/StickyNote';
import './Board.css';

export const Board = () => {
  const { notes, addNote } = useBoard();

  return (
    <div className="board" onDoubleClick={addNote}>
      {notes.map((note) => (
        <StickyNote key={note.id} position={{ x: note.x, y: note.y }} />
      ))}
    </div>
  );
};
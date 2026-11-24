import { useState } from 'react';
import { NOTE_COLORS, type NoteColor } from '../../types';
import './ColorPicker.css';

type Props = { value: NoteColor; onChange: (color: NoteColor) => void };

export function ColorPicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="color-picker"
      onPointerDown={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        aria-expanded={open}
        style={{ backgroundColor: NOTE_COLORS[value] }}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="color-picker__palette">
          {(Object.keys(NOTE_COLORS) as NoteColor[]).map(color => (
            <button
              key={color}
              type="button"
              aria-pressed={value === color}
              style={{ backgroundColor: NOTE_COLORS[color] }}
              onClick={() => { onChange(color); setOpen(false); }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

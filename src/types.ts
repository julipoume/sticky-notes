export type Position = {
  x: number;
  y: number;
};

export type BoardPosition = Position & {
  width: number;
  height: number;
};

export const NOTE_COLORS = {
  yellow: '#FFF0B3',
  pink: '#FADADD',
  green: '#DDF2D5',
  blue: '#DCEBFF',
  purple: '#E8DDF5',
  orange: '#FFE0C2',
} as const;

export type NoteColor = keyof typeof NOTE_COLORS;

export type Note = BoardPosition & {
  id: string;
  text: string;
  color: NoteColor;
  zIndex: number;
};

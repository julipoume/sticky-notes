export type Position = {
  x: number;
  y: number;
};

export type BoardPosition = Position & {
  width: number;
  height: number;
};

export type Note = BoardPosition & {
  id: string;
  text: string;
  color: string;
  zIndex: number;
};

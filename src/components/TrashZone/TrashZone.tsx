import type { RefObject } from 'react';
import './TrashZone.css';

type Props = { trashRef: RefObject<HTMLDivElement | null> };

export function TrashZone({ trashRef }: Props) {
  return <div ref={trashRef} className="trash">Drag here to delete</div>;
}

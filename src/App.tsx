import { Board } from './components/Board/Board';

export default function App() {
  return (
    <main className="app">
      <div className="toolbar">
          <h1>My Sticky Notes</h1>
          <span className="indicate">Double-click to add · Drag to move · Resize from the corner</span>
      </div>
      <Board />
    </main>
  );
}

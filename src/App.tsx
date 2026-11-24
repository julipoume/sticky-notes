import { Board } from './components/Board/Board';

export default function App() {
  return (
    <main className="app">
      <div className="toolbar">
          <h1>My Sticky Notes</h1>
      </div>
      <Board />
    </main>
  );
}

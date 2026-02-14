import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <header className="header">
        <h1>This is a cicd deployment with local to ec2</h1>
        <h1 className="title">Simple App</h1>
        <p className="subtitle">Production-ready React on AWS EC2</p>
      </header>

      <section className="card">
        <p className="count-label">Counter: {count}</p>
        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </section>

      <section>
        <h1>YOOOOOO..... this is third build with jenkins and deployment</h1>
      </section>

      <footer className="footer">
        <p>Built with React + Vite</p>
      </footer>
    </main>
  );
}

export default App;

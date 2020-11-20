import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Triavia, the trivia game.
        </p>
        <a
          className="App-link"
          href="https://07f.ca/youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          For All Around Azure
        </a>
      </header>
    </div>
  );
}

export default App;

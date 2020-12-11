import React, { useState } from 'react';

//Components
import QuestionCard from './components/questionCard'


const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startGame = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
 
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Triavia, the trivia game.
        </h1>
        <a
          className="App-link"
          href="https://07f.ca/youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          For All Around Azure
        </a>

        <button className="start" onClick={startGame}>Start</button>
        <p className="score">Score: </p>
        <p>Calling home...</p>

        <QuestionCard/>
        <button className="next" onClick={nextQuestion}>Gimmy more</button>

      </header>
    </div>
  );
}

export default App;

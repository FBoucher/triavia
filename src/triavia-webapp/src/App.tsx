import React, { useState } from 'react';
import { QuestionState, Difficulty, fetchTriviaQuestions } from './API';

//Components
import QuestionCard from './components/questionCard';

//Styles
import { GlobalStyle, Wrapper } from './App.styles';



const TOTAL_QUESTIONS = 5;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type CategoryObject = {
  id: string;
  name: string;
};

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startGame = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchTriviaQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);

    setLoading(false);

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct)
        setScore(prev => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <header className="App-header">
          <h1>
            The Triavia
          </h1>

          <br />
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startGame}>Start</button>
          ) : null
          }
          {!gameOver ? <p className='score'>Score: {score}</p> : null}
          {loading && <p>Calling home...</p>}

          {!loading && !gameOver && (
            <QuestionCard
              questionNb={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
              category={questions[number].category}
            />
          )}
          {!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1 ? (
              <button className="next" onClick={nextQuestion}>
                Gimmy more
              </button>
            ) : null}

        </header>
      </Wrapper>
    </>
  );
};

export default App;

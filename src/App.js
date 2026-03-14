import React, {use, useState} from 'react';
import './App.css';

function App() {
    const [quizStatus, setQuizStatus] = useState('menu');
    const [punktid, addPoint] = useState(0);
    const questionsData = [
        {
            id: 1,
            question: "Mis on Eesti pealinn?",
            options: ["Tartu", "Tallinn", "Narva"],
            correct: "Tallinn"
        },
        {
            id:2,
            question: "test2?",
            options: ["test2", "test3", "test4"],
            correct: "test2"
        },
        {
            id: 3,
            question: "Mitu paikset on?",
            options: ["1", "2", "paris palju"],
            correct: "1"
        },
        {
            id: 4,
            question: "Mis on koige parem koht eestis?",
            options: ["Tartu", "Tallinn", "Tsoglo"],
            correct: "tsoglo"
        },
        ]

    const changeToQuiz = () => {setQuizStatus('quiz');};
    const nextQuestion = () => {}; //suvaliselt paneb kusimused ette
    const changeToEndscreen = () => {setQuizStatus('endScreen');};
    const changeToMenu = () => {setQuizStatus('menu');};

    const questionAnswer = (Answer) => {

    }
  return (
    <div className="App">
      <div className="quizContainer">
          {quizStatus === 'menu' && (
              <div className="view">
                  <h1>Viktoriin menu</h1>
                  <button className="btn-main" onClick={changeToQuiz}>Alusta viktoriini</button>
              </div>
          )}
          {quizStatus === 'quiz' && (
              <div className="view">
                  <h1>Viktoriin ise</h1>
                  <button className="btn-main" onClick={ changeToEndscreen}>Alusta tulemus</button>
              </div>
          )}
          {quizStatus === 'endScreen' && (
              <div className="view">
                  <h1>Viktoriin tulemus</h1>
                  <button className="btn-main" onClick={changeToMenu}>Alusta algus</button>
              </div>
          )}
      </div>
    </div>
  );
}

export default App;

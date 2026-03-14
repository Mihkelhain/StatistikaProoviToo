import React, { useState } from 'react';
import './App.css';

function App() {
    const [quizState, setGameState] = useState('menu');

    const changeToQuiz = () => {setGameState('quiz');};
    const changeToEndscreen = () => {setGameState('endScreen');};
    const changeToMenu = () => {setGameState('menu');};

  return (
    <div className="App">
      <div className="quizContainer">
          {quizState === 'menu' && (
              <div className="view">
                  <h1>Viktoriin menu</h1>
                  <button className="btn-main" onClick={changeToQuiz}>Alusta viktoriini</button>
              </div>
          )}
          {quizState === 'quiz' && (
              <div className="view">
                  <h1>Viktoriin ise</h1>
                  <button className="btn-main" onClick={ changeToEndscreen}>Alusta tulemus</button>
              </div>
          )}
          {quizState === 'endScreen' && (
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

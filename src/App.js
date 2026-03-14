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
            correct: "Tsoglo"
        },
        ]
    const [currentQuestion, setCurrent] = useState(null)
    const [remainingQuestions, remRemaining] = useState([])

    const changeToQuiz = () =>{
        addPoint(0);
        setQuizStatus('quiz');
        remRemaining(questionsData);
        nextQuestion(questionsData)
    };

    const nextQuestion = (remainingQuestions) => {
        if (remainingQuestions.length === 0){
            setQuizStatus('endScreen');
            return;}
        const randomQuestion = Math.floor(Math.random() * remainingQuestions.length);
        const chosenQuestion = remainingQuestions[randomQuestion];
        const newRemaining = remainingQuestions.filter(question => question.id !== chosenQuestion.id);
        setCurrent(chosenQuestion);
        remRemaining(newRemaining);
    };

    const changeToEndscreen = () => {setQuizStatus('endScreen');};
    const changeToMenu = () => {setQuizStatus('menu');};

    const questionAnswer = (answer) => {
        if (answer === currentQuestion.correct){
            addPoint(punktid + 1);}
        nextQuestion(remainingQuestions);
    };
    return (
        <div className="App">
            <div className="quizContainer">
                {quizStatus === 'menu' && (
                    <div className="view">
                        <h1>Viktoriini menüü</h1>
                        <button className="btn-main" onClick={changeToQuiz}>Alusta viktoriini</button>
                    </div>
                )}
                {quizStatus === 'quiz' && currentQuestion && (
                    <div className="view">
                        <h1>{currentQuestion.question}</h1>
                        <div className="options">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index} className="btn-main" onClick={() => questionAnswer(option)}>{option}
                                </button>
                            ))}
                        </div>
                        <button onClick={changeToEndscreen}> Endscreen emergency</button>
                        <p>Punktid: {punktid}</p>
                    </div>
                )}
                {quizStatus === 'endScreen' && (
                    <div className="view">
                        <h1>Tulemus: {punktid} / {questionsData.length}</h1>
                        <button className="btn-main" onClick={changeToMenu}>Tagasi algusesse</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

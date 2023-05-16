import React, { useState } from 'react';
import './style.css'

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false },
        ],
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: 'Russia', correct: true },
            { text: 'China', correct: false },
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
        ],
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            { text: 'Everest', correct: true },
            { text: 'Kilimanjaro', correct: false },
            { text: 'Denali', correct: false },
            { text: 'K2', correct: false },
        ],
    },
];

function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function handleAnswerClick(answer) {
        setSelectedAnswer(answer);
    }

    function handleNextClick() {
        if (selectedAnswer !== null) {
            if (questions[currentQuestion].answers[selectedAnswer].correct) {
                setScore(score + 1);
            }
            setSelectedAnswer(null);
            setShowAnswer(false);
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    }

    function handleFinishClick() {
        if (selectedAnswer !== null) {
            if (questions[currentQuestion].answers[selectedAnswer].correct) {
                setScore(score + 1);
            }
            setSelectedAnswer(null);
            setShowAnswer(false);
        }
    }

    return (
        <div className='quiz-game'>
            {currentQuestion < questions.length ? (
                <div className='quiz-question'>
                    <h2>{questions[currentQuestion].question}</h2>
                    <ul className='quiz-answers'>
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <li
                                key={index}
                                onClick={() => handleAnswerClick(index)}
                                className={
                                    showAnswer && selectedAnswer === index
                                        ? answer.correct
                                            ? 'quiz-answer correct'
                                            : 'quiz-answer incorrect'
                                        : 'quiz-answer'
                                }
                            >
                                {answer.text}
                            </li>
                        ))}
                    </ul>
                    <div className='quiz-buttons'>
                        <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                        {currentQuestion < questions.length - 1 ? (
                            <button onClick={handleNextClick} disabled={selectedAnswer === null}>
                                Next Question
                            </button>
                        ) : (
                            <button onClick={handleFinishClick} disabled={selectedAnswer === null}>
                                Finish
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className='quiz-score'>
                    <h2>Final Score: {score}</h2>
                </div>
            )}
        </div>
    )

}


export default QuizGame;
import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [question, setQuestion] = useState(1);
  const handleQuestion = () => {
    const nextQuestion = question + 1;
    setQuestion(nextQuestion);
  };
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              This is where the question text should go
            </div>
          </div>
          <div className="answer-section">
            {}
          </div>
        </>
      )}
    </div>
  );
}

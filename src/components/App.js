import { useState } from "react";

import djangoQuiz from "./QuizData";
import Quiz from "./Quiz";
import StartPage from "./StartPage";
import ResultPage from "./ResultPage";

export default function App() {
  const [quizIndex, setQuizIndex] = useState(-1);

  return (
    <div className="app">
      <div className="quiz-container">
        {quizIndex < 0 && (
          <StartPage onStartPage={setQuizIndex}>Start Quiz</StartPage>
        )}
        {quizIndex >= 0 && quizIndex < djangoQuiz.length && (
          <Quiz quizIndex={quizIndex} onNext={setQuizIndex} />
        )}
        {quizIndex >= djangoQuiz.length && (
          <ResultPage onReset={setQuizIndex}></ResultPage>
        )}
      </div>
    </div>
  );
}

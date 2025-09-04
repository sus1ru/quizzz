import { useState } from "react";

import djangoQuiz from "./QuizData";
import Button from "./Button";
import answers from "./Answers";

function Quiz({ quizIndex, onNext }) {
  const [selectedOption, setSelectedOption] = useState("");
  const quiz =
    quizIndex > -1 && quizIndex < djangoQuiz.length
      ? djangoQuiz[quizIndex]
      : null;
  answers[quiz.id] = selectedOption;

  function handleNext() {
    const nextQuizIndex = quizIndex + 1;
    onNext(nextQuizIndex);
    setSelectedOption("");
  }

  return (
    <div className="quiz-page">
      <Question>{quiz.question}</Question>
      <div className="options">
        {quiz.options.map((option) => (
          <Option
            key={option}
            option={option}
            selected={selectedOption === option}
            onSelect={setSelectedOption}
          />
        ))}
      </div>
      <Button handleButtonClick={handleNext} isDisabled={selectedOption === ""}>
        Next
      </Button>
    </div>
  );
}

function Question({ children }) {
  return <h2 className="question">{children}</h2>;
}

function Option({ option, selected, onSelect }) {
  return (
    <div
      className={`option ${selected ? "selected" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </div>
  );
}

export default Quiz;

import djangoQuiz from "./QuizData";
import answers from "./Answers";
import Button from "./Button";

function ResultPage({ onReset }) {
  let correctCount = 0;
  for (const data of djangoQuiz) {
    const data_id = data.id;
    if (answers[data_id] === data.answer) correctCount++;
  }
  return (
    <div className="result-page">
      <h2>Your Score: {correctCount}</h2>
      <Button handleButtonClick={() => onReset(-1)}>Reset</Button>
    </div>
  );
}

export default ResultPage;

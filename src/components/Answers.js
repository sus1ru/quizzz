import djangoQuiz from "./QuizData"

const answers = djangoQuiz.reduce((acc, item) => {
  acc[item.id] = "";
  return acc;
}, {});

export default answers;
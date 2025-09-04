import { useState } from "react";

const djangoQuiz = [
    {
        "id": 71,
        "question": "What is Django primarily used for?",
        "options": [
            "Mobile Development",
            "Game Development",
            "Web Development",
            "Data Analysis"
        ],
        "answer": "Web Development"
    },
    {
        "id": 72,
        "question": "Which of the following is Django's default database?",
        "options": [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "Oracle"
        ],
        "answer": "SQLite"
    },
    {
        "id": 73,
        "question": "Which file contains the list of installed apps in a Django project?",
        "options": [
            "urls.py",
            "apps.py",
            "settings.py",
            "views.py"
        ],
        "answer": "settings.py"
    },
    {
        "id": 74,
        "question": "What is the default template engine used in Django?",
        "options": [
            "Jinja2",
            "Django Template Language",
            "Mako",
            "Mustache"
        ],
        "answer": "Django Template Language"
    },
    {
        "id": 75,
        "question": "Which command is used to start a new Django project?",
        "options": [
            "django-admin startapp",
            "django-admin startproject",
            "python manage.py runserver",
            "django-admin init"
        ],
        "answer": "django-admin startproject"
    },
    {
        "id": 76,
        "question": "What does ORM stand for in Django?",
        "options": [
            "Object-Relational Mapper",
            "Object-Request Method",
            "Object-Response Model",
            "Ordered-Relation Mapping"
        ],
        "answer": "Object-Relational Mapper"
    },
    {
        "id": 77,
        "question": "Where do you define URL patterns in a Django app?",
        "options": [
            "urls.py",
            "views.py",
            "models.py",
            "settings.py"
        ],
        "answer": "urls.py"
    },
    {
        "id": 78,
        "question": "What does CSRF stand for in Django security?",
        "options": [
            "Cross-Site Resource Finder",
            "Cross-Site Request Forgery",
            "Client-Side Request Function",
            "Central Server Request Framework"
        ],
        "answer": "Cross-Site Request Forgery"
    },
    {
        "id": 79,
        "question": "Which of the following is a Django field type?",
        "options": [
            "CharField",
            "TextField",
            "DateTimeField",
            "All of the above"
        ],
        "answer": "All of the above"
    },
    {
        "id": 80,
        "question": "Which command applies database migrations in Django?",
        "options": [
            "python manage.py makemigrations",
            "python manage.py migrate",
            "python manage.py runserver",
            "python manage.py dbinit"
        ],
        "answer": "python manage.py migrate"
    }
]

const answers = djangoQuiz.reduce((acc, item) => {
  acc[item.id] = "";
  return acc;
}, {});

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

function Button({
  handleButtonClick,
  children,
  isDisabled = false,
  type = "button",
}) {
  return (
    <button
      className={`button ${isDisabled ? "disabled" : ""}`}
      onClick={handleButtonClick}
      type={type}
    >
      {children}
    </button>
  );
}

function StartPage({ onStartPage, children }) {
  function handleStartPage() {
    onStartPage(0);
  }
  return (
    <div className="start-page">
      <h1>Django Quiz</h1>
      <Button handleButtonClick={handleStartPage}>{children}</Button>
    </div>
  );
}

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

import Button from "./Button";

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

export default StartPage;
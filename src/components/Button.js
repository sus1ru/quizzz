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

export default Button;
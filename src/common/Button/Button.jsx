import "./Button.css";

function Button({ onClick, content, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {content}
    </button>
  );
}

export default Button;

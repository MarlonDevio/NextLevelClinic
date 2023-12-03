import "./Button.css";

function Button({ content, className }) {
  return <button className={`btn ${className}`}>{content}</button>;
}

export default Button;

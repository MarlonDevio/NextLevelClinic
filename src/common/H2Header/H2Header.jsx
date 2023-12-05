import "./H2Header.css";

function H2Header({ content, className }) {
  return <h2 className={`H2Header ${className}`}>{content}</h2>;
}

export default H2Header;

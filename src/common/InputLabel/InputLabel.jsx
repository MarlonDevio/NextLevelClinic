import "./InputLabel.css";

function InputLabel({
  content,
  className,
  inputType,
  placeHolder,
  name,
  onChange,
}) {
  return (
    <label className="inputLabel">
      <input
        name={name}
        type={inputType}
        className={className}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </label>
  );
}

export default InputLabel;

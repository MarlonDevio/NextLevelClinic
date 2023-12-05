import "./Form.css";
import { H2Header, InputLabel } from "../index.js";

function Form({ headerContent, inputFields }) {
  return (
    <form className="Form" style={{ zIndex: "1000", position: "relative" }}>
      {/*<H2Header content={headerContent} />*/}
      {/*{inputFields.map((inputField) => (*/}
      {/*  <InputLabel*/}
      {/*    key={inputField.name}*/}
      {/*    name={inputField.name}*/}
      {/*    inputType={inputField.inputType}*/}
      {/*    placeHolder={inputField.placeHolder}*/}
      {/*    onChange={inputField.onChange}*/}
      {/*  />*/}
      {/*))}*/}
    </form>
  );
}

export default Form;

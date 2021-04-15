import React from "react";
import "./style.css";

const InputCpn = (props) => {
  const { handleOnChange, placeholder, ...inputProps } = props;
  return (
    <input
      className="input-cpn"
      onChange={(e) => handleOnChange(e)}
      placeholder={placeholder}
      {...inputProps}
    ></input>
  );
};
export default InputCpn;

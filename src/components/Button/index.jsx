import React from "react";
import "./style.css";

const ButtonCpn = (props) => {
  const { title, width, color, type, ...buttonProps } = props;
  return (
    <button
      className="button-cpn"
      {...buttonProps}
      type={type}
      style={{ width, backgroundColor: color }}
    >
      {title}
    </button>
  );
};
export default ButtonCpn;

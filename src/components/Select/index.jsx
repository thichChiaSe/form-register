import React from "react";
import "./style.css";

const SelectCpn = (props) => {
  const { option, ...selectProps } = props;
  return (
    <select className="birthday-select" {...selectProps}>
      {option?.map((data) => (
        <option value={data.value}>{data.text}</option>
      ))}
    </select>
  );
};
export default SelectCpn;

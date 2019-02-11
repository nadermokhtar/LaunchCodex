import React from "react";

const PriorityField = props => {
  return (
    <select value={props.content} onChange={props.handlePriorityChange}>
      <option value="0" key="0">
        0
      </option>
      <option value="1" key="1">
        1
      </option>
      <option value="2" key="2">
        2
      </option>
      <option value="3" key="3">
        3
      </option>
    </select>
  );
};

export default PriorityField;

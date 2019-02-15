import React from "react";

const BodyField = props => {
  return (
    <div>
      <input type='text' value={props.value} onChange={props.handleBodyChange}></input>
    </div>
  );
};

export default BodyField;

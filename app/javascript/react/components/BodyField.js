import React from "react";

const BodyField = props => {
  return (
    <div data-tooltip tabIndex="4" title="Scribble here">
      <input type='text' value={props.value} onChange={props.handleBodyChange}></input>
    </div>
  );
};

export default BodyField;

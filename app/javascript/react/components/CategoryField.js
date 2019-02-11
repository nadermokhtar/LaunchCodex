import React from "react";

const CategoryField = props => {
  return (
    <select value={props.content} onChange={props.handleCategoryChange}>
      <option value="task" key="task">
        Task
      </option>
      <option value="event" key="event">
        Event
      </option>
      <option value="note" key="note">
        Note
      </option>
    </select>
  );
};

export default CategoryField;

import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#FFFFC2",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, body, completed, type } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            id={this.props.todo.id}
            onChange={this.props.markComplete}
          />
          {type}
          <br/>
          {body}
          {completed}
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;

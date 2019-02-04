import React, { Component } from "react";
import PropTypes from "prop-types";

export class ActionItem extends Component {
  getStyle = () => {
    return {
      background: "#F8ECC2",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.action.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, body, completed, type } = this.props.action;
    console.log(this.props.action);

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete} />
          {type}
          <br />
          {body}
          {completed}
          <i className="fas fa-trash-alt" />
        </p>
      </div>
    );
  }
}
ActionItem.propTypes = {
  action: PropTypes.object.isRequired
};

export default ActionItem;

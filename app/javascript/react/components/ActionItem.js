import React, { Component } from "react";
import PropTypes from "prop-types";

export class ActionItem extends Component {
  getStyle = () => {
    return {
      background: "#ffffff",
      padding: "10px",
      borderBottom: "2px solid #000000",
      textDecoration: this.props.action.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, body, completed, type } = this.props.action;


    return (
      <div className="card2">
        <div style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.markComplete} />
            <b className="card1">{type}</b> {body}
            {completed}
            {"  "}{" "}
            <a href="#" className="button tiny round alert">
              X
            </a>
          </p>
        </div>
      </div>
    );
  }
}
ActionItem.propTypes = {
  action: PropTypes.object.isRequired
};

export default ActionItem;

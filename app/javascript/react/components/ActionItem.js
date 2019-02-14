import React, { Component } from "react";
import PropTypes from "prop-types";

class ActionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  getStyle = () => {
    return {
      background: "#ffffff",
      padding: "10px",
      borderBottom: "2px solid #000000",
      textDecoration: this.props.action.completed ? "line-through" : "none"
    };
  };
  markComplete= ()=> {

    this.props.markComplete(this.props.action.id)
  }
  delete = () => {
    this.props.delete(this.props.action.id)
  }
  render() {
    const { id, body, completed, category } = this.props.action;

    return (
      <div className="card2">
        <div style={this.getStyle()}>
          <p>
            <label className="container">
              <input type="checkbox" onChange={this.markComplete} />
              <span className="checkmark"></span>
            </label>
            <b className="card1">{category}</b> {body}<i className="fas fa-arrow-circle-down"></i>
            {completed}
            {"  "}{" "}
            <button onClick={this.delete} className="button alert">
              <i className="fas fa-trash"></i>
            </button>
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

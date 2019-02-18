import React, { Component } from "react";
import PropTypes from "prop-types";

class ActionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getStyle = () => {
    return {
      background: "#ffffff",
      padding: "10px",
      borderBottom: "2px solid #000000",
      textDecoration: this.props.action.completed ? "line-through" : "none"
    };
  };
  markComplete = () => {
    this.props.markComplete(this.props.action.id);
  };
  delete = () => {
    this.props.delete(this.props.action.id);
  };
  today = () => {
    this.props.today(this.props.action.id);
  };
  future = () => {
    this.props.future(this.props.action.id);
  };
  tomorrow = () => {
    this.props.tomorrow(this.props.action.id);
  };

  render() {
    const { id, body, completed, category, priority } = this.props.action;
    console.log(this.props);
    return (
      <div className="card2">
        <div style={this.getStyle()}>
          <input type="checkbox" onChange={this.markComplete} />
          {"  "} {priority}
          <i className="fas fa-star" style={{ color: "gold" }} /> {"  "} |{" "}
          {"  "}
          <b style={{ color: "red" }}>{category}</b>
          {"  "} | {"  "}{" "}
          <span
            data-tooltip
            tabIndex="1"
            title="Attack this Today"
            onClick={this.today}
          >
            <i className="fas fa-bolt" style={{ color: "green" }} />
          </span>
          {"  "} {"  "}
          <span
            data-tooltip
            tabIndex="8"
            title="Push it to Tomorrow"
            onClick={this.tomorrow}
          >
            <i className="fas fa-clock" />
          </span>
          {"  "} {"  "}
          <span
            data-tooltip
            tabIndex="2"
            title="Plan it Later"
            onClick={this.future}
          >
            <i className="fas fa-lightbulb" style={{ color: "#7EC0EE" }} />
          </span>
          {"  "} {"  "}
          <span
            data-tooltip
            tabIndex="3"
            title="Scrap these Plans"
            onClick={this.delete}
          >
            <i className="fas fa-trash alert" style={{ color: "red" }} />
          </span>{" "}
          |{"  "} {"  "} {body}
          {completed}
          {"  "}{" "}
        </div>
      </div>
    );
  }
}
ActionItem.propTypes = {
  action: PropTypes.object.isRequired
};

export default ActionItem;

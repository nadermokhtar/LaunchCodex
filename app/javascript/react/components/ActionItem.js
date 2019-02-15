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
  today = () => {
    this.props.today(this.props.action.id)
  }
  future = () => {
    this.props.future(this.props.action.id)
  }
  render() {
    const { id, body, completed, category, priority } = this.props.action;

    return (
      <div className="card2">
        <div style={this.getStyle()}>
          <p>

            <input type="checkbox" onChange={this.markComplete} />
            {"  "}{" "}{priority}<i className="fas fa-star" style={{ color: 'gold' }}></i> {"  "} | {"  "}

            <b  style={{color: 'red'}}>{category}</b>

              {"  "} | {"  "}{body}{"  "}{" "}{"  "}

            <i className="fas fa-arrow-circle-down" onClick={this.today} style={{ color: 'green' }}></i>
            {completed}

            {"  "}{" "}
            <i className="fas fa-arrow-circle-right" onClick={this.future} style={{ color: '#7EC0EE' }} ></i>
            {"  "}{" "}
            <i className="fas fa-trash alert" onClick={this.delete} style={{ color: 'red' }} ></i>

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

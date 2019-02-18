import React, { Component } from "react";
import ActionItem from "../components/ActionItem";
import PropTypes from "prop-types";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let actions = this.props.actions.map(action => {
      return (
        <ActionItem
          key={action.id}
          action={action}
          markComplete={this.props.markComplete}
          delete={this.props.delete}
          today={this.props.today}
          future={this.props.future}
          tomorrow={this.props.tomorrow}
        />
      );
    });
    return (
      <div className="grid-x grid-margin-x ">
        <div className="cell auto">{actions}</div>
      </div>
    );
  }
}
Actions.propTypes = {
  actions: PropTypes.array.isRequired
};

export default Actions;

import React, { Component } from "react";
import PropTypes from "prop-types";

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    const { id, body, date_due } = this.props.action;

    return (
      <div className="card2 secondary">
        <div >

          {date_due}

            {"  "} | {"  "}{body}{"  "}{" "}{"  "}


        </div>
      </div>
    );
  }
}

export default EventItem;

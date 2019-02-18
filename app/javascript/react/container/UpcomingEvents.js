import React, { Component } from "react";
import EventItem from "../components/EventItem";

class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let events = this.props.events.map(event => {
      return <EventItem key={event.id} action={event} />;
    });
    return (
      <div className="cell auto">
        <h5 className="title2">Upcoming Events</h5>
        {events}
      </div>
    );
  }
}

export default UpcomingEvents;

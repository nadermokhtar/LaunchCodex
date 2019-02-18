import React, { Component } from "react";
import Actions from "./Actions";
import InputContainer from "./InputContainer";
import Time from "../components/Time";
import UpcomingEvents from "./UpcomingEvents";
import WeatherApp from "./WeatherApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 42.3601,
        lng: -71.0589
      },
      todayActions: [],
      yesterdayActions: [],
      futureActions: [],
      tomorrowActions: [],
      actions: [],
      view: "today",
      events: []
    };
    this.markComplete = this.markComplete.bind(this);
    this.addNewAction = this.addNewAction.bind(this);
    this.delete = this.delete.bind(this);
    this.future = this.future.bind(this);
    this.today = this.today.bind(this);
    this.tomorrow = this.tomorrow.bind(this);
    this.toggleNow = this.toggleNow.bind(this);
    this.toggleYesterday = this.toggleYesterday.bind(this);
    this.toggleFuture = this.toggleFuture.bind(this);
    this.toggleTomorrow = this.toggleTomorrow.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      console.log(coords);
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      });
    });
    fetch("/api/v1/actions")
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions,
          events: body.all_events,
          actions: this.state.todayActions
        });
      });
  }
  addNewAction(formPayload) {
    fetch("/api/v1/actions", {
      method: "POST",
      body: JSON.stringify(formPayload),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }

  markComplete(id) {
    fetch(`/api/v1/actions/${id}/update_completed`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }
  future(id) {
    fetch(`/api/v1/actions/${id}/update_for_future`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }
  today(id) {
    fetch(`/api/v1/actions/${id}/update_for_today`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }
  tomorrow(id) {
    fetch(`/api/v1/actions/${id}/update_for_tomorrow`, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }
  delete(id) {
    fetch(`/api/v1/actions/${id}`, {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          todayActions: body.todays_actions,
          yesterdayActions: body.yesterday_actions,
          futureActions: body.future_actions,
          tomorrowActions: body.tomorrow_actions
        });
      });
  }
  toggleNow() {
    this.setState({
      view: "today"
    });
  }
  toggleYesterday() {
    this.setState({
      view: "yesterday"
    });
  }
  toggleFuture() {
    this.setState({
      view: "future"
    });
  }
  toggleTomorrow() {
    this.setState({
      view: "tomorrow"
    });
  }

  render() {
    let visibleActions;
    if (this.state.view === "yesterday") {
      visibleActions = this.state.yesterdayActions;
    } else if (this.state.view === "future") {
      visibleActions = this.state.futureActions;
    } else if (this.state.view === "tomorrow") {
      visibleActions = this.state.tomorrowActions;
    } else {
      visibleActions = this.state.todayActions;
    }

    return (
      <div className="master  grid-x grid-margin-x align-center bac">
        <div className="cell medium-8 large-8 material ">
          <InputContainer addNewAction={this.addNewAction} />

          <button className="button " onClick={this.toggleYesterday}>
            <i className="fas fa-arrow-circle-left" /> {"  "} {"  "}Unfinished
            Yesterday
          </button>

          <button className="button" onClick={this.toggleNow}>
            {" "}
            <i className="fas fa-bolt" style={{ color: "green" }} /> {"  "}{" "}
            {"  "}Attack Today
          </button>

          <button className="button" onClick={this.toggleTomorrow}>
            {" "}
            <i className="fas fa-clock" /> {"  "} {"  "}Tomorrows strategy
          </button>
          <button className="button" onClick={this.toggleFuture}>
            <i className="fas fa-lightbulb" style={{ color: "#7EC0EE" }} />{" "}
            {"  "} {"  "}To be Planned
          </button>
          <Actions
            actions={visibleActions}
            markComplete={this.markComplete}
            delete={this.delete}
            today={this.today}
            future={this.future}
            tomorrow={this.tomorrow}
          />
        </div>

        <div
          className="cell small-hidden medium-2 large-2"
          style={{ marginTop: "20px" }}
        >
          <Time />
          <br />
          <div className="card2">
            <WeatherApp coordinates={this.state.currentLocation} />
          </div>
          <div className="card2">
            <UpcomingEvents events={this.state.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

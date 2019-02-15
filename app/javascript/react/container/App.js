import React, { Component } from "react";
import Actions from "./Actions";
import InputContainer from "./InputContainer";
import Time from "../components/Time";
import UpcomingEvents from "./UpcomingEvents"
import WeatherApp from "./WeatherApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayActions: [],
      yesterdayActions: [],
      futureActions: [],
      actions: [ ],
      events:[ ],

    };
    this.markComplete = this.markComplete.bind(this);
    this.addNewAction = this.addNewAction.bind(this);
    this.delete = this.delete.bind(this);
    this.future = this.future.bind(this)
    this.today = this.today.bind(this)
    this.toggleNow = this.toggleNow.bind(this);
    this.toggleYesterday = this.toggleYesterday.bind(this);
    this.toggleFuture = this.toggleFuture.bind(this);
  }

  componentDidMount() {
    fetch("/api/v1/actions")
      .then(response => response.json())
      .then(body => {
        this.setState({ todayActions: body.todays_actions });
        this.setState({ yesterdayActions: body.yesterday_actions });
        this.setState({ futureActions: body.future_actions });
        this.setState({ events: body.all_events });
        this.setState({
          actions: this.state.todayActions
        });
      })
  }
  addNewAction(formPayload) {
    fetch("/api/v1/actions", {
      method: "POST",
      body: JSON.stringify(formPayload),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        this.setState({ todayActions: body.todays_actions });
        this.setState({ yesterdayActions: body.yesterday_actions });
        this.setState({ futureActions: body.future_actions });
        this.setState({
          actions: this.state.todayActions
        });
      })
  }

  markComplete(id) {
    fetch(`/api/v1/actions/${id}/update_completed`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
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
          this.setState({ todayActions: body.todays_actions });
          this.setState({ yesterdayActions: body.yesterday_actions });
          this.setState({ futureActions: body.future_actions });
          this.setState({
            actions: this.state.todayActions
          });
        })
    // this.setState({
    //   actions: this.state.actions.map(action => {
    //     if (action.id === id) {
    //       action.completed = !action.completed;
    //     }
    //     return action;
    //   })
    // });
  }
  future(id) {
    fetch(`/api/v1/actions/${id}/update_for_future`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        this.setState({ todayActions: body.todays_actions });
        this.setState({ yesterdayActions: body.yesterday_actions });
        this.setState({ futureActions: body.future_actions });
        this.setState({
          actions: this.state.todayActions
        });
      })

  }
  today(id) {
    fetch(`/api/v1/actions/${id}/update_for_today`, {
      method: "PATCH",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        this.setState({ todayActions: body.todays_actions });
        this.setState({ yesterdayActions: body.yesterday_actions });
        this.setState({ futureActions: body.future_actions });
        this.setState({
          actions: this.state.todayActions
        });
      })

  }
  delete(id){
    console.log(id);
    fetch(`/api/v1/actions/${id}`, {
      method: "DELETE",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        this.setState({ todayActions: body.todays_actions });
        this.setState({ yesterdayActions: body.yesterday_actions });
        this.setState({ futureActions: body.future_actions });
        this.setState({
          actions: this.state.todayActions
        });
      })
  }
  toggleNow() {
    this.setState({
      actions: this.state.todayActions
    });
  };
  toggleYesterday() {
    this.setState({
      actions: this.state.yesterdayActions
    });
  };
  toggleFuture() {
    this.setState({
      actions: this.state.futureActions
    });
  };




  render() {
    console.log(this.state);
    return (
      <div className="grid-x grid-margin-x align-center bac">
        <div className="cell medium-8 large-8">
          <InputContainer addNewAction={this.addNewAction} />

          <button className="button" onClick={this.toggleYesterday}><i className="fas fa-arrow-circle-left"></i>Attack Yesterday</button>
          <button className="button" onClick={this.toggleNow}> <i className="fas fa-bolt"></i>Attack today</button>
          <button className="button" onClick={this.toggleFuture}><i className="fas fa-arrow-circle-right"></i>Attack the Future</button>

          <Actions
            actions={this.state.actions}
            markComplete={this.markComplete}
            delete= {
              this.delete
            }
            today={
              this.today
            }
            future={
              this.future
            }
          />
        </div>

        <div className="cell small-hidden medium-2 large-2" style={{marginTop: '20px'}}>
          <Time />
          <br />
          <div className="card2">
            <WeatherApp />
          </div>
          <div className="card2">
            <UpcomingEvents
              events={this.state.events}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

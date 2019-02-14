import React, { Component } from "react";
import Actions from "./Actions";
import InputContainer from "./InputContainer";
import Time from "../components/Time";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [ ]
    };
    this.markComplete = this.markComplete.bind(this);
    this.addNewAction = this.addNewAction.bind(this);
    this.delete = this.delete.bind(this)
  }
  componentDidMount() {
    fetch("/api/v1/actions")
      .then(response => response.json())
      .then(body => {
        let allActions = body;

        this.setState({ actions: allActions });
      });
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

        let currentactions = this.state.actions;
        this.setState({ actions: currentactions.concat(body) });
      });
  }

  markComplete(id) {
    this.setState({
      actions: this.state.actions.map(action => {
        if (action.id === id) {
          action.completed = !action.completed;
        }
        return action;
      })
    });
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
      // ,
      // 'body': JSON.stringify({
      //   'action': { 'id': id}
      // })
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
    // fetch("/api/v1/actions")
    //   .then(response => response.json())
    //   .then(body => {
    //     let allActions = body;

    //     this.setState({ actions: allActions });
    //   });


  }
  render() {
    return (
      <div className="grid-x grid-margin-x ">
        <div className="cell medium-6 large-8">
          <InputContainer addNewAction={this.addNewAction} />

          <button className="button small" toggleYesterday={this.toggleYesterday}><i className="fas fa-arrow-circle-left"></i>Yesterday</button>

          <button className="button small" toggleSomeday={this.toggleSomeday}>Maybe Someday?</button>
          <button className="button small" toggleNow={this.toggleNow}> <i className="fas fa-bolt"></i>Now?</button>
          <Actions
            actions={this.state.actions}
            markComplete={this.markComplete}
            delete= {
              this.delete
            }
          />
        </div>

        <div className="cell small-hidden medium-2 large-2">
          <Time />
          <br />
          <p className="card2">
            <img src="https://placehold.it/300x75&text=[weather widget]" />
          </p>
          <p className="card2">
            <img src="https://placehold.it/300x440&text=[Calandar widget]" />
          </p>
        </div>
      </div>
    );
  }
}

export default App;

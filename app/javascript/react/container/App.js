import React, { Component } from "react";
import Actions from "./Actions";
import InputContainer from "./InputContainer";
import Time from "../components/Time";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        {
          id: 1,
          body: "IDK task",
          category: "task",
          priority: 0,
          date_due: Date.today,
          user_id: 1
        },
        {
          id: 2,
          body: "IDK task",
          category: "task",
          priority: 0,
          date_due: Date.today,
          user_id: 1
        },
        {
          id: 3,
          body: "IDK task",
          category: "task",
          priority: 0,
          date_due: Date.today,
          user_id: 1
        },
        {
          id: 4,
          body: "Some task",
          category: "task",
          priority: 0,
          date_due: Date.today,
          user_id: 1
        },
        {
          id: 5,
          body: "IDK task",
          category: "task",
          priority: 0,
          date_due: Date.today,
          user_id: 1
        } ]
    };
    this.markComplete = this.markComplete.bind(this);
    this.addNewAction = this.addNewAction.bind(this);
  }
  componentDidMount() {
    // fetch("/api/v1/users")
    //   .then(response => response.json())
    //   .then(body => {
    //     let allActions = body.actions;
    //     this.setState({ actions: allActions });
    //   });
  }
  addNewAction(formPayload) {
    // fetch("/api/v1/actions", {
    //   method: "POST",
    //   body: JSON.stringify(formPayload)
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       let errorMessage = `${response.status} (${response.statusText})`,
    //         error = new Error(errorMessage);
    //       throw error;
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(body => {
    //     let currentactions = this.state.actions;
    //     this.setState({ actions: currentactions.concat(body) });
    //   });
    let currentactions = this.state.actions;
    this.setState({ actions: currentactions.concat(formPayload) });
  }

  markComplete(id) {
    // this.setState({
    //   actions: this.state.actions.map(action => {
    //     if (action.id === id) {
    //       action.completed = !action.completed;
    //     }
    //     return action;
    //   })
    // });
  }
  render() {
    return (
      <div className="grid-x grid-margin-x ">
        <div className="cell medium-6 large-8">
          <InputContainer addNewAction={this.addNewAction} />

          <button className="button small">Yesterday</button>

          <button className="button small">Maybe Someday?</button>

          <Actions
            actions={this.state.actions}
            markComplete={this.markComplete}
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

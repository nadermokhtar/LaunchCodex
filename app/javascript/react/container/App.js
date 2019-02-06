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
          user_id: 1,
          completed: false,
          body: "take out the trash",
          type: "task",
          due: "2/19/19",
          modifier: "*",
          task_id: 0
        },
        {
          id: 2,
          user_id: 1,
          completed: true,
          body: "Kill the monkeys",
          type: "task",
          due: "2/19/19",
          modifier: "",
          task_id: 0
        },
        {
          id: 3,
          user_id: 1,
          completed: false,
          body: "Find Megatron",
          type: "task",
          due: "2/19/19",
          modifier: "!",
          task_id: 0
        }
      ]
    };
    this.markComplete = this.markComplete.bind(this);
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
  render() {
    return (
      <div className="grid-x grid-margin-x ">
        <div className="cell medium-6 large-8">
          <InputContainer />

          <button className="button small">Yesterday</button>

          <button className="button small">Maybe Someday?</button>

          <Actions
            actions={this.state.actions}
            markComplete={this.markComplete}
          />
        </div>

        <div className="cell medium-2 large-2">
          <Time />
          <p>
            <img src="https://placehold.it/300x440&text=[weather widget]" />
          </p>
          <p>
            <img src="https://placehold.it/300x440&text=[Calandar widget]" />
          </p>
        </div>
      </div>
    );
  }
}

export default App;

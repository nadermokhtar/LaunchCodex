import React, { Component } from "react";
import Actions from "./Actions";
import InputContainer from "./InputContainer";

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
      <div className="App">
        <div className="row">
          <div className="small-6 large-2 columns">
            Navigation
            <br />
            Yesterday
            <br />
            Maybe some day?
          </div>
          <div className="small-6 large-8 columns">
            <InputContainer />
            <Actions
              actions={this.state.actions}
              markComplete={this.markComplete}
            />
          </div>
          <div className="small-12 large-2 columns">
            Side bar info(cal+weather)
          </div>
        </div>
      </div>
    );
  }
}

export default App;

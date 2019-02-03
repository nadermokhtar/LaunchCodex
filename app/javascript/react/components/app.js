import React, { Component } from "react";
import Todos from "./Todos";
import InputContainer from "./InputContainer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
          completed: false,
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
  markComplete(id) {console.log("hello");
  }
  render() {
    return (
      <div className="App">
        <InputContainer />
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

// this.setState({
//   todos: this.state.todos.map(todo => {
//     if (todo.id === id) {
//       todo.completed = !todo.completed;
//     }
//     return todo;
//   })
// });

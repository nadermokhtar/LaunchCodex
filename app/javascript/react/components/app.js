import React, {Component} from 'react'
import Todos from './Todos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id:1,
          title:'take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'Kill the monkeys',
          completed: true
        },
        {
          id: 3,
          title: 'Find Megatron',
          completed: false
        }
      ]
    }
  }
  render(){
    return (
    <div>
        <Todos todos={this.state.todos }/>
    </div>
    )
  }
}

export default App
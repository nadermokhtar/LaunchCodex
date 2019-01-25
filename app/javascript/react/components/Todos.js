import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let todos = this.props.todos.map((todo) => {
    return (<TodoItem
      key={todo.id}
      todo={todo}
      />)
    })
    return(
      <div className="row">
        <div className="small-8 small-centered columns">
        {todos}
        </div>
      </div>
    )
  }

}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
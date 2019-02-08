import React, { Component } from "react";
import PropTypes from "prop-types";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    console.log("clicked");
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div className="grid-x">
        <form className="input" onSubmit={this.onSubmit}>
          <div className="cell shrink">
            <select>
              <option value="task">Task</option>
              <option value="event">Event</option>
              <option value="note">Note</option>
            </select>
          </div>
          <div className="cell shrink">
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="cell shrink">
            <input type="date" name="date_due" />
          </div>
          <div className="cell auto">
            <input value={this.state.term} onChange={this.onChange} />
          </div>
          <div className="cell auto">
            <button className="button small">Just do it!</button>
          </div>
        </form>
      </div>
    );
  }
}
export default InputContainer;

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
      <div className="grid-x grid-margin-x">
        <div className="cell auto">
          category/Priority(1-3) /date field (on hold feature)/
          <div className="cell auto">
            <form className="input" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />

              <button className="button round">
                <i class="fas fa-pen-fancy" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default InputContainer;

import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryField from "../components/CategoryField";
import PriorityField from "../components/PriorityField";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      category: "event",
      priority: 0,
      date_due: "",
      user_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body: "",
      category: "task",
      priority: 0,
      date_due: Date.today,
      user_id: 1
    };
    this.props.addNewAction(formPayload);
    this.setState({
      body: "",
      category: "task",
      priority: 0,
      date_due: new Date(),
      user_id: 1
    });
  }
  handleCategoryChange(event) {
    console.log(event.target.value);
    this.setState({ category: event.target.value });
  }
  handlePriorityChange(event) {
    console.log(event.target.value);
    this.setState({ priority: event.target.value });
  }

  render() {
    return (
      <div className="grid-x">
        <form className="input" onSubmit={this.handleSubmit}>
          <div className="cell shrink">
            <CategoryField
              content={this.state.category}
              name="category"
              handleCategoryChange={this.handleCategoryChange}
            />
          </div>
          <div className="cell shrink">
            <PriorityField
              content={this.state.priority}
              name="priority"
              handlePriorityChange={this.handlePriorityChange}
            />
          </div>
          <DayPickerInput
            value={this.state.date_due}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
          />
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

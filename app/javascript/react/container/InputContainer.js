import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryField from "../components/CategoryField";
import PriorityField from "../components/PriorityField";
import BodyField  from "../components/BodyField"
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
      category: "task",
      priority: 0,
      date_due: undefined,
      user_id: 1,
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
      placeholder: 'To be planned'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleDayChange = this.handleDayChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body: this.state.body,
      category: this.state.category,
      priority: this.state.priority,
      date_due: this.state.date_due,
      user_id: this.state.user_id
    };
    this.props.addNewAction(formPayload);
    this.setState({
      body: "",
      category: "task",
      priority: 0,
      date_due: undefined,
      user_id: 1,
      placeholder: 'To be planned'
    });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }
  handlePriorityChange(event) {
    this.setState({ priority: event.target.value });
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }
  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      date_due: selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true
    });
  }

  render() {
    const { selectedDay, isDisabled, isEmpty } = this.state;

    return (

      <div >
        <form className=" input card2 grid-x" onSubmit={this.handleSubmit}>
          <div data-tooltip tabIndex="5" title="Action Item" className="cell shrink">
            <CategoryField
              content={this.state.category}
              name="category"
              handleCategoryChange={this.handleCategoryChange}
            />
          </div>
          <div data-tooltip tabIndex="6" title="How Important is this Action"className="cell shrink">
            <PriorityField
              content={this.state.priority}
              name="priority"
              handlePriorityChange={this.handlePriorityChange}
            />
          </div>
          <div className="cell shrink">
            <DayPickerInput style={{ height: "2.4375rem"}}
              value={selectedDay}
              onDayChange={this.handleDayChange}
              dayPickerProps={{
                selectedDays: selectedDay,
                disabledDays: {
                  before: new Date(),
                },
              }}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={this.state.placeholder}
            />
          </div>
          <div className="cell shrink">

            <BodyField value={this.state.body} handleBodyChange={this.handleBodyChange} />
          </div>
          <div className="cell shrink">
            <button className="button">Just do it!</button>
          </div>
        </form>
      </div>
    );
  }
}
export default InputContainer;

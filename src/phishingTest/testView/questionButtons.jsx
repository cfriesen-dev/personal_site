// Displays selection buttons for questions
import React from "react";
import PropTypes from "prop-types";

export default function QuestionButtons(props) {
  return props.allOptions.map((option, index) => (
    <button
      key={`${option}-${index}`}
      className="button"
      value={option}
      onClick={props.handleClick}
    >
      {option}
    </button>
  ));
}

QuestionButtons.propTypes = {
  allOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

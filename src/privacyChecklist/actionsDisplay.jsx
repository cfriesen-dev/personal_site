import React from "react";
import PropTypes from "prop-types";

export default function ActionsDisplay(props) {
  return (
    <div>
      <p>{props.section.description}</p>
      <header>Actions:</header>
      <ol>
        {props.section.actions.map((action) => (
          <li id="action" key={action.title}>
            {action.title}
            <p>{action.condition}</p>
            <header>Steps:</header>
            <ol id="action-steps">
              {action.steps.map((step, index) => (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      id={`${step}-${index}`}
                      name={step}
                    />
                    {step}
                  </label>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}

ActionsDisplay.propTypes = {
  section: PropTypes.shape({
    category: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

import React from "react";
import PropTypes from "prop-types";

export default function ActionList(props) {
  return (
    <ol id="action_list">
      {props.check_list.map((area) => (
        <li id="area" key={area.category}>
          {area.category}
          <p>{area.description}</p>
          <header>Actions:</header>
          <ol>
            {area.actions.map((action) => (
              <li id="action" key={action.title}>
                {action.title}
                <p>{action.condition}</p>
                <header>Steps:</header>
                <ol id="action-steps">
                  {action.steps.map((step, index) => (
                    <li>
                      <input
                        type="checkbox"
                        id={`${step}-${index}`}
                        name={step}
                      />
                      <label for={`${step}-${index}`}>{step}</label>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

ActionList.propTypes = {
  check_list: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  ).isRequired,
};

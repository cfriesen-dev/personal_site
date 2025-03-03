import React from "react";
import PropTypes from "prop-types";

export default function ActionList(props) {
  return (
    <ol classname="action_list">
      {props.check_list.map((area) => (
        <li className="area" key={area.category}>
          {area.category}
          <p>{area.description}</p>
          <h4>Actions:</h4>
          <ol>
            {area.actions.map((action) => (
              <li classname="action" key={action.title}>
                {action.title}
                <p>{action.condition}</p>
                <h4>Steps:</h4>
                <ol>
                  {action.steps.map((step, index) => (
                    <li classname="action-steps">
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

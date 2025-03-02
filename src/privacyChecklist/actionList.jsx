import React from "react";
import PropTypes from "prop-types";

export default function ActionList(props) {
  return (
    <ol>
      {props.check_list.map((area) => (
        <li className="area" key={area.category}>
          {area.category}
          <p>{area.description}</p>
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

import React from "react";
import PropTypes from "prop-types";
import ActionsDisplay from "./actionsDisplay";

export default function ActionList(props) {
  return (
    <ol id="action_list">
      {props.check_list.map((section) => (
        <li key={section.category}>
          <header id="category">{section.category}</header>
          <ActionsDisplay section={section} />
        </li>
      ))}
    </ol>
  );
}

ActionList.propTypes = {
  check_list: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  ).isRequired,
};

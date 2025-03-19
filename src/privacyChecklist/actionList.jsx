import React, { useState } from "react";
import PropTypes from "prop-types";
import ActionsDisplay from "./actionsDisplay";

export default function ActionList(props) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (category) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <ol id="action_list">
      {props.check_list.map((section) => (
        <li key={section.category}>
          <div className="category-header">
            <button
              className="toggle-button"
              onClick={() => toggleSection(section.category)}
              aria-expanded={expandedSections[section.category]}
              aria-controls={`section-${section.category}`}
            >
              <span
                className={`arrow ${expandedSections[section.category] ? "expanded" : "collapsed"}`}
              ></span>
              <header id="category">{section.category}</header>
            </button>
          </div>

          {expandedSections[section.category] && (
            <div id={`section-${section.category}`}>
              <ActionsDisplay section={section} />
            </div>
          )}
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

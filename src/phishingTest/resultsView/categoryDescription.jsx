import React from "react";
import * as Constants from "../utils/constants";
import PropTypes from "prop-types";


export default function CategoryDescription(props) {
    if (typeof props.category === 'undefined') return null;

    let category = Constants.PHISHING_CATEGORIES[props.category];

    return (
        <p id="phishing-category">
            <span id="category-name">{ category.name }</span>: { category.description }
        </p>
    );
}

CategoryDescription.propTypes = {
    category: PropTypes.string.isRequired,
}
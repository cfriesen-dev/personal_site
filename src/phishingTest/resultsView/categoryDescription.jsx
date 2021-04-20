import React from "react";
import * as Constants from "../utils/constants";


export default function CategoryDescription(props) {
    if (typeof props.category === 'undefined') return null;

    let category = Constants.PHISHING_CATEGORIES[props.category];

    return (
        <p id="phishing-category">
            <span id="category-name">{ category.name }</span>: { category.description }
        </p>
    );
}
import React from "react";
import * as Constants from "../utils/constants";


export default function CategoryDescription(props) {
    if (typeof props.category === 'undefined') return null;

    return (
        <p className="phishing-category">
            { Constants.PHISHING_CATEGORIES[props.category].name }
        </p>
    );
}
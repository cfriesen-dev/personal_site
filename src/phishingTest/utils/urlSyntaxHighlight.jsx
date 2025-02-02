import * as Constants from "./constants";
import React from "react";
import PropTypes from "prop-types";

const TLD_JS = require("tldjs");

function escapeString(inputString) {
  return inputString ? inputString.replace(/[/+.?]/g, "\\$&") : inputString;
}

function byField(urlString, field) {
  let url;
  if (Constants.TLD_JS_FIELDS.includes(field)) {
    url = TLD_JS.parse(urlString);
  } else {
    url = new URL(urlString);
  }

  return url[field];
}

export default function UrlSyntaxHighlight(props) {
  const highlightClassName = props.isIncorrect
    ? Constants.INCORRECT_CLASS
    : Constants.CORRECT_CLASS;

  let target = props.target ?? byField(props.urlString, props.field);
  if (!target) {
    return props.urlString;
  }

  const escapedField = escapeString(target);
  const pattern = new RegExp(`(${escapedField})`);
  const segments = props.urlString.split(pattern);

  return segments.map((segment, index) =>
    segment.match(pattern) ? (
      <mark key={index} className={highlightClassName}>
        {target}
      </mark>
    ) : (
      segment
    ),
  );
}

UrlSyntaxHighlight.propTypes = {
  urlString: PropTypes.string.isRequired,
  field: PropTypes.string,
  isIncorrect: PropTypes.bool,
  target: PropTypes.string,
};

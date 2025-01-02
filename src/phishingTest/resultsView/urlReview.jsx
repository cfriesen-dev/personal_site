import React from "react";
import PropTypes from "prop-types";
import * as Constants from "../utils/constants";
import UrlStructure from "./urlStructure";
import UrlSyntaxHighlight from "../utils/urlSyntaxHighlight";

export default class UrlReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      field: "",
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(field, e) {
    e.preventDefault();

    e.target.style.color = "#77bfa3";
    e.target.style.fontWeight = "bold";
    this.setState({
      field: field,
    });
  }

  handleMouseLeave(field, e) {
    e.preventDefault();

    e.target.style.color = "";
    e.target.style.fontWeight = "normal";
    this.setState({
      field: "",
    });
  }

  render() {
    let className = this.props.expanded
      ? Constants.EXPANDED_CLASS
      : Constants.CONTRACTED_CLASS;

    return (
      <div id="url-review" className={className}>
        <p>
          Hover over the structure below to see which sections
          <br /> correspond in the example urls:
        </p>
        <UrlStructure
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
        <div id="example-urls">
          <ul>
            <li>
              <UrlSyntaxHighlight
                urlString={
                  "https://chris:pass@groups.inf.ed.ac.uk/tulips/papers/albakry2020.pdf"
                }
                field={this.state.field}
              />
            </li>
            <li>
              <UrlSyntaxHighlight
                urlString={
                  "https://www.amazon.co.uk:80/gp/product/B010UO40MO/ref=ox_sc_act_title_1?smid=A3P5ROKL5A1OLE&psc=1"
                }
                field={this.state.field}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

UrlReview.propTypes = {
  expanded: PropTypes.bool,
};

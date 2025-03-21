import React from "react";
import PropTypes from "prop-types";
import UrlReview from "./urlReview";
import AnswerList from "./answerList";

export default class PhishingResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlReviewExpanded: false,
    };
    this.toggleUrlReview = this.toggleUrlReview.bind(this);
  }

  toggleUrlReview() {
    this.setState({
      urlReviewExpanded: !this.state.urlReviewExpanded,
    });
  }

  render() {
    const score = this.props.questionSet.length - this.props.incorrect.length;

    return (
      <main className="container">
        <UrlReview expanded={this.state.urlReviewExpanded} />
        <div className="column-container">
          <section className="column left-column">
            <div id="score-box">
              {score + "/" + this.props.questionSet.length}
            </div>
            <br />
            <button
              className="button vertical-buttons"
              onClick={this.toggleUrlReview}
              aria-expanded={this.state.urlReviewExpanded}
              aria-controls="url-review"
            >
              Review URL structure
            </button>
            <button
              className="button vertical-buttons"
              onClick={() => this.props.changeQuestionSet()}
            >
              {this.props.advanced ? "Try Again" : "Advanced Questions"}
            </button>
          </section>

          <section className="column right-column">
            <AnswerList
              questionSet={this.props.questionSet}
              incorrect={this.props.incorrect}
            />
          </section>
        </div>
      </main>
    );
  }
}

PhishingResults.propTypes = {
  incorrect: PropTypes.arrayOf(PropTypes.number).isRequired,
  questionSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      destinations: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeQuestionSet: PropTypes.func.isRequired,
};

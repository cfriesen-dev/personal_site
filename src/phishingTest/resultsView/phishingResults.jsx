import React from "react";
import PropTypes from "prop-types";
import UrlReview from "./UrlReview";
import AnswerList from "./answerList";

export default class PhishingResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlReviewExpanded: false
        }
        this.toggleUrlReview = this.toggleUrlReview.bind(this);
    }

    toggleUrlReview() {
        this.setState({
            urlReviewExpanded: !this.state.urlReviewExpanded
        })
    }

    render() {
        const score = this.props.questionSet.length - this.props.incorrect.length;

        return (
            <div className="column-container">
                <UrlReview
                    expanded={ this.state.urlReviewExpanded } />
                <div className="column left-column">
                    <div id="score-box">
                        { score + "/" + this.props.questionSet.length }
                    </div>
                    <br />
                    <button
                        className="button vertical-buttons"
                        onClick={ this.toggleUrlReview }>
                        Review URL structure
                    </button>
                    <button
                        className="button vertical-buttons"
                        onClick={ () => this.props.changeQuestionSet() } >
                        { this.props.advanced ? "Try Again" : "Advanced Questions" }
                    </button>
                </div>

                <div className="column right-column">
                    <AnswerList
                        questionSet={ this.props.questionSet }
                        incorrect={ this.props.incorrect } />
                </div>
            </div>
        );
    }
}

PhishingResults.propTypes = {
    incorrect: PropTypes.arrayOf(PropTypes.number).isRequired,
    questionSet: PropTypes.array.isRequired,
    changeQuestionSet: PropTypes.func.isRequired,
}
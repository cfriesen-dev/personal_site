import React from "react";
import * as Constants from "../utils/constants";
import QuestionButtons from "./questionButtons";
import ProgressBar from "./progressBar";
import PropTypes from "prop-types";


// Shuffles an array randomly
// Inefficient at large sizes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


export default class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        const isCorrectAnswer = e.target.value === this.props.question.answer;
        this.props.completeQuestion(isCorrectAnswer);
    }

    render() {
        let allDestinations = this.props.question.destinations.concat(Constants.DEFAULT_DESTINATIONS);
        shuffle(allDestinations);

        return (
            <div className="banner">
                <h1 id="question" className="banner-title">{ this.props.question.url }</h1>
                <h4>If the above address were a link where would it go?</h4>
                <div>
                    <QuestionButtons
                        allOptions={ allDestinations }
                        handleClick={ this.handleClick }
                    />
                </div>
                <ProgressBar
                    width={ "100%" }
                    progress={ (this.props.question.id / this.props.totalQuestions) * 100 }
                />
            </div>
        )
    }
}

QuestionDisplay.propTypes = {
    question: PropTypes.object.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    completeQuestion: PropTypes.func.isRequired
}
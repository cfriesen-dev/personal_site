import React from "react";
import NavMenu from "../nav/nav.jsx";
import "./phishingTest.css";
import "../App.css";
import ResearchFooter from "./testView/researchFooter.jsx";
import PhishingResults from "./resultsView/phishingResults";
import QuestionDisplay from "./testView/questionDisplay.jsx";
import WarningFooter from "./testView/warningFooter.jsx";
import PropTypes from "prop-types";

const QUESTION_DATA = require("./data/phishingTestData.json");

function fetchRandomSet(questionData, advanced) {
  let sets = questionData.standard;
  if (advanced) {
    sets = questionData.advanced;
  }
  let setId = Math.floor(Math.random() * sets.length);
  return sets[setId];
}

export default class PhishingTest extends React.Component {
  constructor(props) {
    super(props);

    const advanced =
      this.props.advanced === undefined ? false : this.props.advanced;

    const questionSet =
      this.props.questionSet === undefined
        ? fetchRandomSet(QUESTION_DATA, advanced)
        : this.props.questionSet;

    let questionId = 0;
    if (this.props.questionId && this.props.questionId <= questionSet.length) {
      questionId = this.props.questionId;
    }

    this.state = {
      questionId: questionId,
      incorrect: [],
      questionSet: questionSet,
      advanced: advanced,
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.changeQuestionSet = this.changeQuestionSet.bind(this);
  }

  handleAnswer(isCorrectAnswer) {
    const newQuestionId = this.state.questionId + 1;
    let newIncorrect = this.state.incorrect;

    if (!isCorrectAnswer) {
      newIncorrect.push(this.state.questionId);
    }

    this.setState({
      incorrect: newIncorrect,
      questionId: newQuestionId,
    });
  }

  changeQuestionSet() {
    this.setState({
      questionId: 0,
      incorrect: [],
      questionSet: fetchRandomSet(QUESTION_DATA, true),
      advanced: true,
    });
  }

  render() {
    const resultDisplayed =
      this.state.questionId === this.state.questionSet.length;
    const question = this.state.questionSet[this.state.questionId];

    return (
      <div>
        <NavMenu />
        <section id="phishingTest-container">
          {resultDisplayed ? (
            <PhishingResults
              incorrect={this.state.incorrect}
              questionSet={this.state.questionSet}
              changeQuestionSet={this.changeQuestionSet}
              advanced={this.state.advanced}
            />
          ) : (
            <QuestionDisplay
              question={question}
              totalQuestions={this.state.questionSet.length}
              completeQuestion={this.handleAnswer}
            />
          )}
          {this.state.advanced ? <WarningFooter /> : <ResearchFooter />}
        </section>
      </div>
    );
  }
}

PhishingTest.propTypes = {
  advanced: PropTypes.bool,
  questionSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      destinations: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ),
  questionId: PropTypes.number,
};

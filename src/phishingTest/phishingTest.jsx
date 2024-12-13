import React from "react";
import NavMenu from "../nav/nav.jsx";
import "./phishingTest.css";
import "../App.css";
import ResearchFooter from "./testView/researchFooter.jsx";
import PhishingResults from "./resultsView/phishingResults";
import QuestionDisplay from "./testView/questionDisplay.jsx";
import WarningFooter from "./testView/warningFooter.jsx";


const QUESTION_DATA = require("./data/phishingTestData.json");

function fetchRandomSet(sets) {
	let setId = Math.floor(Math.random() * sets.length);
	return sets[setId]
}

export default class PhishingTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questionId: 0,
			incorrect: [],
			questionSet: fetchRandomSet(QUESTION_DATA.standard),
			advanced: false
		}
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
			questionId: newQuestionId
		});
	}

	changeQuestionSet() {
		this.setState({
			questionId: 0,
			incorrect: [],
			questionSet: fetchRandomSet(QUESTION_DATA.advanced),
			advanced: true
		});
	}

	render() {
  		const question = this.state.questionSet[this.state.questionId];
  		const resultDisplayed = this.state.questionId === this.state.questionSet.length;

	    return (
	      <div>
	        <NavMenu />
	        <div id='phishingTest-container'>
				{ resultDisplayed ?
					<PhishingResults
						incorrect={ this.state.incorrect }
						questionSet={ this.state.questionSet }
						changeQuestionSet={ this.changeQuestionSet }
						advanced={ this.state.advanced }
					/> :
					<QuestionDisplay
						question={ question }
						completeQuestion={ this.handleAnswer }
					/>
				}
				{ this.state.advanced ? <WarningFooter /> : <ResearchFooter /> }
	        </div>
	      </div>
	    )
  	}
}
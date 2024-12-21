import React from "react";
import UrlSyntaxHighlight from "../utils/UrlSyntaxHighlight";
import CategoryDescription from "./categoryDescription";
import PropTypes from "prop-types";


export default function AnswerList(props) {
    return (
        <ol>
            { props.questionSet.map((question) =>
                <li
                    className="url"
                    key={ question.id } >
                    <UrlSyntaxHighlight
                        urlString={ question.url }
                        isIncorrect={ props.incorrect.includes(question.id) }
                        field="domain"
                        target={ question.target }/>
                    <CategoryDescription
                        category={ question.category } />
                </li>
            ) }
        </ol>
    );
}

AnswerList.propTypes = {
    questionSet: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        destinations: PropTypes.arrayOf(PropTypes.string).isRequired,
        answer: PropTypes.string.isRequired,
      })).isRequired,
      incorrect: PropTypes.arrayOf(PropTypes.number)
}

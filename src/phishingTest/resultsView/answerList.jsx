import React from "react";
import UrlSyntaxHighlight from "../utils/UrlSyntaxHighlight";
import CategoryDescription from "./categoryDescription";


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

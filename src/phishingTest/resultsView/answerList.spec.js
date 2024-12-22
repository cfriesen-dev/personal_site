import AnswerList from "./answerList";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    render(<AnswerList 
        questionSet={
            [{
                id: 0,
                url: "https://microsoft.com",
                destinations: [
                    "Mobile's website", "Google's website"
                ],
                answer: "A website not listed"
            },{
                id: 1,
                url: "https://google.com",
                destinations: [
                    "Google's website", "Profile's website"
                ],
                answer: "Google's website"
            }]
        }
        incorrect={ [] }/>);
});

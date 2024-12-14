import QuestionDisplay from "./questionDisplay";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    let onCompleteMock = jest.fn();
    render(<QuestionDisplay 
        question={
            {
                id: 0,
                url: "https://microsoft.com",
                destinations: [
                    "Mobile's website", "Google's website"
                ],
                answer: "A website not listed"
            }
        }
        completeQuestion={ onCompleteMock }/>);
});

it('test data always displays valid answer', () => {
    let onCompleteMock = jest.fn();

    let question_data = require("../data/phishingTestData.json");
    // Check both standard and advanced sets
    for (let i = 0; i < question_data.length; i++) {
        // Check each set option
        for (let j = 0; j < question_data[i].length; j++) {
            let question = question_data[i][j]
            render(<QuestionDisplay 
                question={ question }
                completeQuestion={ onCompleteMock }
            />)

            expect(screen.getByRole('button', {
                name: new RegExp(question.answer, "i")
              })).toBeInTheDocument()
        }
    }
})
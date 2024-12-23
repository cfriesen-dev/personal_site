import UrlSyntaxHighlight from "./urlSyntaxHighlight";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing with field', () => {
    render(<UrlSyntaxHighlight
        field={ "protocol" }
        urlString={ "https://cfriesen.dev" }
        isIncorrect={ false }/>);
});

it('renders without crashing with target', () => {
    render(<UrlSyntaxHighlight
        target={ "https://" }
        urlString={ "https://cfriesen.dev" }
        isIncorrect={ false }/>);
});



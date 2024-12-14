import PhishingTest from "./phishingTest";
import { HashRouter } from "react-router-dom";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    render(<PhishingTest />, {wrapper: HashRouter});
});
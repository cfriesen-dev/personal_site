import PhishingTest from "./phishingTest";
import { HashRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
    render(<PhishingTest />, {wrapper: HashRouter});
});

it('renders the correct footer', () => {
    render(<PhishingTest />, {wrapper: HashRouter});
    expect(screen.getByText(/TULiPS Research Group/i)).toBeInTheDocument()
});
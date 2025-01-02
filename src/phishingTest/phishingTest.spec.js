import PhishingTest from "./phishingTest";
import { HashRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  render(<PhishingTest />, { wrapper: HashRouter });
});

it("renders the research footer", () => {
  render(<PhishingTest advanced={false} />, { wrapper: HashRouter });
  expect(screen.getByText(/TULiPS Research Group/i)).toBeInTheDocument();
});

it("renders the warning footer", () => {
  render(<PhishingTest advanced />, { wrapper: HashRouter });
  expect(
    screen.getByText(/Do not navigate to any of the question link/i),
  ).toBeInTheDocument();
});

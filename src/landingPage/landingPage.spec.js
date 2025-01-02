import LandingPage from "./landingPage";
import { HashRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  render(<LandingPage />, { wrapper: HashRouter });
});

it("links to topic pages", async () => {
  render(<LandingPage />, { wrapper: HashRouter });

  expect(screen.getByText(/Phishing/i)).toBeInTheDocument();
  expect(screen.getByText(/Fingerprinting/i)).toBeInTheDocument();
  expect(screen.getByText(/Anonymity/i)).toBeInTheDocument();
});

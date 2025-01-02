import NavMenu from "./nav";
import { HashRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  render(<NavMenu />, { wrapper: HashRouter });
});

it("links to topic pages", async () => {
  render(<NavMenu />, { wrapper: HashRouter });

  expect(screen.getByText(/Phishing/i)).toBeInTheDocument();
  expect(screen.getByText(/Fingerprinting/i)).toBeInTheDocument();
  expect(screen.getByText(/Anonymity/i)).toBeInTheDocument();
});

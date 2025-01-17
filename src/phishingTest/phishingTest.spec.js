import PhishingTest from "./phishingTest";
import { HashRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  render(<PhishingTest />, { wrapper: HashRouter });
});

it("allows you to set the questionSet", () => {
  const QUESTION_DATA = require("./data/phishingTestData.json");

  render(<PhishingTest questionSet={QUESTION_DATA.standard[0]} />, {
    wrapper: HashRouter,
  });
  let question = QUESTION_DATA.standard[0][0];
  expect(screen.getByText(new RegExp(question.url, "i"))).toBeInTheDocument();
});

it("allows you to set the questionId", () => {
  const QUESTION_DATA = require("./data/phishingTestData.json");

  const questionId = 3;
  render(
    <PhishingTest
      questionSet={QUESTION_DATA.standard[0]}
      questionId={questionId}
    />,
    {
      wrapper: HashRouter,
    },
  );
  let question = QUESTION_DATA.standard[0][questionId];
  expect(screen.getByText(new RegExp(question.url, "i"))).toBeInTheDocument();
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

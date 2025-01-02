import AnswerList from "./answerList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  render(
    <AnswerList
      questionSet={[
        {
          id: 0,
          url: "https://microsoft.com",
          destinations: ["Mobile's website", "Google's website"],
          answer: "A website not listed",
        },
        {
          id: 1,
          url: "https://google.com",
          destinations: ["Google's website", "Profile's website"],
          answer: "Google's website",
        },
      ]}
      incorrect={[]}
    />,
  );
});

it("includes category if present", () => {
  render(
    <AnswerList
      questionSet={[
        {
          id: 2,
          url: "https://twittter.com",
          category: 1,
          target: "ttt",
          destinations: ["Twitter's Website", "Mobile's website"],
          answer: "A website not listed",
        },
      ]}
      incorrect={[1]}
    />,
  );

  expect(screen.getByText(/Misspelling/i)).toBeInTheDocument();
});

it("excludes category if not present", () => {
  render(
    <AnswerList
      questionSet={[
        {
          id: 2,
          url: "https://twittter.com",
          target: "ttt",
          destinations: ["Twitter's Website", "Mobile's website"],
          answer: "A website not listed",
        },
      ]}
      incorrect={[1]}
    />,
  );

  expect(screen.queryByText(/Misspelling/i)).not.toBeInTheDocument();
});

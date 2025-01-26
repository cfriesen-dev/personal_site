import PhishingResults from "./phishingResults";
import { HashRouter } from "react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  let mockChangeSet = jest.fn();
  render(
    <PhishingResults
      incorrect={[1]}
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
      changeQuestionSet={mockChangeSet}
    />,
    { wrapper: HashRouter },
  );
});

it("responds to change question set", () => {
  let mockChangeSet = jest.fn();

  render(
    <PhishingResults
      incorrect={[1]}
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
      changeQuestionSet={mockChangeSet}
    />,
    { wrapper: HashRouter },
  );

  const button = screen.getByRole("button", { name: /Advanced Questions/i });
  fireEvent.click(button);

  expect(mockChangeSet).toHaveBeenCalled();
});

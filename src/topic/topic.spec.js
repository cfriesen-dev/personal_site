import { render, screen } from "@testing-library/react";
import Topic from "./topic";
import { HashRouter } from "react-router";
import "@testing-library/jest-dom";

it("renders all topics without crashing", () => {
  let TOPIC_DATA = require("./topics.json");

  for (let i = 0; i < TOPIC_DATA.topics.length; i++) {
    render(<Topic topic={TOPIC_DATA.topics[i].name} />, {
      wrapper: HashRouter,
    });
  }
});

it("renders the appropriate topic content", () => {
  render(<Topic topic={"Phishing"} />, { wrapper: HashRouter });
  expect(
    screen.getByText(/Phishing is the attempt to gain sensitive information/i),
  ).toBeInTheDocument();
});

it("renders multiple buttons in list", () => {
  render(<Topic topic={"Phishing"} />, { wrapper: HashRouter });
  expect(screen.getByText(/Try the Phishing Test/i)).toBeInTheDocument();
  expect(screen.getByText(/Skip to advanced level/i)).toBeInTheDocument();
});

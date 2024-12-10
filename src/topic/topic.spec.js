import { render } from '@testing-library/react'
import Topic from './topic'
import { HashRouter } from "react-router-dom";

it('renders all topics without crashing', () => {
    let TOPIC_DATA = require("./topics.json");

    for (let i = 0; i < TOPIC_DATA.topics.length; i++) {
        render(<Topic topic={TOPIC_DATA.topics[i].name} />, {wrapper: HashRouter});
    }
  });
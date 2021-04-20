import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LandingPage from './landingPage/landingPage.jsx';
import PhishingTest from './phishingTest/phishingTest';
import Topic from './topic/topic'


export default function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              component={ LandingPage }
            />
            <Route
              exact path="/phishing"
              render={ (props) => <Topic {...props} topic={'Phishing'} /> }
            />
            <Route
              exact path="/phishingTest"
              component={ PhishingTest }
            />
            <Route
              exact path="/fingerprinting"
              render={ (props) => <Topic {...props} topic={'Fingerprinting'} /> }
            />
            <Route
                  exact path="/anonymity"
                  render={ (props) => <Topic {...props} topic={'Anonymity'} /> }
            />
          </Switch>
        </div>
    </BrowserRouter>
  );
}
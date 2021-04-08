import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LandingPage from './landingPage/landingPage.jsx';
import PhishingTest from './phishingTest/phishingTest.jsx';


export default function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              component={LandingPage}
            />
            <Route
              exact path="/phishingTest"
              component={PhishingTest}
            />
          </Switch>
        </div>
    </BrowserRouter>
  );
}
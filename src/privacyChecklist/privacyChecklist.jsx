import React from "react";
import ActionList from "./actionList";
import NavMenu from "../nav/nav.jsx";
import "./privacyChecklist.css";

const CHECKLIST_DATA = require("./checklist.json");

export default class PrivacyChecklist extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        <section id="privacy-checklist-container">
          <main className="container">
            <div className="column-container">
              <section className="column left-column">
                <button className="button vertical-buttons">
                  Sign up for weekly email prompts
                </button>
              </section>

              <section className="column right-column">
                <ActionList check_list={CHECKLIST_DATA.standard} />
              </section>
            </div>
          </main>
        </section>
      </div>
    );
  }
}

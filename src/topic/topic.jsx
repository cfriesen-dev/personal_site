import React from 'react';
import parse from 'html-react-parser';
import NavMenu from '../nav/nav';
import './topic.css'
import {Link} from "react-router-dom";


const TOPIC_DATA = require("./topics.json");

class Topic extends React.Component {
    constructor(props) {
        super(props);

        let topicData;
        for (let i = 0; i < TOPIC_DATA.topics.length; i++) {
            if (this.props.topic === TOPIC_DATA.topics[i].name) {
                topicData = TOPIC_DATA.topics[i];
            }
        }

        this.state = {
            topic: this.props.topic,
            data: topicData
        }

        this.updateTopicData = this.updateTopicData.bind(this);
        this.openDocument = this.openDocument.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    updateTopicData(props) {
        let topicData;
        for (let i = 0; i < TOPIC_DATA.topics.length; i++) {
            if (this.props.topic === TOPIC_DATA.topics[i].name) {
                topicData = TOPIC_DATA.topics[i];
            }
        }

        this.setState({
            topic: this.props.topic,
            data: topicData
        });
    }

    openDocument() {
        console.log("made it to OpenDocument");
        if (this.state.data.documentName) {

        }
    }

    redirect() {
        console.log("made it to redirect");
    }

    render() {
        if (this.props.topic !== this.state.topic) {
            this.updateTopicData();
        }

        return (
            <div>
                <NavMenu />
                <div id="topic-container" className="column-container">
                    <h1 id="topic-name" className="banner-title">{ this.state.data.name }</h1>
                    <div className="column left-column">
                        {this.state.data.documentName &&
                            <button
                                className="button vertical-buttons"
                                onClick={this.openDocument()}>
                                View {this.state.data.documentName }
                            </button>
                        }
                        { this.state.data.linkAddress &&
                            <Link to={ this.state.data.linkAddress } className="button vertical-buttons">
                                {this.state.data.linkName}
                            </Link>
                        }
                    </div>
                    <div className="column right-column">
                        { parse(this.state.data.description) }
                    </div>
                </div>
            </div>

        )
    }

}

export default Topic;
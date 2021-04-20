import React from 'react';
import parse from 'html-react-parser';
import NavMenu from '../nav/nav';
import './topic.css'
import {Link} from 'react-router-dom';


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

    render() {
        if (this.props.topic !== this.state.topic) {
            this.updateTopicData();
        }

        let data = this.state.data;

        return (
            <div>
                <NavMenu />
                <div id="topic-container" className="column-container">
                    <h1 id="topic-name" className="banner-title">{ data.name }</h1>
                    <div className="column left-column">
                        { data.documentName &&
                            <a
                                href={ require('./../documents/fingerprintingLiteratureReview.pdf').default }
                                target='_blank'
                                rel='noopener noreferrer'
                                className="button vertical-buttons">
                                View { data.documentName }
                            </a>
                        }
                        { data.linkAddress &&
                            <Link to={ data.linkAddress } className="button vertical-buttons">
                                { data.linkName }
                            </Link>
                        }
                    </div>
                    <div className="column right-column">
                        { parse(data.description) }
                    </div>
                </div>
            </div>

        )
    }

}

export default Topic;
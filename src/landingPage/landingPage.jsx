import React from 'react';
import { Link } from "react-router-dom";
import './landingPage.css';
import '../App.css'

class LandingPage extends React.Component {
	render() {
		return (
			<div id='title-banner' className="banner">
				<h1 className="banner-title">Chris Friesen</h1>
				<h4>Collection of dabbles others might find useful</h4>
				<nav>
					<ul className='nav'>
						<li className='link-underline'><Link to='/phishingTest'>Phishing Test</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default LandingPage;
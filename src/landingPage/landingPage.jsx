import React from 'react';
import { Link } from "react-router-dom";
import './landingPage.css';
import '../App.css'


class LandingPage extends React.Component {
	render() {
		return (
			<div id='title' className="banner">

				<h1 className="banner-title">Chris Friesen</h1>
				<h4>
					<p>Welcome to my little corner of the internet. I'm an early stage cyber professional completing
					my MSc in Cyber Security, Privacy, and Trust at the University of Edinburgh. Find me on&nbsp;
						<a href='https://github.com/cfriesen-dev'>Github</a>&nbsp;and&nbsp;
						<a href=''>LinkedIn</a>
					</p>
					<p>Here are some of my dabbles others might find interesting:</p></h4>

				<nav>
					<ul className='nav'>
						<li className='link-underline'><Link to='/phishing'>Phishing</Link></li>
						<li className='link-underline'><Link to='/fingerprinting'>Fingerprinting</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default LandingPage;
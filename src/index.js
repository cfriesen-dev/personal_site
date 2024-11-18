import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import LandingPage from './landingPage/landingPage';
import PhishingTest from './phishingTest/phishingTest';
import Topic from './topic/topic'


const router = createHashRouter([{
	path: "/",
	element: <LandingPage />,
	errorElement: <ErrorPage />,
},{
	path: "/phishing",
	element: <Topic topic={'Phishing'} />,
	errorElement: <ErrorPage />,
},
{
	path: "/phishingTest",
	element: <PhishingTest />,
	errorElement: <ErrorPage />,
},
{
	path: "/fingerprinting",
	element: <Topic topic={'Fingerprinting'} />,
	errorElement: <ErrorPage />,
},
{
	path: "/anonymity",
	element: <Topic topic={'Anonymity'} />,
	errorElement: <ErrorPage />,
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>);

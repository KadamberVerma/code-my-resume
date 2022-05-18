import React from 'react';
import ReactDom from 'react-dom';
import './bootstrap.min.css';
import './styles.css';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDom.render(
	<Auth0Provider
		domain={DOMAIN}
		clientId={CLIENT_ID}
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.querySelector('#root')
);

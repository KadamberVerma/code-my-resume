import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Login from './Login';
import Logout from './Logout';

const clientId =
	'73650088333-h0r6uc9516iap9kr30l51phtvem4k36l.apps.googleusercontent.com';

const Signin = () => {
	useEffect(() => {
		const start = () => {
			gapi.client.init({
				clientId: clientId,
				scope: '',
			});
		};

		gapi.load(`client:auth2`, start);
	});

	return (
		<div>
			<Login />
			<Logout />
		</div>
	);
};

export default Signin;

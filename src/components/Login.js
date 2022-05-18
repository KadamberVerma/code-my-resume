import React from 'react';
import { Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
	const { isLoading, error } = useAuth0();

	return (
		<Container>
			<h1>Auth0 Login</h1>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading...</p>}
			{!error && !isLoading && (
				<>
					<LoginButton />
					<LogoutButton />
					<Profile />
				</>
			)}
		</Container>
	);
};

export default Login;

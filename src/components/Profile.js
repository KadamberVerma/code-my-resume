import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Image, Spinner } from 'react-bootstrap';

const Profile = () => {
	const { user, isLoading, error } = useAuth0();

	return (
		<>
			{error && <p>Authentication Error</p>}
			<>
				{!error && isLoading && (
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
				{!error && !isLoading && (
					<Container>
						{user?.picture && (
							<Image src={user.picture} alt={user?.name} />
						)}
						<h2>{user?.name}</h2>
						<ul>
							{Object.keys(user).map((objKey, i) => (
								<li key={i}>
									{objKey}: {user[objKey]}
								</li>
							))}
						</ul>
					</Container>
				)}
			</>
		</>
	);
};

export default Profile;

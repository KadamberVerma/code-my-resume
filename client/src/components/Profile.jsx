import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
	Container,
	Image,
	ListGroup,
	Spinner,
	Row,
	Col,
} from 'react-bootstrap';

const Profile = () => {
	const { user, isLoading, error } = useAuth0();

	return (
		<Container className="my-4">
			<Row>
				<h1 className="mb-4">User Profile</h1>
			</Row>
			{error && <p>Authentication Error</p>}
			<>
				{!error && isLoading && (
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
				{!error && !isLoading && (
					<Row>
						<Col>
							{user?.picture && (
								<Image
									className="rounded"
									src={user.picture}
									alt={user?.name}
								/>
							)}
						</Col>
						<Col>
							<ListGroup variant="flush">
								{user.sub.includes('google') && (
									<>
										<ListGroup.Item>
											Name: {user.name}
										</ListGroup.Item>
										<ListGroup.Item>
											Nickname: {user.nickname}
										</ListGroup.Item>
										<ListGroup.Item>
											Email: {user.email}
										</ListGroup.Item>
										<ListGroup.Item>
											Logged In using: Google-OAuth2
										</ListGroup.Item>
									</>
								)}

								{user.sub.includes('github') && (
									<>
										<ListGroup.Item>
											Name: {user.name}
										</ListGroup.Item>
										<ListGroup.Item>
											Nickname: {user.nickname}
										</ListGroup.Item>
										<ListGroup.Item>
											Email: {user.email}
										</ListGroup.Item>
										<ListGroup.Item>
											Logged In using: Github
										</ListGroup.Item>
									</>
								)}

								{user.sub.includes('facebook') && (
									<>
										<ListGroup.Item>
											Name: {user.name}
										</ListGroup.Item>
										<ListGroup.Item>
											Nickname: {user.nickname}
										</ListGroup.Item>
										<ListGroup.Item>
											Email: {user.email}
										</ListGroup.Item>
										<ListGroup.Item>
											Logged In using: Facebook
										</ListGroup.Item>
									</>
								)}
							</ListGroup>
						</Col>
					</Row>
				)}
			</>
		</Container>
	);
};

export default Profile;

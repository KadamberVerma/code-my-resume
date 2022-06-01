import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner, Container, Row } from 'react-bootstrap';

const ProtectedRoute = ({ component }) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => (
			<Container className="py-4">
				<Row className="justify-content-center">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</Row>
			</Container>
		),
	});
	return <Component />;
};

export default ProtectedRoute;

import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "http://localhost:3000/";
    }
  }, [isAuthenticated]);

  return (
    <Container className="my-5 login">
      <Row className="justify-content-center">
        <Col xs={6}>
          <h1 className="text-center">Log in to CodeMyResume.com</h1>
          <p className="text-center">
            We have partnered with Auth0. You will need to login using Auth0 to
            continue access to CodeMyResume features.
          </p>
          <Row>
            <Image src="/images/login.png" alt="login" />
            <Button
              className="my-4"
              variant="outline-primary"
              onClick={() => loginWithRedirect()}
            >
              Login With Auth0
            </Button>
            <p className="text-muted text-center">
              You agree to sign in and agree to CodeMyResume.com&apos;s Terms of
              Service and Privacy Policy. You consent to receiving marketing
              messages from CodeMyResume.com and may opt out from receiving such
              messages by following the unsubscribe link in our messages, or as
              detailed in our terms.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

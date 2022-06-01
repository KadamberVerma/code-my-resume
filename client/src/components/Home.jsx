import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <Container className="my-5 home">
      <Row style={{ backgroundColor: "#fff" }}>
        <Col className="left-hero-section" xs={6}>
          <h1 className="mb-4">
            Build a professional
            <br />
            resume for free
          </h1>
          <p>
            Create your resume easily with our free builder
            <br />
            and professional templates.
          </p>
          <LinkContainer to="/create-my-resume">
            <Button variant="outline-primary">CODE MY RESUME</Button>
          </LinkContainer>
          <Row>
            <Image fluid src="/images/hero-2.png" alt="hero" />
          </Row>
        </Col>

        <Col xs={6}>
          <Image fluid src="/images/hero.png" alt="hero" />
        </Col>
      </Row>
      <Row className="my-4">
        <h2>Why build my resume with Code My Resume?</h2>
        <Row className="my-4">
          <Col xs={12} md={4}>
            <h3 className="mb-4">We&apos;re actually free</h3>
            <p>
              No gimmicks, no freemium features, no joke. Get everything you
              need to build a professional resume that shows off your best
              qualities to help you land you next job.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3 className="mb-4">Data-Driven Templates</h3>
            <p>
              Rest assured that the templates you find here are the best around.
              Based on data from what employers want to see in candidates.
              We&apos;ve created our templates with hiring in mind.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3 className="mb-4">Get Seen</h3>
            <p>
              With your resume ready for top employers, easily share with
              millions of interested employers on Indeed, the world&apos;s #1
              job site.
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>
            Start building your resume today, land your dream job tomorrow
          </h2>
          <Col xs={8} className="my-4">
            <LinkContainer to="/create-my-resume">
              <Button variant="outline-primary">CODE MY RESUME</Button>
            </LinkContainer>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

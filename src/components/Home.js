import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="home">
            <Row style={{ "backgroundColor": "#fff" }}>
                <Col xs={6}>
                    <h1>Build a professional<br />resume for free</h1>
                    <p>Create your resume easily with our free builder<br />and professional templates.</p>
                    <Button variant="outline-primary">Create My Resume</Button>
                </Col>
                <Col xs={6}>
                    <Image fluid src="/images/hero.png" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
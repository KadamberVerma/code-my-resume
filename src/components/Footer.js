import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="my-4">
                <Row>
                    <Col xs={12} sm={4}>
                        <h4>Job Seekers</h4>
                        <p>Build a Resume</p>
                        <p>Samples</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Need Help?</h4>
                        <p>Privacy Policy</p>
                        <p>Terms and Condition</p>
                        <p>About Us</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Stay Connected</h4>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    Copyright &copy; codemyresume.com 2022
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default Footer;
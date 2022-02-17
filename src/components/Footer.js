import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="p-4">
                <Row>
                    <Col>
                        <h4>Job Seekers</h4>
                        <p>Build a Resume</p>
                        <p>Samples</p>
                    </Col>
                    <Col>
                        <h4>Need Help?</h4>
                        <p>Privacy Policy</p>
                        <p>Terms and Condition</p>
                        <p>About Us</p>
                    </Col>
                    <Col>
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
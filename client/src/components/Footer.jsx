import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container className="py-4">
        <Row className="my-4">
          <Col xs={12} sm={4}>
            <h4 className="mb-4">Job Seekers</h4>
            <Link to="/create-my-resume">
              <p>Build a Resume</p>
            </Link>
          </Col>
          <Col xs={12} sm={4}>
            <h4 className="mb-4">Need Help?</h4>
            <Link to="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/terms-and-conditions">
              <p>Terms and Condition</p>
            </Link>
            <Link to="/about-us">
              <p>About Us</p>
            </Link>
          </Col>
          <Col xs={12} sm={4}>
            <h4 className="mb-4">Stay Connected</h4>
            <Row>
              <Col xs={1}>
                <a href="https://linkedin.com" target="_blank">
                  <svg
                    alt="linkedin-icon"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#FFF"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M1 3.174c.085-.412.19-.813.438-1.157C1.961 1.29 2.671 1.004 3.491 1c.92-.004 1.706.323 2.185 1.223.735 1.382.223 3.328-1.577 3.705-.576.12-1.157.103-1.708-.15-.757-.35-1.214-.965-1.357-1.846-.005-.035-.022-.067-.034-.1v-.658z"
                        opacity=".498"
                      ></path>
                      <path
                        d="M23.94 23h-4.9v-.289c-.001-2.605.011-5.21-.018-7.816a5.038 5.038 0 0 0-.28-1.534c-.35-1.033-1.145-1.504-2.247-1.493-1.553.016-2.576 1.433-2.597 2.526-.004.214-.013.428-.013.642v7.959H9.002V8.388h4.717v1.921c0 .17 1.745-1.92 3.541-2.19 2.018-.303 3.839.122 5.24 1.72.756.862 1.138 1.897 1.296 3.01.092.64.135 1.292.138 1.939.015 2.642.006 5.284.006 7.927V23z"
                        opacity=".5"
                      ></path>
                      <path d="M1 23h5V8H1z" opacity=".498"></path>
                    </g>
                  </svg>
                </a>
              </Col>
              <Col xs={1}>
                <a href="https://facebook.com" target="_blank">
                  <svg
                    alt="facebook-icon"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#FFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12.4 23.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h20.5a1 1 0 0 1 1 1v20.5a1 1 0 0 1-1 1h-6.1V15h2.56a.5.5 0 0 0 .5-.44l.38-3a.5.5 0 0 0-.5-.56H16.4V9.94a1.69 1.69 0 0 1 1.69-1.69h1.81a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1.81a5.69 5.69 0 0 0-5.69 5.69V11H9.9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.5v8.5z"
                      opacity=".5"
                    ></path>
                  </svg>
                </a>
              </Col>
              <Col xs={1}>
                <a href="https://twitter.com" target="_blank">
                  <svg
                    alt="twitter-icon"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#FFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M23.18 4.71l-2.1-.9 1.1-2.4-2.56.85a4.47 4.47 0 0 0-3-1.2 4.51 4.51 0 0 0-4.5 4.5v1c-3.54.73-6.63-1.2-9.5-4.5-.5 2.667 0 4.667 1.5 6l-3.29-.5a4.55 4.55 0 0 0 4.25 4l-2.75 1c1 2 2.82 2.31 5.25 2.5a11.52 11.52 0 0 1-6.75 2c12.76 5.67 20.25-2.66 20.25-10v-.83l2.1-1.52z"
                      opacity=".5"
                    ></path>
                  </svg>
                </a>
              </Col>
              <Col xs={1}>
                <a href="https://instagram.com" target="_blank">
                  <svg
                    alt="instagram-icon-icon"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#FFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      opacity=".5"
                      transform="translate(1 1)"
                    >
                      <rect width="22.5" height="22.5" rx="6"></rect>
                      <circle cx="11.25" cy="11.25" r="5"></circle>
                      <path d="M18.6 4.4a.5.5 0 1 1-1 0M17.6 4.4a.5.5 0 1 1 1 0"></path>
                    </g>
                  </svg>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Copyright &copy; codemyresume.com 2022</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fst-italic text-center">
              The information on this site is provided as a courtsey.
              CodeMyResume is not a career or legal advisor and does not
              guarantee job interviews or offers.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

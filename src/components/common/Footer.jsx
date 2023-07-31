import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/EXPRESS.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img
              src={img}
              style={{
                width: "200px",
                height: "70px",
                display: "block",
                border: "0",
                padding: "0px",
                margin: "0px"
              }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

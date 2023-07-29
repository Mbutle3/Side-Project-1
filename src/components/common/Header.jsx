import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Most Popular</Nav.Link>
            <NavDropdown title="Catalog" id="basic-nav-dropdown">
              <NavDropdown.Item>Shirts</NavDropdown.Item>
              <NavDropdown.Item>Shoes</NavDropdown.Item>
              <NavDropdown.Item>Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

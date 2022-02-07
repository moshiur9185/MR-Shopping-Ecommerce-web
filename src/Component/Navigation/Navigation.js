import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="">
      {/* <Navbar  variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="/home">
            XZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="ms-auto nav-link">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>*/}
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/home">XZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

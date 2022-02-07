import React from "react";
import './Navigation.css';
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="container-fluid">
      <Navbar className="navigation" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="/home">XZ</Navbar.Brand>
          <Nav className="ms-auto nav-link">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

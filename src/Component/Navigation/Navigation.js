import React from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="sticky-top">
      <Navbar className="navigation " expand="lg">
        <Container>
          <Navbar.Brand className="logo fst-italic" href="/">MR. MART</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto navbar">
              <Nav.Link data-replace="Home" className="active ml-4 nav mt-2" href="/home"><span>Home</span></Nav.Link>
              <Link data-replace="Products" className="ml-4 nav mt-2" to="/products"><span>Products</span></Link>
              <Link data-replace="Blogs" className=" ml-4 nav mt-2" to="/blogs"><span>Blogs</span></Link>
              <Link data-replace="Contacts" className="ml-4 nav mt-2" to="/contact"><span>Contacts</span></Link>
              <Link data-replace="Contacts" className="ml-4 nav mt-2" to="/login"><span>Login</span></Link>
              <Link data-replace="Contacts" className="ml-4 nav mt-2" to="/cart"><span><FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</span></Link>
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

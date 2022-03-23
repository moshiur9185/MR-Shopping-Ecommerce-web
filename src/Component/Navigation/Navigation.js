import React from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navigation = (props) => {

  const { user, handleSignOut } = useAuth()
  return (
    <div className="sticky-top ">
      <Navbar className="navigation container-fluid" expand="lg">
        <>
          <Navbar.Brand className="logo" href="/">শপিং মার্ট</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto navbar">
              <Nav.Link data-replace="Home" className="active ml-4 nav mt-2 px-2" href="/home"><span>Home</span></Nav.Link>
              <Link data-replace="Products" className="ml-4 nav mt-2" to="/products"><span>Products</span></Link>
              <Link data-replace="Blogs" className=" ml-4 nav mt-2" to="/blogs"><span>Blogs</span></Link>
              <Link data-replace="Dashboard" className="ml-4 nav mt-2" to="/dashboard"><span>Dashboard</span></Link>
              {user.email ? <a href="/"><button className="btn btn-brand ml-4 mt-2" onClick={handleSignOut}>Sing Out</button></a> : <Link data-replace="Home" to="/login"><button className="btn btn-brand ml-4 mt-2">Login</button></Link>}
            </Nav>
          </Navbar.Collapse>
        </>
        <div className="pl-4 mt-2 lg:mx-0 md:mx-0 mx-auto">
          <Link data-replace="Cart" className=" nav-cart " to="/cart"><span><FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</span></Link>
        </div>

      </Navbar>
    </div>
  );
};

export default Navigation;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Food</Navbar.Brand>
          <Nav className="me-auto nav-text">
            <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/doctor">Doctor</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

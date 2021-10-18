import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  const allContext = useFirebase();
  console.log(allContext);
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
            <span>{user.displayName}</span>
            {user?.email && <button onClick={logOut}> Log Out</button>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

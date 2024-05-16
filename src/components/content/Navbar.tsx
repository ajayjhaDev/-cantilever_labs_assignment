import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

interface NavBarProps {
  toggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggle }) => {
  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand
    >
      <Button variant="outline-info" onClick={toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" navbar>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

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
      <div className="ms-4">
        <h1>Weekly sumup</h1>
        <p style={{ color: "#adb5bd" }}>
          Get summary of your weekly online transactions here.
        </p>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" navbar>
          <Nav.Link href="#">
            <MdEmail fontSize={25} />
          </Nav.Link>
          <Nav.Link href="#">
            <IoNotifications fontSize={25} />
          </Nav.Link>
          <Nav.Link href="#" className="d-flex">
            <div>
              <FaUserCircle fontSize={35} />
            </div>
            <div>
              <p className="fw-bold ms-3" style={{ color: "black" }}>
                Andrew
              </p>
              <p style={{ position: "relative", bottom: "15px", left: "15px" }}>
                Admin account
              </p>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

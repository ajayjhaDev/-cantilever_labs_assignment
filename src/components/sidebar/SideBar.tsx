import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggle }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>react-bootstrap sidebar</h3>
      </div>

      <Nav className="flex-column pt-2">
        <p className="ms-3">Heading</p>

        <Nav.Item className="active">
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faImage} className="me-2" />
            Portfolio
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faQuestion} className="me-2" />
            FAQ
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;

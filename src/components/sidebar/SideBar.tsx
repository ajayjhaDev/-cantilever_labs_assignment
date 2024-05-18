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
import { FaCloud } from "react-icons/fa";
import { IoCardSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

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
          style={{ color: "#6098db" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <div className="d-flex justify-content-between align-items-center">
          <div className="ms-3">
            <FaCloud fontSize={70} />
          </div>

          <div style={{ position: "relative", right: "20px", top: "6px" }}>
            <h3>cloudcash</h3>
          </div>
        </div>
      </div>

      <Nav className="flex-column pt-2">
        <Nav.Item className="active">
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Overview
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <IoCardSharp className="me-2" />
            Transactions
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faImage} className="me-2" />
            Cards
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faQuestion} className="me-2" />
            Invoices
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
            Goals
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#">
            <IoSettingsOutline className="me-2" />
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;

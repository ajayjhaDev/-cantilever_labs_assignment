import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

interface ContentProps {
  isOpen: boolean;
  toggle: () => void;
}

const Content: React.FC<ContentProps> = ({ isOpen, toggle }) => {
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <NavBar toggle={toggle} />
    </Container>
  );
};

export default Content;

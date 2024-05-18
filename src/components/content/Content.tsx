import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import Table from "../Table/index";
import DebitCard from "../debitCard/index";
import Goals from "../Goals/index";
import OutComes from "../outcomes/index";
import NewTransaction from "../newtransaction/index";

interface ContentProps {
  isOpen: boolean;
  toggle: () => void;
}

const Content: React.FC<ContentProps> = ({ isOpen, toggle }) => {
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <NavBar toggle={toggle} />
      <main className="d-flex main-content">
        <section>
          <div>
            <DebitCard />
          </div>
          <div className="mt-4">
            <Table />
          </div>
        </section>

        <section style={{ position: "relative", left: "40px" }}>
          <div>
            <Goals />
          </div>
          <div className="mt-4">
            <OutComes />
          </div>
          <div>
            <NewTransaction />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Content;

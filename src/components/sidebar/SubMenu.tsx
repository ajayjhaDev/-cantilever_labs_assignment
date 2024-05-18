import React, { useState } from "react";
import { Accordion, Nav } from "react-bootstrap";
// Ensure FontAwesomeIcon is imported correctly
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons directly
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface SubMenuItem {
  title: string;
}

interface SubMenuProps {
  icon: typeof FontAwesomeIcon; // Use the type of FontAwesomeIcon for the icon prop
  title: string;
  items: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({
  icon: IconComponent,
  title,
  items,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Nav.Item>
      <Accordion>
        <Accordion
          as={Nav.Link}
          variant="link"
          eventKey="0"
          onClick={toggleNavbar}
        >
          {/* Use the IconComponent passed as a prop */}
          <IconComponent icon={faCaretDown} className="mr-2" />
          {title}
          <FontAwesomeIcon
            icon={collapsed ? faCaretDown : faCaretUp}
            className="float-right"
          />
        </Accordion>

        <Accordion.Collapse eventKey="0">
          <nav className="nav flex-column">
            {items.map((item) => (
              <a
                className={`nav-link nav-item pl-5 ${
                  item === "Active" ? "active" : ""
                } `}
                href="/"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  );
};

export default SubMenu;

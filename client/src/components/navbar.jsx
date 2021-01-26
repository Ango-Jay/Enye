import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { ReactComponent as Git } from "./git.svg";

const NavBar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Navbar color="light" light expand="sm" className="mb-5">
        <Container>
          <NavbarBrand className="largeFont">Enye</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <h2 className="center ml-auto text-purple">Phase1: Frontend</h2>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/Ango-Jay"
                  className="nav-link"
                >
                  <Git className="mr-1 text-small" />
                  github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;

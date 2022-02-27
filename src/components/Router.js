import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  Collapse,
} from "reactstrap";
import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">renee's portfolio</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavItem>
                <NavLink href="/profile">About Me</NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

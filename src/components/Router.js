import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">renee's portfolio</NavbarBrand>
        <NavbarToggler className="me-2" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
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

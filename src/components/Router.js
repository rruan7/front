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

import {
  backgroundColor,
  borderColor,
  highlightColor,
  fontColor,
  navColor,
} from "./Style";

/* COMPONENT THAT RENDERS NAVBAR */

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
      <Navbar
        className="py-4"
        style={{
          backgroundColor: highlightColor,
          opacity: "0.9",
        }}
        dark
        expand="lg"
      >
        <NavbarBrand className="mx-2" href="/" style={{ fontSize: "xx-large" }}>
          renee's portfolio
        </NavbarBrand>
        <NavbarToggler className="me-5" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/projects" style={{ fontSize: "x-large" }}>
                projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile" style={{ fontSize: "x-large" }}>
                about me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

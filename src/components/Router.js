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
  highlightColor,
  primaryColor,
  secondaryColor,
} from "./Style";

import bear from "./images/bear.svg";

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
      <main>
        <Navbar
          className="pb-0"
          style={{
            backgroundColor: primaryColor,
            opacity: "1.0",
          }}
          dark
          expand="lg"
        >
          <NavbarBrand
            className="mx-2 py-3"
            href="/"
            style={{ fontSize: "x-large" }}
          >
            renee's portfolio
          </NavbarBrand>
          <NavbarToggler className="me-5" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/projects">projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">about me</NavLink>
              </NavItem>
            </Nav>
            <img src={bear} width="10%" className="mx-5"></img>
          </Collapse>
        </Navbar>
      </main>
    );
  }
}

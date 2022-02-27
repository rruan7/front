import { Link } from "react-router-dom";
import { Nav, NavLink, NavItem } from "reactstrap";
import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav pill>
        <NavItem>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/projects">Projects</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/profile">About Me</Link>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

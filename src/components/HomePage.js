import React, { Component } from "react";
import Navigation from "./Router";
import { Outlet } from "react-router-dom";

/* COMPONENT THAT RENDERS HOMEPAGE */

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  // main rendering function that renders everything
  render() {
    return (
      <div>
        <Navigation />
        <main className="container">
          <div
            className="d-flex pt-5 justify-content-center"
            style={{ color: "#4a4343" }}
          >
            <h1>welcome to my portfolio.</h1>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#4a4343" }}
          >
            <h3>check out my projects and get to know me!</h3>
          </div>
        </main>
        <Outlet />
      </div>
    );
  }
}

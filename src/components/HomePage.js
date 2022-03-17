import React, { Component } from "react";
import Navigation from "./Router";
import { Outlet } from "react-router-dom";

import {
  backgroundColor,
  highlightColor,
  primaryColor,
  secondaryColor,
} from "./Style";

import bear from "./images/bear.svg";

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
          <div className="d-flex flex-column justify-content-center pt-5">
            <div style={{ color: primaryColor }} className="mx-5">
              <h1>welcome to my portfolio.</h1>
            </div>
            <div
              style={{ color: primaryColor, textAlign: "right" }}
              className=" mr-5"
            >
              <h4>check out my projects and get to know me!</h4>
            </div>
            <div>
              <img src={bear} width="100%" height="386vh" />
            </div>
          </div>
        </main>
        <Outlet />
      </div>
    );
  }
}

import React, { Component } from "react";
import Navigation from "./Router";
import { Outlet } from "react-router-dom";

import {
  backgroundColor,
  borderColor,
  highlightColor,
  fontColor,
} from "./Style";

import dumpling from "./images/dumpling.svg";

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
          <div className="d-flex flex-column justify-content-center pt-4">
            <div style={{ color: fontColor }} className="mx-5">
              <h1>welcome to my portfolio.</h1>
            </div>
            <div style={{ color: fontColor }} className="pt-3 mx-auto">
              <h4>check out my projects and get to know me!</h4>
            </div>
            <div>
              <img src={dumpling} width="100%" height="350vh" />
            </div>
          </div>
        </main>
        <Outlet />
      </div>
    );
  }
}

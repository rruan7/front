import React, { Component } from "react";
import Navigation from "./Router";
import { Outlet } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // set this.state fields
    this.state = {
      placeholder: false,
    };
  }

  // main rendering function that renders everything
  render() {
    return (
      <main className="container">
        <Navigation />
        <h1 className="text-black text-uppercase text-center my-4">Home</h1>
        <Outlet />
      </main>
    );
  }
}

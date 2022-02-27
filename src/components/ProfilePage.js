import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import Navigation from "./Router";
import picture from "./profile.svg";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  // main rendering function that renders everything
  render() {
    return (
      <main className="container">
        <Navigation />
        <h1 className="text-black text-uppercase text-center my-4">About Me</h1>
        <div className="card p-3">
          <div className="d-flex flex-row justify-content-between">
            <div className="p-2">
              <h5>
                I'm Renee (she/her), a first year studying computer science at
                UW.
              </h5>
              I am a Seattle-native and hold a deep appreciation for the natural
              landmarks offered by the Pacific Northwest.
            </div>
            <div className="p-2">
              <img src={picture} height="400vh"></img>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

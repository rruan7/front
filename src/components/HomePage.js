import React, { Component } from "react";
import Navigation from "./Router";
import { Outlet } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";

import mountain from "./images/mountain.svg";

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
      <div>
        <Navigation />
        <main className="container">
          <Card
            body
            className="text-center"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Welcome to Renee's Portfolio</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Thanks for stopping by!
              </CardSubtitle>
            </CardBody>
            <CardImg src={mountain} width="100%" />
            <CardFooter className="text-muted">
              Captured on Ira Springs Trail to Mason Lake
            </CardFooter>
          </Card>
        </main>
        <Outlet />
      </div>
    );
  }
}

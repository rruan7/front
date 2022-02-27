import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
  Button,
} from "reactstrap";

import Navigation from "./Router";
import profile from "./images/profile.svg";
import foodblog from "./images/food-blog.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";

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

        <div className="d-flex flex-column">
          {/* INTRODUCTION BLURB */}
          <div className="p-2 col">
            <div className="d-flex flex-row justify-content-between">
              <div className="p-2">
                <h5>
                  I'm Renee (she/her), a first year studying computer science at
                  UW.
                </h5>
                I am a Seattle-native and hold a deep appreciation for the
                natural landmarks offered by the Pacific Northwest.
                <div className="py-3">
                  <h5>Contact me @</h5>
                  reneeruan88@gmail.com
                </div>
              </div>
              <div className="p-2">
                <img src={profile} height="400vh"></img>
              </div>
            </div>
          </div>
          {/* SOCIAL MEDIA LINKS */}
          <div className="p-2 col">
            <div className="py-3">
              <h5>Follow me on these platforms!</h5>
            </div>
            <CardGroup>
              <Card>
                <CardImg src={github} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">Github</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Projects repository
                  </CardSubtitle>
                  <Button href="https://github.com/rruan7" target="_blank">
                    @rruan7
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg src={linkedin} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">LinkedIn</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Experiences and qualifications
                  </CardSubtitle>
                  <Button
                    href="https://www.linkedin.com/in/renee-ruan-a31779161/"
                    target="_blank"
                  >
                    Renee Ruan's Profile
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg src={foodblog} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">Food Blog</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Culinary creations and good eats
                  </CardSubtitle>
                  <Button
                    href="https://www.instagram.com/reneesfoodblog/"
                    target="_blank"
                  >
                    @reneesfoodblog
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        </div>
      </main>
    );
  }
}

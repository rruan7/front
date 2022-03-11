import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
} from "reactstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Navigation from "./Router";
import profile from "./images/profile.svg";
import foodblog from "./images/food-blog.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";

/* COMPONENT THAT RENDERS PROFILE PAGE */

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  // main rendering function that renders everything
  render() {
    return (
      <div>
        <Navigation />
        <main className="container">
          <h1 className="text-center my-5" style={{ color: "#4a4343" }}>
            about me
          </h1>
          <div className="d-flex flex-column">
            {/* INTRODUCTION BLURB */}
            <div className="p-2 col" style={{ color: "#4a4343" }}>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9">
                    <h5>
                      I'm Renee (she/her), an undergrad studying computer
                      science at UW.
                    </h5>
                    I am a Seattle-native and hold a deep appreciation for the
                    natural landmarks offered by the Pacific Northwest. My
                    favorite trail to hike in the North Bend area is the Ira
                    Springs Trail! Although I have no pets at the moment, I am a
                    huge cat-lover and have aspirations of constructing
                    elaborate hideouts for my to-be-adopted cats. Besides cats
                    and the outdoors, another source of comfort and inspiration
                    for me is food—instead of adhering strictly to the recipe, I
                    prefer a go-with-the-flow, improvise-on-the-fly approach to
                    cooking and baking (check out my food blog below!) I can't
                    say that all of my projects are a success, but each one
                    lives close to my heart.
                    <div className="py-3">
                      <h5>Contact me @</h5>
                      reneeruan88@gmail.com
                    </div>
                  </MDBCol>
                  <MDBCol md="3">
                    <img src={profile} height="300vh"></img>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            {/* SOCIAL MEDIA LINKS */}
            <div className="p-2 col pb-4" style={{ color: "#4a4343" }}>
              <div className="py-3">
                <h5>Follow me on these platforms!</h5>
              </div>
              <CardGroup>
                {/* CARD 1 */}
                <Card
                  style={{ backgroundColor: "#cfd4d1", borderColor: "#bbbdbc" }}
                >
                  <CardImg src={github} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">Github</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      projects repository.
                    </CardSubtitle>
                    <Button href="https://github.com/rruan7" target="_blank">
                      @rruan7
                    </Button>
                  </CardBody>
                </Card>
                {/* CARD 2 */}
                <Card
                  style={{ backgroundColor: "#cfd4d1", borderColor: "#bbbdbc" }}
                >
                  <CardImg src={linkedin} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">LinkedIn</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      experiences and qualifications.
                    </CardSubtitle>
                    <Button
                      href="https://www.linkedin.com/in/renee-ruan-a31779161/"
                      target="_blank"
                    >
                      Renee Ruan's Profile
                    </Button>
                  </CardBody>
                </Card>
                {/* CARD 3 */}
                <Card
                  style={{ backgroundColor: "#cfd4d1", borderColor: "#bbbdbc" }}
                >
                  <CardImg src={foodblog} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">Food Blog</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      culinary creations and good eats.
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
      </div>
    );
  }
}

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

import {
  backgroundColor,
  borderColor,
  highlightColor,
  fontColor,
} from "./Style";

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
        <main className="container pb-4">
          <h1 className="text-center my-5" style={{ color: fontColor }}>
            about me.
          </h1>
          <div className="d-flex flex-column">
            {/* INTRODUCTION BLURB */}
            <div className="p-2 col" style={{ color: fontColor }}>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9">
                    <h4>
                      <b>
                        I'm Renee (she/her), an undergrad studying computer
                        science at UW.
                      </b>
                    </h4>
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
                    <div className="py-4">
                      <h5>
                        <b>💌 Contact me @ reneeruan88@gmail.com</b>
                      </h5>
                    </div>
                  </MDBCol>
                  <MDBCol md="3">
                    <img src={profile} height="320vh"></img>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            {/* SOCIAL MEDIA LINKS */}
            <div className="p-2 col" style={{ color: fontColor }}>
              <div className="py-3">
                <h4>
                  <b>Follow me on these platforms!</b>
                </h4>
              </div>
              <CardGroup>
                {/* CARD 1 */}
                <Card
                  style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                  }}
                >
                  <CardImg src={github} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">
                      <b>Github</b>
                    </CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h5">
                      Projects repository.
                    </CardSubtitle>
                    <Button
                      outline
                      href="https://github.com/rruan7"
                      target="_blank"
                    >
                      @rruan7
                    </Button>
                  </CardBody>
                </Card>
                {/* CARD 2 */}
                <Card
                  style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                  }}
                >
                  <CardImg src={linkedin} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">
                      <b>LinkedIn</b>
                    </CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h5">
                      Experiences and qualifications.
                    </CardSubtitle>
                    <Button
                      outline
                      href="https://www.linkedin.com/in/renee-ruan-a31779161/"
                      target="_blank"
                    >
                      Renee Ruan's Profile
                    </Button>
                  </CardBody>
                </Card>
                {/* CARD 3 */}
                <Card
                  style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                  }}
                >
                  <CardImg src={foodblog} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">
                      <b>Food Blog</b>
                    </CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h5">
                      Culinary creations and good eats.
                    </CardSubtitle>
                    <Button
                      outline
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

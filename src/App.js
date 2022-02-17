import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import PersonalProjects from "./components/ProjectsPage";

class App extends Component {
  constructor(props) {
    super(props);
    // set this.state fields
    this.state = {
      placeholder: false,
    };
  }

  // main rendering function that renders everything
  render() {
    return <PersonalProjects />;
  }
}
export default App;

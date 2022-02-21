import React, { Component } from "react";
import Home from "./components/HomePage";

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
    return <Home />;
  }
}
export default App;

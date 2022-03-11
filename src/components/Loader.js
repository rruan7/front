import React, { Component } from "react";
import { Spinner } from "reactstrap";

import {
  backgroundColor,
  borderColor,
  highlightColor,
  fontColor,
} from "./Style";

/* COMPONENT THAT RENDERS LOADING SPINNER */

// refer to index.js for LoadingIndicator function and PromiseTracker

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main className="container">
          <div
            className="card p-3"
            style={{ backgroundColor: backgroundColor }}
          >
            <ul className="d-flex my-5 justify-content-center">
              <Spinner />
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

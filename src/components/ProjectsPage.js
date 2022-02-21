import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import Navigation from "./Router";

export default class PersonalProjects extends Component {
  constructor(props) {
    super(props);
    // set this.state fields
    this.state = {
      viewCategory: "incomplete", // set to imcomplete by default to only view uncompleted items
      todoList: [],
      modal: false, // set to false by default (handles project pop-up)
      activeItem: {
        title: "",
        description: "",
      },
    };
  }

  // calls the refreshList function every time this component is mounted
  componentDidMount() {
    this.refreshList();
  }

  // helper function that refreshes/populates to-do list
  refreshList = () => {
    axios
      .get("/api/projects/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  // helper function that sets modal to true if currently false, and vice versa
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // helper function that triggers modal pop-up for the project item passed in
  displayDetails = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // helper function that sets this.state.viewCategory equal to the string parameter passed in
  displayCategory = (category) => {
    return this.setState({ viewCategory: category });
  };

  // helper function to render tab toggle
  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={
            this.state.viewCategory === "complete"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => this.displayCategory("complete")}
        >
          Complete
        </span>
        <span
          className={
            this.state.viewCategory === "incomplete"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => this.displayCategory("incomplete")}
        >
          Incomplete
        </span>
      </div>
    );
  };

  // helper function to render main body of projects display
  renderItems = () => {
    const { viewCategory } = this.state;
    // for item : todoList, if item.category equals this.state.viewCategory, add to newItems
    const newItems = this.state.todoList.filter(
      (item) => item.category === viewCategory
    );
    // for item : newItems...
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {/* displays item title */}
        <span className={`todo-title mr-2`} title={item.description}>
          <div className="d-grid gap-3">
            <div className="p-2">
              <b>{item.title}</b>
            </div>
            <div className="p-2">
              {/* learn more button that triggers modal pop-up */}
              <button
                className="btn btn-secondary mr-2"
                onClick={() => this.displayDetails(item)}
              >
                Learn more
              </button>
            </div>
          </div>
        </span>
        <span>
          {/* displays item image */}
          <img src={item.picture}></img>
        </span>
      </li>
    ));
  };

  // main rendering function that renders everything
  render() {
    return (
      <main className="container">
        <Navigation />
        <h1 className="text-black text-uppercase text-center my-4">Projects</h1>
        <div className="row">
          <div className="col">
            <div className="card p-3">
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {/* if this.state.modal == true, display task-edit pop-up */}
        {this.state.modal ? (
          <Modal activeItem={this.state.activeItem} onSave={this.toggle} />
        ) : null}
      </main>
    );
  }
}

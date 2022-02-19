import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class PersonalProjects extends Component {
  constructor(props) {
    super(props);
    // set this.state fields
    this.state = {
      viewCompleted: false, // set to false by default to only view uncompleted items
      todoList: [],
      modal: false, // set to false by default (handles task-edit pop-up)
      activeItem: {
        title: "",
        description: "",
        completed: false,
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

  // helper function to handle editing a new-to task
  displayDetails = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // helper function that takes in boolean parameter and sets this.state.viewCompleted to true or false
  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  // helper function to render complete/incomplete toggle tab
  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  // helper function to render main body of to-do task display
  renderItems = () => {
    const { viewCompleted } = this.state;
    // for item : todoList, if item.completed equals this.state.viewCompleted, add to newItems
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted
    );
    // for item : todoList where item.completed == this.state.viewCompleted...
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {/* displays item title */}
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          <div className="d-grid gap-3">
            <div className="p-2">
              <b>{item.title}</b>
            </div>
            <div className="p-2">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => this.displayDetails(item)}
              >
                Learn more
              </button>
            </div>
          </div>
        </span>
        {/* displays edit and delete buttons */}
        <span>
          <img src={item.picture}></img>
        </span>
      </li>
    ));
  };

  // main rendering function that renders everything
  render() {
    return (
      <main className="container">
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

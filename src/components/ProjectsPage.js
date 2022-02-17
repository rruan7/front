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

  // helper function that refreshes to-do list
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

  // helper function to handle saving edits for to-do tasks
  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/projects/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios.post("/api/projects/", item).then((res) => this.refreshList());
  };

  // helper function to handle deleting a to-do task
  handleDelete = (item) => {
    axios.delete(`/api/projects/${item.id}/`).then((res) => this.refreshList());
  };

  // helper function that handles new to-do task creation
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  // helper function to handle editing a new-to task
  editItem = (item) => {
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
          {item.title}
        </span>
        {/* displays edit and delete buttons */}
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  // main rendering function that renders everything
  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary" onClick={this.createItem}>
                  Add new task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {/* if this.state.modal == true, display task-edit pop-up */}
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

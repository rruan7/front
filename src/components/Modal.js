import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
} from "reactstrap";

/* COMPONENT THAT RENDERS PROJECT POP-UP DESCRIPTION */

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  // function that renders two external link buttons
  renderButtons() {
    if (this.state.activeItem.category === "applications") {
      return (
        <div className="d-flex flex-row">
          <Button outline href={this.state.activeItem.app_link} target="_blank">
            Application Link
          </Button>
          <Button
            className="mx-3"
            outline
            href={this.state.activeItem.source_code}
            target="_blank"
          >
            Source code
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            outline
            href={this.state.activeItem.source_code}
            target="_blank"
          >
            Source code
          </Button>
        </div>
      );
    }
  }

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal size="xl" isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{this.state.activeItem.title}</ModalHeader>
        <ModalBody>
          <div className="d-grid gap-3">
            <div className="p-2">
              <b>Project Description</b>
            </div>
            <div className="p-2">{this.state.activeItem.description}</div>
            <div className="p-2">{this.renderButtons()}</div>
            <div className="d-flex p-2 my-4 justify-content-center">
              <img
                src={this.state.activeItem.picture_link}
                width="100%"
                style={{ border: "1px solid black" }}
              ></img>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onSave(this.state.activeItem)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

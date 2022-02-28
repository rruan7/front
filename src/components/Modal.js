import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
            <div className="p-2">
              <Button outline href={this.state.activeItem.link} target="_blank">
                Source code
              </Button>
            </div>
            <div className="d-flex p-2 my-4 justify-content-center">
              <img src={this.state.activeItem.picture_link} width="100%"></img>
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

import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContentModal from "./ContentModal";

class ModalWrapper extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <ContentModal show={this.state.show} handleClose={this.hideModal}>
          <p>Header content</p>
          <p>Lorem ipsum</p>
        </ContentModal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </div>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<ModalWrapper />, container);

export default ModalWrapper;

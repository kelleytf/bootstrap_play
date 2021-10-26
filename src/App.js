import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "./custom.css";

import "./App.css";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  const [showPop, toggleShowPop] = useState(false);
  const handleClose = () => toggleShow(false);
  //const handleShow = () => toggleShow(true);

  const Mypopup = () => {
    const closeMe = () => toggleShowPop(false);
    const showMe = () => toggleShowPop(true);

    return (
      <Modal show={showMe} onHide={closeMe}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>This Popup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Test Me</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary background" onClick={closeMe}>
              Cancel
            </Button>
            <Button variant="primary background" onClick={closeMe}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  };

  return (
    <>
      <Container>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </Container>

      {showPop && <Mypopup />}

      <Container>
        <Button
          variant="background leftJ"
          className="mr-2"
          onClick={toggleShowPop}
        >
          Modal
        </Button>

        <Button variant="background leftJ">Two</Button>

        <Button variant="background rightJ" className="float-right">
          Rt
        </Button>
      </Container>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default App;

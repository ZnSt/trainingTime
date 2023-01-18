import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Essentials</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Info</h4>
        <p>Hey! You can write your plans here and we save this information! Good Luck!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

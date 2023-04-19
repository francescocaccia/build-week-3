import { useState } from "react";
import { Button, Modal, Form, ModalBody } from "react-bootstrap";

const ModalModPost = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  let [text, setText] = useState("");

  return (
    <ModalBody {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={5}
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
              placeholder="Di cosa vorresti parlare?"
            />
          </Form.Group>

          <small className="d-flex justify-content-end">*le seguenti aree sono obligatorie</small>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Invia
          </Button>
        </Modal.Footer>
      </Form>
    </ModalBody>
  );
};

export default ModalModPost;

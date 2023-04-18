import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { profileFetch } from "../redux/actions";
// import { useDispatch } from "react-redux";

const ModalPhoto = props => {
  let profile = useSelector(state => state.profile.content);
  let [photo, setPhoto] = useState(profile?.image);
  const hendleSubmit = e => {
    e.preventDefault();
    // updateFetch();
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Inserisci la tua foto</Modal.Title>
      </Modal.Header>
      <Form onSubmit={hendleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label> Nome*</Form.Label>
            <Form.Control
              type="text"
              value={photo}
              onChange={e => {
                // setPhoto(e.target.value);
              }}
              placeholder="Inserisci il tuo nuovo nome"
            />
          </Form.Group>
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
    </Modal>
  );
};

export default ModalPhoto;

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
    updatePhoto();
  };

  const updatePhoto = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${profile?._id}/picture`;
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
      body: photo,
      // body: JSON.stringify({ profile: photo, username: profile.username }),
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        console.log(risposta);
        // setDispatchAgg(dispatchAgg + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Inserisci la tua foto</Modal.Title>
      </Modal.Header>
      <Form onSubmit={hendleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={photo}
              onChange={e => {
                setPhoto(e.target.value);
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

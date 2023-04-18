import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { profileFetch } from "../redux/actions";
import { useDispatch } from "react-redux";

const ModaleModifica = props => {
  let profile = useSelector(state => state.profile.content);
  let [dispatchAgg, setDispatchAgg] = useState(0);
  let [name, setName] = useState(profile?.name);
  let [surname, setSurname] = useState(profile?.surname);
  let [email, setEmail] = useState(profile?.email);
  let [bio, setBio] = useState(profile?.bio);
  let [title, setTitle] = useState(profile?.title);
  let [area, setArea] = useState(profile?.area);
  const dispatch = useDispatch();
  const updateFetch = async () => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/";
    const headers = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        bio: bio,
        title: title,
        area: area,
      }),
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        console.log(risposta);
        setDispatchAgg(dispatchAgg + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(profileFetch());
  }, [dispatchAgg]);

  const hendleSubmit = e => {
    e.preventDefault();
    updateFetch();
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica</Modal.Title>
      </Modal.Header>
      <Form onSubmit={hendleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label> Nome*</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              placeholder="Inserisci il tuo nuovo nome"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Cognome*</Form.Label>
            <Form.Control
              type="text"
              value={surname}
              onChange={e => {
                setSurname(e.target.value);
              }}
              placeholder=" Inserisci il tuo nuovo cognome"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Email*</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder=" Inserisci la tua nuova email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="my-bio">Bio*</Form.Label>
            <Form.Control
              rows={5}
              as="textarea"
              value={bio}
              onChange={e => {
                setBio(e.target.value);
              }}
              placeholder=" Inserisci la tua nuova bio"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Titolo*</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              placeholder=" Inserisci il tuo nuovo titolo"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Area*</Form.Label>
            <Form.Control
              type="text"
              value={area}
              onChange={e => {
                setArea(e.target.value);
              }}
              placeholder=" Inserisci la tua nuova localita "
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
    </Modal>
  );
};

export default ModaleModifica;

import { Button, Modal, Form, Spinner } from "react-bootstrap";
import { getPostFetch } from "../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalPost = props => {
  let dispatch = useDispatch();
  let profile = useSelector(state => state.profile.content);
  let [text, setText] = useState("");
  let [photo, setPhoto] = useState("");
  let [spinner, setSpinner] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSpinner(true);
    addNewPostFetch();
  };

  const handleFileChange = event => {
    setPhoto(event.target.files[0]);
  };
  const updatePhoto = async post => {
    const formData = new FormData();
    formData.append("post", photo);

    const URL = `https://striveschool-api.herokuapp.com/api/posts/${post._id}`;
    const headers = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",

        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
      body: formData,
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        console.log("sono in immagine", post.image, post._id);
      } else {
        console.log(risposta);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewPostFetch = async () => {
    const URL = "https://striveschool-api.herokuapp.com/api/posts/";
    const headers = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
      body: JSON.stringify({
        text: text,
      }),
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        await updatePhoto(dato);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getPostFetch());
      setSpinner(false);
    }
  };
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {profile?.name} {profile?.surname}
          </Modal.Title>
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
            <Form.Group className="mb-3">
              <Form.Label>Immagine*</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} placeholder="Inserisci un'immagine" required />
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

      {spinner && (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 spinnerBackground d-flex justify-content-center align-items-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </>
  );
};

export default ModalPost;

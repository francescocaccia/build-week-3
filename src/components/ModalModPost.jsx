import { useState } from "react";
import { Button, Modal, Form, ModalBody } from "react-bootstrap";
import { getPostFetch } from "../redux/actions";
import { useDispatch } from "react-redux";

const ModalModPost = props => {
  let dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    editPost();
    updatePhoto();
    props.setModificaPost(false);
  };

  let [text, setText] = useState(props.selectPost.text);
  let [photo, setPhoto] = useState(props.selectPost.image);

  const handleFileChange = event => {
    setPhoto(event.target.files[0]);
  };
  const updatePhoto = async () => {
    const formData = new FormData();
    formData.append("post", photo);

    const URL = `https://striveschool-api.herokuapp.com/api/posts/${props.selectPost._id}`;
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
        console.log(risposta);
      } else {
        console.log(risposta);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getPostFetch());
    }
  };
  const editPost = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/posts/${props.selectPost._id}`;
    const headers = {
      method: "PUT",
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
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getPostFetch());
    }
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica post</Modal.Title>
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
            <Form.Control
              type="file"
              // value={photo}

              onChange={handleFileChange}
              placeholder="Inserisci un'immagine"
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button className="me-2" type="button" variant="danger" onClick={props.onHide}>
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

export default ModalModPost;

import { useState } from "react";
import { Button, Modal, Form, ModalBody } from "react-bootstrap";
import { getPostFetch } from "../redux/actions";
import { useDispatch } from "react-redux";

const ModalModPost = props => {
  let dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    editPost();
  };
  let [text, setText] = useState(props.selectPost.text);

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
        // setDispatchAgg(dispatchAgg + 1);
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

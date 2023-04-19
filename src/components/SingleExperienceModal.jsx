import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { experienceFetch, profileFetch } from "../redux/actions";

const SingleExperienceModal = props => {
  const formatDate = date => {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  let profile = useSelector(state => state.profile.content);
  let [role, setRole] = useState(props.esperienza.role);
  let [company, setCompany] = useState(props.esperienza.company);
  let [startDate, setStartDate] = useState(formatDate(props.esperienza.startDate));
  let [endDate, setEndDate] = useState(formatDate(props.esperienza.endDate));
  let [description, setDescription] = useState(props.esperienza.description);
  let [area, setArea] = useState(props.esperienza.area);
  let [photo, setPhoto] = useState(props.esperienza.image);
  let dispatch = useDispatch();
  const hendleSubmit = e => {
    e.preventDefault();
    updateExperienceFetch();
    updatePhoto();
  };
  const handleFileChange = event => {
    setPhoto(event.target.files[0]);
  };
  const updatePhoto = async () => {
    const formData = new FormData();
    formData.append("experience", photo);

    const URL = `https://striveschool-api.herokuapp.com/api/profile/${profile?._id}/experiences/${props.esperienza._id}/picture`;
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
      console.log(photo);
      dispatch(experienceFetch(profile._id));
    }
  };
  const updateExperienceFetch = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${props.esperienza._id}`;
    const headers = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
      body: JSON.stringify({
        role: role,
        company: company,
        startDate: startDate,
        endDate: endDate,
        description: description,
        area: area,
      }),
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(experienceFetch(profile._id));
    }
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modifica</Modal.Title>
        </Modal.Header>
        <Form onSubmit={hendleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label> ruolo*</Form.Label>
              <Form.Control
                type="text"
                value={role}
                onChange={e => {
                  setRole(e.target.value);
                }}
                placeholder="Inserisci il tuo ruolo"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> compagnia*</Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={e => {
                  setCompany(e.target.value);
                }}
                placeholder=" Inserisci la tua compagnia"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> data di inizio*</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={e => {
                  setStartDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="my-bio">Data di fine*</Form.Label>
              <Form.Control
                value={endDate}
                onChange={e => {
                  setEndDate(e.target.value);
                }}
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione*</Form.Label>
              <Form.Control
                rows={5}
                as="textarea"
                value={description}
                onChange={e => {
                  setDescription(e.target.value);
                }}
                placeholder=" Inserisci la descrizione"
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
                placeholder=" Inserisci la localita "
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image*</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} placeholder="Inserisci la tua immagine" required />
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
    </>
  );
};

export default SingleExperienceModal;

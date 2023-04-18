import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { experienceFetch } from "../redux/actions";

import { useState } from "react";
import SingleExperienceModal from "./SingleExperienceModal";

const SingleExperience = ({ esperienza }) => {
  let dispatch = useDispatch();

  let [singleExperienceModal, setSingleExperienceModal] = useState(false);

  let profile = useSelector(state => state.profile.content);

  const removeExperience = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${esperienza._id}`;
    const headers = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
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
      <Col>
        <div className="d-flex justify-content-start align-items-start mt-3">
          <div>
            {esperienza?.image && (
              <img src={esperienza.image} alt="epicode_logo" width={60} height={60} className="rounded-circle me-3" />
            )}
          </div>
          <div>
            <span className="text-dark d-flex justify-content-center" style={{ textDecoration: "none" }}>
              <h4>{esperienza.company}</h4>
            </span>
            <strong>Ruolo:</strong>
            <p>{esperienza.role}</p>
            <strong>dal─al:</strong>
            <p>
              {new Date(esperienza.startDate).toLocaleString()} ─ {new Date(esperienza.endDate).toLocaleString()}
            </p>
            <strong>Luogo:</strong>
            <p>{esperienza.area}</p>
            <strong>descrizione:</strong>
            <p>{esperienza.description}</p>
          </div>
          <div className="flex-fill d-flex justify-content-end">
            <Button
              variant={"outline-dark"}
              className="border-0 mx-2"
              onClick={() => {
                setSingleExperienceModal(true);
              }}
            >
              <BiPencil className="fs-3 " />
            </Button>
            <Button variant={"outline-danger"} onClick={() => removeExperience()} className="border-0">
              <BsTrash className="fs-3 text-dark" />
            </Button>
          </div>
        </div>
      </Col>
      <hr />
      {singleExperienceModal && (
        <SingleExperienceModal
          show={singleExperienceModal}
          esperienza={esperienza}
          onHide={() => setSingleExperienceModal(false)}
        />
      )}
    </>
  );
};

export default SingleExperience;

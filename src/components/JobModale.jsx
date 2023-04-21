import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import moment from "moment/moment";

const JobModale = props => {
  console.log(new Date(props.job?.publication_date).toLocaleDateString());
  return (
    <>
      <Modal {...props} dialogClassName="modal-300w" aria-labelledby="jobOffer">
        <Modal.Header closeButton>
          <Modal.Title id="jobOffer fw-bold">{props.job?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="fw-bold">{props.job?.company_name}</span> &#183;{" "}
            <span>{props.job?.candidate_required_location}</span> &#183;{" "}
            <span>{moment().endOf(new Date(props.job?.publication_date).toLocaleDateString()).fromNow()}</span>
          </p>
          <p className="mb-0">
            <BsFillBriefcaseFill className="me-2" />
            {props.job?.job_type}
          </p>

          <p className="mb-">
            <BsPeopleFill className="me-2" />1 ex studente
          </p>
          <div className="mb-4">
            <Button className="me-3" variant="primary">
              Candidati
              <CiShare1 className="ms-2" />
            </Button>
            <Button variant="outline-primary">Salva</Button>
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: props.job?.description }}></p>
            <p>
              Offerta di lavoro pubblicata su:
              {" " + props.job?.url}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JobModale;

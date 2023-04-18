import { Col, Container, Row, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalExperience from "./ModalExperience";
import SingleExperience from "./SingleExperience";

import { useSelector } from "react-redux";
const Esperienza = () => {
  let [EsperienzaModale, setEsperienzaModale] = useState(false);
  let experience = useSelector(state => state.profile.experience);
  useEffect(() => {
    console.log(experience);
  }, [experience]);

  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-5">
      <Row>
        <Col className="d-flex justify-content-between" xs={12} md={12}>
          <h5 className="fw-semibold fs-4">Esperienza</h5>
          <div>
            <Button
              variant={"outline-dark"}
              className="border-0"
              onClick={() => {
                setEsperienzaModale(true);
              }}
            >
              <AiOutlinePlus className="fs-3 " />
            </Button>
          </div>
        </Col>

        {experience.length > 0 && experience.map(esperienza => <SingleExperience esperienza={esperienza} />)}
      </Row>
      {EsperienzaModale && <ModalExperience show={EsperienzaModale} onHide={() => setEsperienzaModale(false)} />}
    </Container>
  );
};

export default Esperienza;

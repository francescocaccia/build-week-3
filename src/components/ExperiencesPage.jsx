import { Col, Container, Row, Button, ListGroup, Card, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalExperience from "./ModalExperience";
import SingleExperience from "./SingleExperience";
import SecondCardAside from "./SecondCardAside";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";

const ExperiencesPage = () => {
  const navigate = useNavigate();
  let [EsperienzaModale, setEsperienzaModale] = useState(false);
  let spinner = useSelector(state => state.spinner.spinnerEsperienza);
  let MyAccount = useSelector(state => state.profile.myProfile);

  let experience = useSelector(state => state.profile.experience);
  console.log(experience);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-3">
              <Row>
                <Col className="d-flex justify-content-between align-items-center" xs={12} md={12}>
                  <div className="d-flex align-items-center">
                    {MyAccount && (
                      <Button
                        variant="outline-dark"
                        className="border-0 fs-4 "
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        <BsArrowLeft />
                      </Button>
                    )}
                    <h5 className="fw-semibold fs-4 mb-0 ms-3">Esperienza</h5>
                  </div>
                  {MyAccount && (
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
                  )}
                </Col>
                {spinner && (
                  <div className=" d-flex justify-content-center mt-5">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                )}
                {!spinner &&
                  experience.length !== 0 &&
                  experience.map(esperienza => (
                    <SingleExperience profileLocation={MyAccount} key={esperienza._id} esperienza={esperienza} />
                  ))}
              </Row>
            </Container>
          </Col>
          <Col xs={3} className="d-none d-md-flex">
            <div className="rounded border mt-2">
              <Card className="border-secondary p-3">
                <ListGroup>
                  <h6>Altri profili consultati</h6>
                  <SecondCardAside />
                  <SecondCardAside />
                  <SecondCardAside />
                  <SecondCardAside />
                  <SecondCardAside />
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
        {EsperienzaModale && (
          <ModalExperience
            show={EsperienzaModale}
            onHide={() => setEsperienzaModale(false)}
            setEsperienzaModale={setEsperienzaModale}
          />
        )}
      </Container>
    </>
  );
};

export default ExperiencesPage;

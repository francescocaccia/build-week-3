import { Col, Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const Formazione = ({ profileLocation }) => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-5">
      <Row>
        <Col className="d-flex justify-content-between" xs={12} md={12}>
          <h5 className="fw-semibold fs-4">Formazione</h5>
          <div>
            {profileLocation && (
              <>
                <AiOutlinePlus className="fs-3 mx-3" />
                <BiPencil className="fs-3" />
              </>
            )}
          </div>
        </Col>

        <Col>
          <div className="d-flex justify-content-start align-items-start mt-3">
            <div>
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-circle me-3"
              />
            </div>
            <div>
              <Link className="text-dark" style={{ textDecoration: "none" }}>
                <h6>EPICODE</h6>
              </Link>
              <p>Front-End Development</p>
              <p>gen 2023 - apr 2023</p>
              <p>Front-end Development Bootcamp focused on: - HTML - CSS - JavaScript - Bootstrap - SASS - React.js</p>
              <p>
                Competenze: E-learning · Team building · Flexible Approach · SASS · Bootstrap · JavaScript · CSS · HTML
              </p>
            </div>
          </div>
        </Col>
        <hr />
        <Col>
          <div className="d-flex justify-content-start align-items-start mt-3">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/it/e/e2/Stemma_unipi.svg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-circle me-3"
              />
            </div>
            <div>
              <Link className="text-dark" style={{ textDecoration: "none" }}>
                <h6>Università degli Studi di Pisa</h6>
              </Link>
              <p>Laurea magistrale in Filologie e Letterature Euroamericane</p>
              <p>dic 2017 - lug 2021</p>
              <p>Attività e associazioni: Orchestra dell’Università di Pisa</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formazione;

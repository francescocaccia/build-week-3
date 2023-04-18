import { Col, Container, Row, Badge } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { GoGraph, GoSearch } from "react-icons/go";
import { FaSatelliteDish } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";
const Risorse = () => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-5">
      <Row>
        <h5 className="fw-semibold fs-4">Risorse</h5>
        <p className="text-secondary" variant="secondary">
          <AiFillEye /> Solo per te
        </p>
        <Col xs={12}>
          <Link className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="fs-5">
              <FaSatelliteDish /> Modalità creazione di contenuti
              <Badge bg="secondary" className="ms-2 text-light">
                No
              </Badge>
            </h6>
          </Link>

          <Link className="text-secondary" style={{ textDecoration: "none" }}>
            <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
          </Link>
          <hr />
        </Col>
        <Col xs={12}>
          <Link className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="fs-5">
              <IoMdContacts /> La mia rete
            </h6>
          </Link>
          <Link className="text-secondary" style={{ textDecoration: "none" }}>
            <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Risorse;

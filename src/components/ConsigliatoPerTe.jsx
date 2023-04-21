import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

const ConsigliatoPerTe = () => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4">
      <Row>
        <h5 className="fw-semibold fs-4">Consigliato per te</h5>
        <p className="text-secondary" variant="secondary">
          <AiFillEye /> Solo per te
        </p>
        <Col xs={12} md={12} className="mb-3">
          <h6>Intermedio</h6>
          <div className="d-flex align-items-center">
            <ProgressBar now={90} variant="secondary" className="my_progress me-4 " />
            <span>6/7</span>
          </div>
          <small>
            Completa 1 passaggio per ragiungere il livello <small className="text-primary fw-bold">Massimo</small>
          </small>
        </Col>
        <Col xs={12} md={12}></Col>
      </Row>
    </Container>
  );
};

export default ConsigliatoPerTe;

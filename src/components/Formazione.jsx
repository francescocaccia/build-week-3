import { Col, Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const Formazione = () => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-5">
      <Row>
        <Col className="d-flex justify-content-between" xs={12} md={12}>
          <h5 className="fw-semibold fs-4">Formazione</h5>
          <div>
            <AiOutlinePlus className="fs-3 mx-3" />
            <BiPencil className="fs-3" />
          </div>
        </Col>

        <Col>
          <div className="d-flex justify-content-start align-items-start mt-3">
            <div>
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="epicode_logo"
                width={60}
                height={60}
                className="rounded-circle me-3"
              />
            </div>
            <div>
              <Link className="text-dark" style={{ textDecoration: "none" }}>
                <h6>EPICODE</h6>
              </Link>
              <p>Master, Full Stack IT developer</p>
              <p>gen 2023 - lug 2023</p>
              <p>
                Topics covered: React - JavaScript -bootstrap - CSS - SASS - React - JavaScript -Bootstrap - CSS - SASS
              </p>
              <p>Competenze: Flexible Approach · Adaptation · E-Learning · Team Building · Intellectually Curious</p>
            </div>
          </div>
        </Col>
        <hr />
        <Col>
          <div className="d-flex justify-content-start align-items-start mt-3">
            <div>
              <img
                src="https://th.bing.com/th/id/R.f4490bd82717461e5f4ff6fb63f6322a?rik=vLA1eWa8hyePSA&riu=http%3a%2f%2fwww.elegircarrera.net%2funiversidades%2fimages%2flogos-universidades%2fmexico%2flogo-instituto-politecnico-nacional.jpg&ehk=qFdJEfH6I%2fd0sTbglKCVkZdv8aKIb1xUeXGkmr7s1BQ%3d&risl=&pid=ImgRaw&r=0"
                alt="epicode_logo"
                width={60}
                height={60}
                className="rounded-circle me-3"
              />
            </div>
            <div>
              <Link className="text-dark" style={{ textDecoration: "none" }}>
                <h6>ISTITUTO DANTE ALIGHIERI</h6>
              </Link>
              <p>Master, Full Stack IT developer</p>
              <p>gen 2023 - lug 2023</p>
              <p>
                Topics covered: React - JavaScript -bootstrap - CSS - SASS - React - JavaScript -Bootstrap - CSS - SASS
              </p>
              <p>Competenze: Flexible Approach · Adaptation · E-Learning · Team Building · Intellectually Curious</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formazione;

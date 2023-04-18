import { Col, Container, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GoGraph, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
const Analisi = () => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-5">
      <Row>
        <h5 className="fw-semibold fs-4">Analisi</h5>
        <p className="text-secondary" variant="secondary">
          <AiFillEye /> Solo per te
        </p>
        <Col xs={4} md={4}>
          <Link className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="fs-5">
              <IoMdContacts /> 130 Visualizzazioni del profilo
            </h6>
          </Link>
          <Link className="text-secondary" style={{ textDecoration: "none" }}>
            <p>Scopri chi ha visitato il tuo profilo</p>
          </Link>
        </Col>
        <Col xs={4} md={4}>
          <Link className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="fs-5">
              <GoGraph /> 130 impressioni del post
            </h6>
          </Link>
          <Link className="text-secondary" style={{ textDecoration: "none" }}>
            <p>Scopri chi hsta interagendo con i tuoi post</p>
          </Link>
        </Col>
        <Col xs={4} md={4}>
          <Link className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="fs-5">
              <GoSearch /> 130 comparse nei motori di ricerca
            </h6>
          </Link>
          <Link className="text-secondary" style={{ textDecoration: "none" }}>
            <p>Vedi quante volte compari nei risultati di ricerca</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Analisi;

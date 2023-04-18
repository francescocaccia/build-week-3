import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const Competenze = () => {
  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-1 ">
      <Row>
        <Col className="d-flex justify-content-between" xs={12} md={12}>
          <h5 className="fw-semibold fs-4">Competenze</h5>
          <div>
            <Button className="rounded-5 border border-primary btn-light text-primary ms-3 fw-bold">
              Quiz valutazione competenze
            </Button>
            <AiOutlinePlus className="fs-3 mx-3" />
            <BiPencil className="fs-3" />
          </div>
        </Col>

        <Col className="overflow-hidden">
          <div>
            <Link className="text-dark" style={{ textDecoration: "none" }}>
              <h6>E-Learning</h6>
            </Link>
            <div className="d-flex justify-content-start align-items-center my-3">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="epicode_logo"
                width={30}
                height={30}
                className="rounded-circle me-3"
              />
              <p className="mb-0">EPICODE</p>
            </div>
          </div>
        </Col>
        <hr />
        <Col className="overflow-hidden">
          <div>
            <Link className="text-dark" style={{ textDecoration: "none" }}>
              <h6>E-Learning</h6>
            </Link>
            <div className="d-flex justify-content-start align-items-center my-3">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="epicode_logo"
                width={30}
                height={30}
                className="rounded-circle me-3"
              />
              <p className="mb-0">EPICODE</p>
            </div>
          </div>
        </Col>
        <hr />
        <Col className="overflow-hidden">
          <div>
            <Link className="text-dark" style={{ textDecoration: "none" }}>
              <h6>E-Learning</h6>
            </Link>
            <div className="d-flex justify-content-start align-items-center my-3">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="epicode_logo"
                width={30}
                height={30}
                className="rounded-circle me-3"
              />
              <p className="mb-0">EPICODE</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Competenze;

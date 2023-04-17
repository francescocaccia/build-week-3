import { Card, Container, ListGroup, Row } from "react-bootstrap";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import SecondCardAside from "./SecondCardAside";
import FirstCard from "./FirstCard";

const AsideProfilePage = () => {
  return (
    <>
      <Card className="border-secondary" style={{ width: "auto" }}>
        <ListGroup className="fs-5">
          <ListGroup.Item className=" text-secondary d-flex justify-content-between">
            Modifica il profilo pubblico e l'URL <HiQuestionMarkCircle className="fs-2" />
          </ListGroup.Item>
          <ListGroup.Item className=" text-secondary d-flex justify-content-between">
            Aggiungi il tuo profilo in un'altra lingua <HiQuestionMarkCircle className="fs-2" />
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/*First card ++++++++++++ */}
      <Container className="rounded border border-secondary mt-2 p-2">
        <Row>
          <div className="d-flex justify-content-between">
            <h4 className="fs-6">Promosso</h4>
            <Link className="text-dark fw-bold fs-5 mb-2" style={{ textDecoration: "none" }}>
              ⋯
            </Link>
          </div>
          <FirstCard />
        </Row>
      </Container>
      {/* Second card ++++++++++++*/}
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
      <div className="rounded border mt-2">
        <Card className="border-secondary p-3">
          <ListGroup>
            <h6>Persone che potresti conoscere</h6>
            <SecondCardAside />
            <SecondCardAside />
            <SecondCardAside />
            <SecondCardAside />
            <SecondCardAside />
          </ListGroup>
        </Card>
      </div>
      {/* altra First card */}
      <Container className="rounded border border-secondary mt-2 p-2">
        <Row>
          <div className="d-flex justify-content-between">
            <h4 className="fs-6">Promosso</h4>
            <Link className="text-dark fw-bold fs-5 mb-2" style={{ textDecoration: "none" }}>
              ⋯
            </Link>
          </div>
          <FirstCard />
        </Row>
      </Container>
    </>
  );
};

export default AsideProfilePage;

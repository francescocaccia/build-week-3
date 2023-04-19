import { Col, Container, Row } from "react-bootstrap";
import AvviaPost from "./AvviaPost";
import Notizie from "./Notizie";
import ProfileCard from "./ProfileCard";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={3}>
          <ProfileCard />
        </Col>
        <Col xs={6}>
          <AvviaPost />
        </Col>
        <Col xs={3}>
          <Notizie />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

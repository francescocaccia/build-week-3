import { Row, Col, Container } from "react-bootstrap";
import MainProfilePage from "./MainProfilePage";
import AsideProfilePage from "./AsideProfilePage";

const ProfilePage = () => {
  return (
    <Container>
      <Row className="mt-4 ">
        <Col xs={12} lg={9}>
          <MainProfilePage />
        </Col>
        <Col className="d-none d-lg-block" md={3}>
          <AsideProfilePage />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;

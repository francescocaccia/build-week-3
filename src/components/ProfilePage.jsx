import { Row, Col, Container } from "react-bootstrap";
import MainProfilePage from "./MainProfilePage";
import AsideProfilePage from "./AsideProfilePage";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  let profile = useSelector(state => state.profile.content);
  return (
    <Container className="mb-3">
      <Row className="mt-4 ">
        <Col xs={12} lg={9}>
          <MainProfilePage profile={profile} />
        </Col>
        <Col className="d-none d-lg-block" md={3}>
          <AsideProfilePage />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;

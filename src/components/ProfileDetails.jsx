import { Row, Col, Container } from "react-bootstrap";
import MainProfilePage from "./MainProfilePage";
import AsideProfilePage from "./AsideProfilePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileDetailFetch } from "../redux/actions";
import { useLocation, useParams } from "react-router-dom";
const ProfileDetails = () => {
  let dispatch = useDispatch();
  let params = useParams();
  let profile = useSelector(state => state.profile.profileDetails);

  console.log(params.profileId);
  useEffect(() => {
    dispatch(profileDetailFetch(params.profileId));
  }, []);
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

export default ProfileDetails;

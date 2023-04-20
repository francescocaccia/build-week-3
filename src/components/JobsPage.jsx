import { Col, Container, Row } from "react-bootstrap";
import JobsLeftPage from "./JobsLeftPage";
import JobsCentralPage from "./JobsCentralPage";
import JobsRightPage from "./JobsRightPage";

const JobsPage = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={3}>
          <JobsLeftPage />
        </Col>
        <Col xs={6}>
          <JobsCentralPage />
        </Col>
        <Col xs={3}>
          <JobsRightPage />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;

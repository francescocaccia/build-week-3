import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import AvviaPost from "./AvviaPost";
import Notizie from "./Notizie";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import CentralCardHome from "./CentralCardHome";
import { useSelector } from "react-redux";

const HomePage = () => {
  let [azione, setAzione] = useState("Principali");
  let post = useSelector(state => state.home.content);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={3}>
          <ProfileCard />
        </Col>
        <Col xs={6}>
          <AvviaPost />
          <div className="d-flex align-items-center">
            <hr className="flex-fill" />
            <p className="d-flex align-items-center m-0 ms-2 ">
              <span className="text-secondary">Ordina per:</span>
              <DropdownButton
                id="dropDownHome"
                className="border m-0 border-0 "
                variant="dark"
                align="end"
                title={` ${azione}`}
              >
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    setAzione("Principali");
                  }}
                >
                  Principali
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => {
                    setAzione("Recenti");
                  }}
                >
                  Recenti
                </Dropdown.Item>
              </DropdownButton>
            </p>
          </div>
          {post.map(p => (
            <CentralCardHome post={p} />
          ))}
        </Col>
        <Col xs={3}>
          <Notizie />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

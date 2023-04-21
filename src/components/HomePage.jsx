import { Col, Container, Dropdown, DropdownButton, Row, Spinner } from "react-bootstrap";
import AvviaPost from "./AvviaPost";
import Notizie from "./Notizie";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import CentralCardHome from "./CentralCardHome";
import { useSelector } from "react-redux";
import ModalModPost from "./ModalModPost";

const HomePage = () => {
  let [azione, setAzione] = useState("Principali");
  let [modificaPost, setModificaPost] = useState(false);
  let [selectPost, setSelectPost] = useState(null);
  let post = useSelector(state => state.home.content);
  let spinner = useSelector(state => state.spinner.content);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <Container className="mt-4 ">
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
          {!spinner &&
            post?.map(p => (
              <CentralCardHome post={p} setSelectPost={setSelectPost} setModificaPost={setModificaPost} />
            ))}

          {spinner && (
            <div className=" d-flex justify-content-center mt-5">
              <Spinner animation="grow" variant="primary" />
            </div>
          )}
        </Col>
        <Col xs={3}>
          <Notizie />
        </Col>
      </Row>
      {modificaPost && (
        <ModalModPost
          selectPost={selectPost}
          show={modificaPost}
          onHide={() => setModificaPost(false)}
          setModificaPost={setModificaPost}
        />
      )}
    </Container>
  );
};

export default HomePage;

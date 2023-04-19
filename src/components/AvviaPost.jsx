import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { AiFillPicture } from "react-icons/ai";
import { BsPlayBtnFill } from "react-icons/bs";
import { MdNotes } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import ModalPost from "./ModalPost";

const AvviaPost = () => {
  let [PostModale, setPostModale] = useState(false);
  let profile = useSelector(state => state.profile.content);
  return (
    <>
      <Container fluid className="bg-white border border-1 rounded py-3">
        <div className="d-flex justify-content-start align-items-center">
          <div
            className="profile-pic"
            style={{
              backgroundImage: `url(${profile?.image})`,
            }}
          ></div>
          <div className="">
            <input
              style={{ width: "30rem", padding: "10px" }}
              className="input rounded-pill ms-2 border border-1 text-secondary fw-semibold"
              placeholder="Avvia un post"
              onClick={() => {
                setPostModale(true);
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 mb-4">
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2">
              <AiFillPicture className="text-primary fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Foto</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2">
              <BsPlayBtnFill className="text-success fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Video</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2">
              <RiCalendarTodoFill className="text-warning fs-4 mx-1" />{" "}
              <span className="text-secondary fw-semibold ms-2">Evento</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 mx-1">
              <MdNotes className="text-warning fs-4" />{" "}
              <span className="text-secondary fw-semibold ms-2">Scrivi un articolo</span>
            </Button>
          </div>
        </div>
        {PostModale && <ModalPost show={PostModale} onHide={() => setPostModale(false)} />}
      </Container>
    </>
  );
};

export default AvviaPost;

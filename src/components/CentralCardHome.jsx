import { Button, Container, CloseButton } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { BiMessageRoundedDetail, BiWorld } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { getPostFetch } from "../redux/actions";
import { useState } from "react";
import ModalModPost from "./ModalModPost";
const CentralCardHome = ({ post, setModificaPost, setSelectPost }) => {
  // const [modificaPost, setModificaPost] = useState(false);

  let profile = useSelector(state => state.profile.content);
  let dispatch = useDispatch();
  let pencilOnclick = () => {
    console.log("sono in pencilOnclick", setModificaPost(true));
    setModificaPost(true);
    setSelectPost(post);
  };
  const deletePost = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/posts/${post._id}`;
    const headers = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getPostFetch());
    }
  };

  return (
    <>
      <Container fluid className="bg-white border border-1 rounded pt-3 mb-4">
        <div className="px-2 d-flex justify-content-between align-items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile-pic"
              width={25}
              height={25}
              className="rounded-circle"
            />
            <small className="ms-2 numbers">
              Consigliato da <strong>Domenico Dattilo</strong>
            </small>
          </div>
          <div className="d-flex align-items-center">
            <BsThreeDots className="text-secondary me-2" />
            <CloseButton />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-start align-items-center ms-2">
          <div
            className="profile-pic mb-3"
            style={{
              backgroundImage: `url(${post?.user?.image})`,
            }}
          ></div>
          <div className="ms-2">
            <p className="numbers fw-bold my-0">
              {post?.user?.name} {post?.user?.surname}
            </p>
            <p className="my-0 text-secondary">
              <small>
                {post?.user?.title} | {post?.user?.area}
              </small>
            </p>
            <p className="mt-0 text-secondary">
              <small>
                6 giorni &#183;
                <BiWorld className="ms-1" />
              </small>
            </p>
          </div>
        </div>
        <div>
          <p className="numbers ps-3">{post?.text}</p>
          <div className="text-center">
            <img
              src="https://www.dossierscuola.it/wp-content/uploads/2020/10/coding-significato.jpg"
              alt="Post-pic"
              width={500}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-3 mb-4">
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <SlLike className="text-secondary fs-4 mx-1" />
              <p className="text-secondary fw-semibold ms-2">Consiglia</p>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <BiMessageRoundedDetail className="text-secondary fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Commenta</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <HiOutlineArrowPathRoundedSquare className="text-secondary fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Diffondi il post</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 mx-1 d-flex">
              <RiSendPlaneFill className="text-secondary fs-4" />
              <span className="text-secondary fw-semibold ms-2">Scrivi</span>
            </Button>
          </div>
          {profile?._id === post?.user?._id && (
            <Button variant="outline-danger" className="border-0" onClick={() => deletePost()}>
              <BsTrash className=" fs-3" />
            </Button>
          )}
          {profile?._id === post?.user?._id && (
            <Button variant="outline-danger" className="border-0" onClick={pencilOnclick}>
              <BiPencil className=" fs-3" />
            </Button>
          )}
        </div>
      </Container>
      {/* {modificaPost && <ModalModPost show={modificaPost} onHide={() => setModificaPost(false)} />} */}
    </>
  );
};

export default CentralCardHome;

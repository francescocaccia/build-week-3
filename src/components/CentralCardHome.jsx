import { Button, Container, CloseButton, Dropdown, DropdownButton, Alert } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { BiMessageRoundedDetail, BiWorld } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { getPostFetch } from "../redux/actions";
import React, { useState } from "react";
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
        <div className="d-flex justify-content-between align-items-start">
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
          {profile?._id === post?.user?._id && (
            <Dropdown>
              <Dropdown.Toggle className="dropdown-custom border-0 threeDots" id="dropdown-basic">
                <BsThreeDots className="text-secondary" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="pt-2 pb-1">
                <Dropdown.Item href="#/action-1">
                  <Button variant="outline-secondary" className="border-0 " onClick={pencilOnclick}>
                    <BiPencil className=" fs-2 pe-2" />
                    Modifica il post
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Button variant="outline-secondary" className="border-0 " onClick={() => deletePost()}>
                    <BsTrash className=" fs-2 pe-2" />
                    Elimina il post
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>

        <div>
          <p className="numbers ps-3">{post?.text}</p>
          {post?.image ? (
            <div className="text-center">
              <img src={post?.image} alt="Post-pic" width={500} height={250} style={{ objectFit: "cover" }} />
            </div>
          ) : (
            <Alert variant="warning">Questo post non ha un'immagine</Alert>
          )}
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
          {/* {profile?._id === post?.user?._id && (
            <Button variant="outline-secondary" className="border-0" onClick={() => deletePost()}>
              <BsTrash className=" fs-4" />
            </Button>
          )}
          {profile?._id === post?.user?._id && (
            <Button variant="outline-secondary" className="border-0" onClick={pencilOnclick}>
              <BiPencil className=" fs-4" />
            </Button>
          )} */}
        </div>
      </Container>
      {/* {modificaPost && <ModalModPost show={modificaPost} onHide={() => setModificaPost(false)} />} */}
    </>
  );
};

export default CentralCardHome;

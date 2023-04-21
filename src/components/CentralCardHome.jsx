import {
  Button,
  Container,
  CloseButton,
  Dropdown,
  DropdownButton,
  Alert,
  InputGroup,
  FormControl,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { BiMessageRoundedDetail, BiWorld } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { TiThumbsUp } from "react-icons/ti";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { getCommentFetch, getPostFetch } from "../redux/actions";
import React, { useEffect, useState } from "react";
import ModalModPost from "./ModalModPost";
import { useNavigate } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import { BsPlayBtnFill } from "react-icons/bs";
import { MdNotes } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";

const CentralCardHome = ({ post, setModificaPost, setSelectPost }) => {
  const navigate = useNavigate();
  let profile = useSelector(state => state.profile.content);

  let dispatch = useDispatch();
  let [commento, setCommento] = useState(false);
  let [totalComments, setTotalComments] = useState([]);
  let [text, setText] = useState("");
  let [spinner, setSpinner] = useState(false);

  // useEffect(() => {
  //   getCommentFetch();
  //   console.log(totalComments);
  // }, []);
  totalComments.length > 0 && console.log(totalComments);

  const getCommentFetch = async () => {
    setSpinner(true);
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${post._id}`;
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyODNkYzQ1NWZkYjAwMTQ3MzMwZTkiLCJpYXQiOjE2ODIwODA3MzIsImV4cCI6MTY4MzI5MDMzMn0.wx-UOTmYWcM6hSxrSS6bSWGZrFOSM6IJntWQdJoU0_Y",
      },
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        setTotalComments(dato);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    postCommetsFetch();
  };
  const postCommetsFetch = async () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyODNkYzQ1NWZkYjAwMTQ3MzMwZTkiLCJpYXQiOjE2ODIwODA3MzIsImV4cCI6MTY4MzI5MDMzMn0.wx-UOTmYWcM6hSxrSS6bSWGZrFOSM6IJntWQdJoU0_Y",
      },
      body: JSON.stringify({
        comment: text,
        rate: "1",
        elementId: post._id,
      }),
    };
    try {
      let risposta = await fetch(URL, headers);
      if (risposta.ok) {
        let dato = await risposta.json();
        setTotalComments(dato);
      }
    } catch (error) {
      console.log(error);
    } finally {
      getCommentFetch();
    }
  };

  let pencilOnclick = () => {
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
      <Container fluid className="bg-white border border-1 rounded pt-3 pb-1 mt-3 mb-4">
        <div className="px-2 d-flex justify-content-between align-items-center">
          <div>
            <img
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
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
          <div
            className="d-flex justify-content-start align-items-center ms-2"
            onClick={() => {
              navigate(`/profileDetails/${post?.user?._id}`);
            }}
          >
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
                <Dropdown.Item>
                  <Button variant="outline-secondary" className="border-0 " onClick={pencilOnclick}>
                    <BiPencil className=" fs-2 pe-2" />
                    Modifica il post
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item>
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
          {post?.image && (
            <div className="text-center">
              <img src={post?.image} alt="Post-pic" width={500} height={250} style={{ objectFit: "cover" }} />
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3 pe-3 mb-0">
          <div className="d-flex align-items-center px-3 mt-3">
            <TiThumbsUp className="thumb fs-5 me-2" />
            <p className="numbers fw-normal text-secondary mb-0">Francesco Cacciapuoti e altri</p>
          </div>
          <p className="numbers fw-normal text-secondary mb-0 mt-3">5 Commenti &#183; 10 diffusioni post</p>
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
            <Button
              id="iconCentralCardHome"
              variant="light"
              className="mb-0 ms-2 d-flex"
              onClick={() => {
                setCommento(true);
                getCommentFetch();
              }}
            >
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
        </div>
        {commento && (
          <div className="bg-white border-0 rounded pb-3 pt-0 ps-2 mb-3">
            <div className="d-flex justify-content-start align-items-center ms-2 mt-3 mb-0">
              <div
                className="profile-pic mb-1"
                style={{
                  backgroundImage: `url(${profile?.image})`,
                }}
              ></div>
              <div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="d-flex justify-content-between align-items-center">
                    <Form.Control
                      style={{ width: "450px", padding: "10px" }}
                      className="input rounded-pill ms-2 border border-1 text-secondary fw-light numbers"
                      placeholder="Aggiungi un commento..."
                      type="text"
                      value={text}
                      onChange={e => setText(e.target.value)}
                    />
                    <div className="d-flex justify-content-between align-items-center ms-2 gap-2">
                      <FaRegSmile className="text-secondary fs-4" />
                      <AiFillPicture className="text-secondary fs-4" />
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </div>

            {spinner ? (
              <div className=" d-flex justify-content-center mt-5">
                <Spinner animation="grow" variant="primary" />
              </div>
            ) : (
              totalComments?.map(comment => {
                console.log(comment);
                return (
                  <Card className="mt-3 p-2 comments">
                    <div className="px-2 pt-2">
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className="fs-6 text-dark fw-bold">{comment?.author}</p>
                        <p className="numbers text-secondary fw-light">
                          {new Date(comment?.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <p>{comment?.comment}</p>
                    </div>
                  </Card>
                );
              })
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default CentralCardHome;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiSuitcaseFill } from "react-icons/ri";
import { BsChatRightDotsFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AziendeSideBar from "./AziendeSideBar";
import { CgMenuGridR } from "react-icons/cg";
import { getQueryJobFetch } from "../redux/actions";

function MyNavBar() {
  let profile = useSelector(state => state.profile.content);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [filtro, setFiltro] = useState("generale");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (filtro === "generale") {
      dispatch(getQueryJobFetch("search", query));
    } else if (filtro === "azienda") {
      dispatch(getQueryJobFetch("company", query));
    } else if (filtro === "categoria") {
      dispatch(getQueryJobFetch("category", query));
    }
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link to="/">
          <BsLinkedin className="text-primary fs-1 me-2" />
        </Link>
        <Dropdown className="m-0">
          <Dropdown.Toggle className="dropdown-custom border-0 p-0" id="dropdown-basic">
            <div className="fake-input bg-white text-dark pe-5 form-control d-flex">
              <span>Cerca</span>{" "}
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-width px-3">
            <div className="d-flex justify-content-center align-items-center">
              <Form className="w-75 my-3" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder={`Ricerca ${filtro}`}
                    defaultValue={query}
                    onCange={e => {
                      setQuery(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <Dropdown className="mt-0 ms-2">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {filtro}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    {" "}
                    <button className="btn" onClick={() => setFiltro("generale")}>
                      Generale
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className="btn" onClick={() => setFiltro("azienda")}>
                      Azienda
                    </button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className="btn" onClick={() => setFiltro("categoria")}>
                      Categoria
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="mx-auto my-2 my-lg-0 gap-5" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/" className="d-flex flex-column align-items-center nav-link">
              <AiFillHome className="text-secondary fs-3" />
              <span className="fs-6 text-decoration-none">Home</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <IoMdContacts className="text-secondary fs-3" />
              <span>Rete</span>
            </Link>
            <Link to="/jobs" className="d-flex flex-column align-items-center nav-link">
              <RiSuitcaseFill className="text-secondary fs-3" />
              <span>Lavoro</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <BsChatRightDotsFill className="text-secondary fs-3" />
              <span>Messaggistica</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <BsBellFill className="text-secondary fs-3" />
              <span>Notifiche</span>
            </Link>

            <span className="d-flex flex-column align-items-center nav-link">
              <div
                className="profileImg"
                style={{
                  backgroundImage: `url(${profile?.image})`,
                }}
              ></div>
              <Dropdown className="dropdown">
                <Dropdown.Toggle variant="outline dark" id="dropdown-basic" className="py-0 text-secondary">
                  Tu
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownMenu" align="end" id="dropdown-menu-align-end">
                  <Dropdown.Item to="#/action-1" className="d-flex align-items-start">
                    <div
                      className="profileImgDropDown"
                      style={{
                        backgroundImage: `url(${profile?.image})`,
                      }}
                    ></div>
                    <div className="d-flex flex-column align-items-start ms-3 mb-0">
                      <p className="mb-0">{profile?.name + " " + profile?.surname}</p>

                      <small>{profile?.area}</small>

                      <Link to="/profile">
                        <button className="btnProfile rounded-5 border border-primary fw-bold text-primary mt-4 text-center">
                          Visualizza Profilo
                        </button>
                      </Link>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item to="#/action-2">
                    <h5 className="mt-3">Account</h5>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="/" className="text-secondary">
                        Impostazioni e privacy
                      </Link>
                    </p>
                    <p>
                      <Link to="/" style={{ textDecoration: "none" }} className="text-secondary">
                        Guida
                      </Link>
                    </p>
                    <p>
                      <Link to="/" style={{ textDecoration: "none" }} className="text-secondary">
                        Lingua
                      </Link>
                    </p>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item to="#/action-3">
                    <h5>Gestisci</h5>
                    <p>
                      <Link to="/" style={{ textDecoration: "none" }} className="text-secondary">
                        Post e attività
                      </Link>
                    </p>
                    <p>
                      <Link to="/" style={{ textDecoration: "none" }} className="text-secondary">
                        Account per la pubblicazione di offerte
                      </Link>
                    </p>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item>
                    <p>
                      <Link to="/" style={{ textDecoration: "none" }} className="text-secondary">
                        Esci
                      </Link>
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <Dropdown
              className="dropdown mt-1 py-0 text-secondary mt-1"
              variant="outline dark"
              onClick={() => {
                setShowSubMenu(!showSubMenu);
              }}
              id="dropdown-basic"
            >
              <div className="d-flex flex-column align-items-center">
                <CgMenuGridR className="text-secondary fs-2" />
                <Dropdown.Toggle variant="outline dark" id="dropdown-basic" className="py-0 text-secondary">
                  Per le aziende
                </Dropdown.Toggle>
              </div>

              {/* {(onClick = { handleSubMenu })} */}
              {showSubMenu && <AziendeSideBar />}
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//
export default MyNavBar;

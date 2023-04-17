import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiSuitcaseFill } from "react-icons/ri";
import { BsChatRightDotsFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand to="/">
          <BsLinkedin className="text-primary fs-1" />
        </Navbar.Brand>
        <Form.Control type="search" placeholder="Search" className="me-2 w-25" aria-label="Search" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="mx-auto my-2 my-lg-0 gap-5" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/" className="d-flex flex-column align-items-center nav-link">
              <AiFillHome className="text-secondary fs-3" />
              <span className="fs-6 text-decoration-none">Home</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <IoMdContacts className="text-secondary fs-3" />
              <span>Network</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <RiSuitcaseFill className="text-secondary fs-3" />
              <span>Job</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <BsChatRightDotsFill className="text-secondary fs-3" />
              <span>Chat</span>
            </Link>
            <Link to="/network" className="d-flex flex-column align-items-center nav-link">
              <BsBellFill className="text-secondary fs-3" />
              <span>Notificatios</span>
            </Link>
            <span className="d-flex flex-column align-items-center  nav-link">
              <Dropdown>
                <Dropdown.Toggle variant="outline dark" id="dropdown-basic" className="py-0">
                  <RxAvatar className="text-secondary fs-3 d-block" />
                  You
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item to="#/action-1" className="d-flex">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png"
                      alt="avatar"
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                    <div className="d-flex flex-column">
                      <p>Antonello Buonaguidi</p>
                      <p>IT Junior softaware developer full-stack</p>
                      <button className="rounded border border-primary text-primary">Visualizza Profilo</button>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item to="#/action-2">
                    <h5>Account</h5>
                    <Link to="/">Impostazioni e privacy</Link>
                    <Link to="/">Guida</Link>
                    <Link to="/">Lingua</Link>
                  </Dropdown.Item>
                  <Dropdown.Item to="#/action-3">
                    <h5>Gestisci</h5>
                    <Link to="/">Post e attività</Link>
                    <Link to="/">Account per la pubblicazione di offerte</Link>
                    <Link to="/">Esci</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;

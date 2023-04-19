import { Card, ListGroup, Button, Dropdown } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CollapseNews from "./CollapseNews";
import { useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaKey, FaCaretDown, FaLinkedin } from "react-icons/fa";
import logo from "../linkedin.png";
const Notizie = () => {
  let profile = useSelector(state => state.profile.content);
  return (
    <>
      <Card className="px-2 pb-3" style={{ width: "20rem" }}>
        <div className="d-flex justify-content-between align-items-center px-3 py-3">
          <Card.Title className="mb-0 fs-6 fw-bold">LinkedIn Notizie</Card.Title>
          <BsInfoSquareFill />
        </div>
        <ul className="list-group-flush">
          <li className="pt-3 pb-1">
            <Link className="text-decoration-none">
              <p className="numbers text-dark fw-bold mb-0 text-truncate">Tassi sui mutui al 4%</p>
              <small className="numbers text-secondary ">2 ore fa</small>
            </Link>
          </li>
          <li className="pt-3 pb-1">
            <Link className="text-decoration-none">
              <p className="numbers text-dark fw-bold mb-0 text-truncate">
                Un nuovo modello contrattuale per la ricerca
              </p>
              <small className="numbers text-secondary ">13 ore fa</small>
            </Link>
          </li>
          <li className="pt-3 pb-1">
            <Link className="text-decoration-none">
              <p className="numbers text-dark fw-bold mb-0 text-truncate">Frena il venture capital</p>
              <small className="numbers text-secondary ">20 ore fa</small>
            </Link>
          </li>
          <li className="pt-3 pb-1">
            <Link className="text-decoration-none">
              <p className="numbers text-dark fw-bold mb-0 text-truncate">L'importanza del mettersi in ascolto</p>
              <small className="numbers text-secondary ">1 giorno fa</small>
            </Link>
          </li>
          <li className="pt-3 pb-1">
            <Link className="text-decoration-none">
              <p className="numbers text-dark fw-bold mb-0 text-truncate">Come si posiziona il soft power italiano</p>
              <small className="numbers text-secondary ">20 ore fa</small>
            </Link>
          </li>
        </ul>
        <CollapseNews />
      </Card>

      <Card className="mt-2 pb-4" style={{ width: "20rem" }}>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="pt-3 pb-1">
            <p className="numbers text-end">
              Annuncio
              <BsThreeDots className="ms-2" />
            </p>
            <p className="numbers text-center">{profile?.name}, restart your Premium free trial today!</p>
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="profile-pic me-4"
                style={{
                  backgroundImage: `url(${profile?.image})`,
                }}
              ></div>
              <FaKey className="fs-1 text-primary" />
            </div>
            <p className="text-center fs-6 mt-3">See who's viewed your profile in the last 90 days</p>
            <div className="text-center">
              <Button className="rounded-5 border border-primary btn-light text-primary ms-3 fw-bold fs-6 ">
                Restart Trial
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <div className="d-flex justify-content-around align-items-center mt-4 text-center footer">
        <ul className="list numbers text-secondary ">
          <div className="d-flex justify-content-around">
            <li>Informazioni</li>
            <li>Accessibilità</li>
          </div>

          <li>Centro Assistenza</li>
          <li>
            Privacy e condizioni
            <FaCaretDown />
          </li>
          <li className="me-2 sentence">Opzioni per gli annunci pubblicitari</li>
          <div className="d-flex justify-content-around">
            <li>Pubblicità</li>
            <li>
              Servizi alle aziende <FaCaretDown />
            </li>
          </div>
          <div className="d-flex justify-content-around">
            <li>Scarica l'app LinkedIn</li>
            <li>Altro</li>
          </div>
        </ul>
      </div>
      <div className="footerText">
        <div className=" mb-5">
          <p className="text-center numbers mb-0 ">
            <img
              className="me-2"
              src={logo}
              width={55}
              height={15}
              alt="LinkedIn logo"
              style={{ objectFit: "contain" }}
            />
            LinkedIn Corporation &#169; 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Notizie;

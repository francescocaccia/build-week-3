import { FaCaretDown, FaLinkedin } from "react-icons/fa";
import logo from "../linkedin.png";
import { BsThreeDots } from "react-icons/bs";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
const JobsRightPage = () => {
  let profile = useSelector(state => state.profile.content);
  return (
    <div className="my-sticky">
      <Card className="pb-4">
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
              <FaLinkedin className="fs-1 text-warning" />
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
    </div>
  );
};

export default JobsRightPage;

import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalExperience from "./ModalExperience";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { MY_PROFILE_TRUE } from "../redux/actions";

const Esperienza = () => {
  const navigate = useNavigate();
  let [EsperienzaModale, setEsperienzaModale] = useState(false);
  let [EsperienzaProfile, setEsperienzaProfile] = useState([]);
  let experience = useSelector(state => state.profile.experience);
  let spinner = useSelector(state => state.spinner.spinnerEsperienza);
  const dispatch = useDispatch();
  const location = useLocation();
  const profileLocation = location.pathname;
  useEffect(() => {
    console.log("esperienza Profilo", EsperienzaProfile);

    console.log("esperienzagenerale", experience);
    let esperienzaProfilo = [];
    if (experience.length > 3) {
      for (let i = 0; i <= 2; i++) {
        console.log(i);
        esperienzaProfilo.push(experience[i]);
        setEsperienzaProfile(esperienzaProfilo);
      }
      console.log("esperienza Profilo", EsperienzaProfile);
    }
  }, [experience]);

  return (
    <Container className="bg-white border border-2 mt-2 rounded pt-3 ps-4 py-3">
      <Row>
        <Col className="d-flex justify-content-between" xs={12} md={12}>
          <h5 className="fw-semibold fs-4">Esperienza</h5>
          {profileLocation === "/profile" && (
            <div>
              <Button
                variant={"outline-dark"}
                className="border-0"
                onClick={() => {
                  setEsperienzaModale(true);
                }}
              >
                <AiOutlinePlus className="fs-3 " />
              </Button>
            </div>
          )}
        </Col>

        {!spinner &&
          experience.length > 0 &&
          experience.length <= 3 &&
          experience.map(esperienza => (
            <SingleExperience
              profileLocation={profileLocation === "/profile"}
              key={esperienza._id}
              esperienza={esperienza}
            />
          ))}
        {!spinner && experience.length > 3 && (
          <>
            {EsperienzaProfile.map(esperienza => (
              <SingleExperience
                key={esperienza?._id}
                profileLocation={profileLocation === "/profile"}
                esperienza={esperienza}
              />
            ))}
            <Button
              variant="primary"
              onClick={() => {
                dispatch({ type: "MY_PROFILE_TRUE", payload: profileLocation === "/profile" });
                navigate("/experiences");
              }}
            >
              Visualizza tutte le esperienze ({experience.length})
            </Button>
          </>
        )}

        {spinner && (
          <div className=" d-flex justify-content-center mt-5">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}
      </Row>
      {EsperienzaModale && (
        <ModalExperience
          show={EsperienzaModale}
          onHide={() => setEsperienzaModale(false)}
          setEsperienzaModale={setEsperienzaModale}
        />
      )}
    </Container>
  );
};

export default Esperienza;

import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobsCollapse from "./JobsCollapse";
import { BsArrowRight, BsBookmark } from "react-icons/bs";
import { GiArrowScope } from "react-icons/gi";

const JobsCentralPage = () => {
  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h3>Ricerche di offerte di lavoro recenti</h3>
          <Button variant="light" id="buttonJobs">
            Cancella
          </Button>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Link className="text-decoration-none text-dark">
              <p className="m-0 fw-semibold">
                junior developer ·<small className="text-success fw-semibold"> 56 nuove</small>
              </p>
              <small className="text-secondary fw-semibold">Avviso attivo · luogo, esperienza minima</small>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="text-decoration-none text-dark">
              <p className="m-0 fw-semibold">
                junior developer · <small className="text-success fw-semibold"> 56 nuove</small>
              </p>
              <small className="text-secondary fw-semibold">Avviso attivo · luogo, esperienza minima</small>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link className="text-decoration-none text-dark">
              <p className="m-0 fw-semibold">
                junior developer · <small className="text-success fw-semibold"> 56 nuove</small>
              </p>
              <small className="text-secondary fw-semibold">Avviso attivo · luogo, esperienza minima</small>
            </Link>
          </ListGroup.Item>
        </ListGroup>
        <JobsCollapse />
      </Card>

      {/* +++++++++++++++++++++++++++++++++++++++ */}
      <Card className="mt-3">
        <Card.Header>
          <h4>Consigliato per te</h4>
          <p className="text-secondary ">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        </Card.Header>
        <ListGroup variant="flush">
          {/* +++++++++++ */}

          <ListGroup.Item className="d-flex justify-content-between ">
            <div className="d-flex">
              <img
                src="https://www.mondo-grafica.com/wp-content/uploads/2020/05/3-1.jpg"
                alt="abstrat_logo"
                height={80}
                width={80}
              />
              <Link className="text-decoration-none ">
                <p className="m-0 fw-semibold">Developer React JS</p>
                <p className="text-dark mb-0">Amiltone</p>
                <p className="text-secondary">
                  {" "}
                  <GiArrowScope className="text-success fs-4" /> Avviso attivo · luogo, esperienza minima
                </p>
              </Link>
            </div>
            <div>
              <BsBookmark className="fs-4 text-secondary" />
            </div>
          </ListGroup.Item>

          {/* ++++++++++++++++++++ */}

          <ListGroup.Item className="d-flex justify-content-between ">
            <div className="d-flex">
              <img
                src="https://www.mondo-grafica.com/wp-content/uploads/2020/05/3-1.jpg"
                alt="abstrat_logo"
                height={80}
                width={80}
              />
              <Link className="text-decoration-none ">
                <p className="m-0 fw-semibold">Developer React JS</p>
                <p className="text-dark mb-0">Amiltone</p>
                <p className="text-secondary">
                  {" "}
                  <GiArrowScope className="text-success fs-4" /> Avviso attivo · luogo, esperienza minima
                </p>
              </Link>
            </div>
            <div>
              <BsBookmark className="fs-4 text-secondary" />
            </div>
          </ListGroup.Item>

          {/* +++++++++++++ */}
          <ListGroup.Item className="d-flex justify-content-between ">
            <div className="d-flex">
              <img
                src="https://www.mondo-grafica.com/wp-content/uploads/2020/05/3-1.jpg"
                alt="abstrat_logo"
                height={80}
                width={80}
              />
              <Link className="text-decoration-none ">
                <p className="m-0 fw-semibold">Developer React JS</p>
                <p className="text-dark mb-0">Amiltone</p>
                <p className="text-secondary">
                  <GiArrowScope className="text-success fs-4" /> Avviso attivo · luogo, esperienza minima
                </p>
              </Link>
            </div>
            <div>
              <BsBookmark className="fs-4 text-secondary" />
              {/* BsBookmarkFill */}
            </div>
          </ListGroup.Item>
        </ListGroup>
        {/* ++++++++++ */}
        <span className="d-flex align-items-center justify-content-center fs-5 text-secondary mb-5">
          Mostra tutto
          <BsArrowRight />
        </span>
      </Card>
    </>
  );
};

export default JobsCentralPage;

import { Button, Card, ListGroup, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobsCollapse from "./JobsCollapse";
import { BsArrowRight, BsBookmark } from "react-icons/bs";
import { GiArrowScope } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import JobModale from "./JobModale";
import SingleJob from "./SingleJob";

const JobsCentralPage = () => {
  const totalJobs = useSelector(state => state.jobs.content?.data);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(10);

  let queryJobs = useSelector(state => state.jobs.queryJobs);
  console.log(queryJobs);

  useEffect(() => {
    if (totalJobs?.length > 0) {
      counterjobs(index);
    }
  }, [totalJobs]);
  console.log(jobs);
  const counterjobs = numProg => {
    const jobsArray = [];
    for (let i = 0; i < numProg; i++) {
      jobsArray.push(totalJobs[i]);
    }

    setJobs(jobsArray);
  };
  const handleClick = () => {
    setIndex(index + 10);
    counterjobs(index);
  };
  return (
    <>
      {queryJobs?.length > 0 && (
        <Card className="p-3 mb-4s">
          <div className="d-flex justify-content-between">
            <h4>Risultati della ricerca</h4>
            <Button variant="light" id="buttonJobs">
              Cancella
            </Button>
          </div>
          <div>
            <div>
              {queryJobs?.map(job => (
                <SingleJob job={job} />
              ))}
            </div>
          </div>
        </Card>
      )}

      <Card className="p-3">
        <div className="d-flex justify-content-between">
          <h4>Ricerche di offerte di lavoro recenti</h4>
          <Button variant="light" id="buttonJobs">
            Cancella
          </Button>
        </div>

        <div>
          {jobs?.map(job => (
            <SingleJob job={job} />
          ))}
        </div>
        {/* <JobsCollapse /> */}
        <Button className="fw-bold" variant="primary" onClick={handleClick}>
          {" "}
          Scopri di più (+10)
        </Button>
      </Card>
      {/* +++++++++++++++++++++++++++++++++++++++ */}
      <Card className="mt-3 p-3">
        <div>
          <h4>Consigliato per te</h4>
          <p className="text-secondary ">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        </div>

        {/* +++++++++++ */}

        <ListGroup.Item className="d-flex justify-content-between">
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
          </div>
        </ListGroup.Item>
        <hr />
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
        <hr />
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
        <hr />

        {/* ++++++++++ */}
        <span className="d-flex align-items-center justify-content-center fs-5 text-secondary mb-0">
          Mostra tutto
          <BsArrowRight className="ms-2" />
        </span>
      </Card>
    </>
  );
};

export default JobsCentralPage;

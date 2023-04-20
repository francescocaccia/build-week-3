import React, { useState } from "react";
import { Badge, Button, Collapse, ListGroup } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsCollapse = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        className={`buttonCollapse text-secondary p-2 d-flex justify-content-center  fs-6 fw-bold px-4 mb-0 ${
          open && "d-none"
        }`}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <Button id="BadgeJobs" className="fs-6">
          <span className="fw-semibold">Vedi altro</span> <FaChevronDown className="ms-1 fs-5" />
        </Button>
      </Link>

      <Collapse className="mt-0" in={open}>
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
      </Collapse>
      <Link
        style={{ textDecoration: "none" }}
        className={`buttonCollapse text-secondary p-2 d-flex justify-content-center fs-6 fw-bold px-4 mb-0 ${
          !open && "d-none"
        }`}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <Button id="BadgeJobs" className="fs-6 ">
          <span className="fw-semibold">Meno dettagli</span> <FaChevronUp className="ms-1 fs-5" />
        </Button>
      </Link>
    </>
  );
};

export default JobsCollapse;

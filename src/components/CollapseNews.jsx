import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CollapseNews = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        className={`buttonCollapse text-secondary fs-6 fw-bold px-4 mb-0 ${open && "d-none"}`}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Visualizza altro
        <FaChevronDown className="ms-1" />
      </Link>

      <Collapse className="mt-0" in={open}>
        <div id="example-collapse-text">
          <ul className="list-group-flush">
            <li className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-dark fw-bold mb-0 text-truncate">Le Top Companies del 2023 in Italia</p>
                <small className="numbers text-secondary ">Notizie principali &#183; 142 lettori </small>
              </Link>
            </li>
            <li className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-dark fw-bold mb-0 text-truncate">Che cosa succede al Salone del Mobile</p>
                <small className="numbers text-secondary ">1 ora fa &#183; 364 lettori </small>
              </Link>
            </li>
            <li className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-dark fw-bold mb-0 text-truncate">Scaldare le case con la grappa</p>
                <small className="numbers text-secondary ">1 ora fa &#183; 639 lettori </small>
              </Link>
            </li>
            <li className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-dark fw-bold mb-0 text-truncate">Ucraina: gli ultimi aggiornamenti</p>
                <small className="numbers text-secondary ">4 giorni fa &#183; 246 lettori </small>
              </Link>
            </li>
            <li className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-dark fw-bold mb-0 text-truncate">
                  SONDAGGIO: cosa guardi di un'azienda quando cerchi lavoro?
                </p>
                <small className="numbers text-secondary ">4 giorni fa &#183; 246 lettori </small>
              </Link>
            </li>
          </ul>
        </div>
      </Collapse>
      <Link
        style={{ textDecoration: "none" }}
        className={`buttonCollapse text-secondary fs-6 fw-bold px-4 mb-0 ${!open && "d-none"}`}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Meno dettagli
        <FaChevronUp className="ms-1" />
      </Link>
    </>
  );
};

export default CollapseNews;

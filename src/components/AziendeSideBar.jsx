import { useState } from "react";
import { Nav, CloseButton, Card, Button } from "react-bootstrap";
import { ImPlay } from "react-icons/im";
import { BsFileEarmarkBarGraphFill, BsPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaCheck, FaCompass } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const AziendeSideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleSidebarClose = () => {
    setShowSidebar(false);
  };

  return (
    <>
      {showSidebar && (
        <div className="side-bar ">
          <Nav className="flex-column" id="sidebar-menu">
            <div className="d-flex justify-content-between align-items-center pt-4 px-4">
              <h6 className="fs-4 text-dark">Per le aziende</h6>
              <CloseButton variant="dark" onClick={handleSidebarClose} />
            </div>
            <Card className="my-3 mx-4">
              <Card.Header className="py-3 text-dark fw-bold fs-6">Scopri altri prodotti LinkedIn</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul className="list d-flex flex-wrap justify-content-between align-items-center">
                    <li className="m-2 align-items-center" variant=".bg-white">
                      <ImPlay className="fs-3 text-primary" />
                      <p>
                        <small>Learning</small>
                      </p>
                    </li>
                    <li className="m-2" variant=".bg-white">
                      <BsFileEarmarkBarGraphFill className="fs-3 text-primary" />
                      <p>
                        <small>Insights</small>
                      </p>
                    </li>
                    <li className="m-2" variant=".bg-white">
                      <MdAssignment className="fs-3 text-primary" />
                      <p>
                        <small>Pubblica un'offerta di lavoro</small>
                      </p>
                    </li>
                    <li className="mx-2" variant=".bg-white">
                      <TbTargetArrow className="fs-3 text-primary" />
                      <p>
                        <small>Pubblicizza</small>
                      </p>
                    </li>
                    <li className="m-2" variant=".bg-white">
                      <FaCompass className="fs-3 text-primary" />
                      <p>
                        <small>Trova lead</small>
                      </p>
                    </li>
                    <li className="m-2" variant=".bg-white">
                      <BsPeopleFill className="fs-3 text-primary" />
                      <p>
                        <small>Gruppi</small>
                      </p>
                    </li>
                    <li className="m-2" variant=".bg-white">
                      <FaCheck className="fs-3 text-primary" />
                      <p>
                        <small>Marketplace dei servizi</small>
                      </p>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-3 mx-4">
              <Card.Header className="py-3 text-dark fw-bold fs-6">Assistenza alle aziende di LinkedIn</Card.Header>
              <Card.Body>
                <Link className="text-dark" style={{ textDecoration: "none" }}>
                  <Card.Title className="mb-0 fs-6 fw-semibold">Talent Solutions</Card.Title>
                  <Card.Text className="fs-6 mb-2 text-secondary">
                    <small>Trova, attrai assumi</small>{" "}
                  </Card.Text>
                </Link>
                <Link className="text-dark" e style={{ textDecoration: "none" }}>
                  <Card.Title className="mb-0 fs-6 fw-semibold">Sales Solution</Card.Title>
                  <Card.Text className="fs-6 mb-2 text-secondary">
                    <small> Sblocca nuove opportunità di vendita</small>
                  </Card.Text>
                </Link>
                <Link className="text-dark" style={{ textDecoration: "none" }}>
                  <Card.Title className="mb-0 fs-6 fw-semibold">Pubblica offerta di lavoro gratuita</Card.Title>
                  <Card.Text className="fs-6 mb-2 text-secondary">
                    <small>Raggiungi i migliori candidati con la tua offerta di lavoro</small>
                  </Card.Text>
                </Link>
                <Link className="text-dark" e style={{ textDecoration: "none" }}>
                  <Card.Title className="mb-0 fs-6 fw-semibold">Marketing Solutions</Card.Title>
                  <Card.Text className="fs-6 mb-2 text-secondary">
                    <small> Acquisisci clienti e fai crescere la tua azienda</small>
                  </Card.Text>
                </Link>
                <Link className="text-dark" e style={{ textDecoration: "none" }}>
                  <Card.Title className="mb-0 fs-6 fw-semibold">Learning Solutions</Card.Title>
                  <Card.Text className="fs-6 mb-2 text-secondary">
                    <small>Promuovi l'acquisizione di competenze nella tua organizzazione</small>
                  </Card.Text>
                </Link>
              </Card.Body>
              <Card.Footer className="py-3 text-dark fw-bold fs-6">
                <small>Crea una pagina aziendale</small>
                <BiPlus className="fs-5 ms-2" />
              </Card.Footer>
            </Card>
          </Nav>
        </div>
      )}
    </>
  );
};

export default AziendeSideBar;

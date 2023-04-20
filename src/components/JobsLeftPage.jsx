import { Button, Card, Container } from "react-bootstrap";
import { BsBookmarkFill, BsClipboard2Check, BsFillPlayBtnFill, BsPencilSquare } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const JobsLeftPage = () => {
  return (
    <>
      <Card className="p-4">
        <div className="d-flex align-items-center mt-2">
          <BsBookmarkFill className="mx-1 fs-4 text-secondary" />
          <p className="fw-semibold fs-normal mx-2 mb-1">Le mie offerte di lavoro</p>
        </div>
        <div className="d-flex align-items-center mt-4">
          <FaBell className="mx-1 fs-4 text-secondary" />
          <p className="fw-semibold fs-normal mx-2 mb-1">Avvisi offerte di lavoro</p>
        </div>
        <div className="d-flex align-items-center mt-4">
          <BsClipboard2Check className="mx-1 fs-4 text-secondary" />
          <p className="fw-semibold fs-normal mx-2 mb-1">Valutazione delle competenze</p>
        </div>
        <div className="d-flex align-items-center mt-4">
          <BsFillPlayBtnFill className="mx-1 fs-4 text-secondary" />
          <p className="fw-semibold fs-normal mx-2 mb-1">Indicazioni per la ricerca di lavoro</p>
        </div>
        <div className="d-flex align-items-center mt-4">
          <MdSettings className="mx-1 fs-4 text-secondary" />
          <p className="fw-semibold fs-normal mx-2 mb-1">Impostazioni candidatura</p>
        </div>
      </Card>

      <Button id="ButtonPubblicaJobs" className="mt-3 d-flex aligh-items-center">
        <BsPencilSquare />
        <small className="ms-3 ">
          Pubblica un offerta <br /> gratuita
        </small>
      </Button>
    </>
  );
};

export default JobsLeftPage;

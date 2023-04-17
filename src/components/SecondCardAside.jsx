import { Button, ListGroup } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";

const SecondCardAside = () => {
  return (
    <ListGroup.Item className=" text-secondary d-flex justify-content-between">
      <img
        src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png"
        alt="avatar"
        width={60}
        height={60}
        className="rounded-circle"
      />
      <div>
        <h6 className="fs-6">Gabriele Praticò</h6>
        <p className="fs-6">Studente ITS Meccatronica</p>
        <Button className="rounded-5  border border-secondary btn-light text-secondary ms-3 fw-bold">
          <BsFillSendFill /> messaggio
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SecondCardAside;

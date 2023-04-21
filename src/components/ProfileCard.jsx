import { Link } from "react-router-dom";
import { FaSquare } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { Card, ListGroupItem, ListGroup, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const ProfileCard = () => {
  let profile = useSelector(state => state.profile.content);
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/R.ff3be19ebea75c72d7fd8ac60ea78608?rik=AKHdPWCm7sR53g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f8%2f1%2f465351.jpg&ehk=gTiwWaizscf0N%2fARLGhMtzE5LXZk1DMRHhdwFkriXAI%3d&risl=&pid=ImgRaw&r=0"
          height={70}
        />

        <Card.Body>
          <Link to="/profile">
            <div
              className="profile-img"
              style={{
                backgroundImage: `url(${profile?.image})`,
              }}
            ></div>
          </Link>

          <Card.Title className="pt-4 text-center fw-bold text-decoration-none">
            {profile?.name + " " + profile?.surname}
          </Card.Title>
          <Card.Text className="text-center fw-light text-decoration-none">{profile?.title}</Card.Text>
        </Card.Body>

        <hr />
        <ListGroupItem className="list-group-flush px-3 pb-1">
          <ListGroup.Item className="pt-3 pb-1">
            <Link className="d-flex justify-content-between align-items-center text-decoration-none">
              <p className="numbers mb-0 text-secondary fw-bold">Chi ha visitato il tuo profilo?</p>
              <span className="numbers fw-bold">29</span>
            </Link>
            <Link className="d-flex justify-content-between align-items-center text-decoration-none">
              <p className="numbers mb-0 text-secondary fw-bold">Collegamenti</p>
              <span className="numbers fw-bold">327</span>
            </Link>
            <p className="numbers fw-bold">Espandi la tua rete</p>
          </ListGroup.Item>
          <hr className="flex-fill" />
          <ListGroup.Item className="pt-3 pb-1">
            <Link className="d-flex justify-content-between align-items-center text-decoration-none">
              <p className="numbers mb-0 text-secondary fw-bold">Accedi a strumenti e informazioni in esclusiva</p>
            </Link>
            <Link>
              <p className="numbers gratis text-dark fw-bold">
                <FaSquare className="me-1 fs-6 text-warning" />
                Prova di nuovo Premium gratis
              </p>
            </Link>
          </ListGroup.Item>
          <hr className="flex-fill" />
          <ListGroup.Item className="pt-3 pb-1">
            <Link className="d-flex justify-content-between align-items-center text-decoration-none">
              <p className="numbers mb-0 pb-2 text-dark fw-bold">
                <BsBookmarkFill className="me-2 text-secondary" />I miei elementi
              </p>
            </Link>
          </ListGroup.Item>
        </ListGroupItem>
      </Card>
      <div className="my-sticky">
        <Card className="mt-2">
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="pt-3 pb-1">
              <Link className="text-decoration-none">
                <p className="numbers text-primary fw-bold">Gruppi</p>
              </Link>
              <Link className=" d-flex justify-content-between align-items-center text-decoration-none">
                <p className="numbers text-primary fw-bold">Eventi</p>
                <BiPlus className="mb-3 fs-5 text-secondary" />
              </Link>
              <Link className="  text-decoration-none">
                <p className="numbers text-primary fw-bold">Hashtag seguiti</p>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="pt-3 pb-1">
              <Link className="discover text-decoration-none">
                <p className=" mb-0 pb-2 text-secondary fw-bold fs-6">Scopri di più</p>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default ProfileCard;

import { Button, Card } from "react-bootstrap";
import { BiPencil, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import { profileFetch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";

const MainProfilePage = () => {
  const dispatch = useDispatch();
  let profile = useSelector(state => state.profile.content);
  useEffect(() => {
    dispatch(profileFetch());
  }, []);
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <>
      <Card className=" position-relative ">
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/R.ff3be19ebea75c72d7fd8ac60ea78608?rik=AKHdPWCm7sR53g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f8%2f1%2f465351.jpg&ehk=gTiwWaizscf0N%2fARLGhMtzE5LXZk1DMRHhdwFkriXAI%3d&risl=&pid=ImgRaw&r=0"
          className="vh-25
        "
        />
        <Button
          variant="light"
          className="position-absolute top-0 end-0 bg-white px-2 pb-2 pt-0 fs-5 rounded-5 mt-3 me-3 "
        >
          <AiFillCamera />
        </Button>
        <div
          className="profile_img"
          style={{
            backgroundImage: `url(${profile?.image})`,
          }}
        ></div>

        <div className="d-flex justify-content-end mb-3">
          <Button variant="outline-dark" className="border-0 mt-2 me-2">
            <BiPencil className="fs-3" />
          </Button>
        </div>
        <div className="my_card_body ms-4 mb-3">
          <Card.Title className="fs-1">{profile?.name + " " + profile?.surname}</Card.Title>
          <Card.Text className="m-0">{profile?.title}</Card.Text>
          <Card.Text className="m-0">{profile?.bio}</Card.Text>
          <Card.Text className="d-inline">{profile?.area} ─</Card.Text>
          <span className="text-primary"> Informazioni di contatto</span>
          <p className="text-primary mb-0 mt-3 fw-bold">1 collegamento</p>
        </div>
        <div className="d-flex mx-4 mb-3">
          <Button className="rounded-5 border fw-bold">Disponibile per</Button>
          <Button className="rounded-5 border border-primary btn-light text-primary ms-3 fw-bold">
            Aggiungi sezione del profilo
          </Button>
          <Button
            variant="light"
            className=" d-none d-md-inline rounded-5 border border-dark btn-light text-secondary border-secondary ms-3 fw-bold"
          >
            Altro
          </Button>
          <Button
            variant="light"
            className="  d-md-none rounded-5 border border-dark btn-light text-secondary border-secondary ms-3 fw-bold"
          >
            <BiDotsHorizontalRounded />
          </Button>
        </div>
      </Card>
      <ConsigliatoPerTe />
      <Analisi />
    </>
  );
};

export default MainProfilePage;

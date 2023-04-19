import { Button, Container, CloseButton } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { BiMessageRoundedDetail, BiWorld } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

const CentralCardHome = ({ post }) => {
  let profile = useSelector(state => state.profile.content);

  return (
    <>
      <Container fluid className="bg-white border border-1 rounded pt-3 mb-4">
        <div className="px-2 d-flex justify-content-between align-items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Profile-pic"
              width={25}
              height={25}
              className="rounded-circle"
            />
            <small className="ms-2 numbers">
              Consigliato da <strong>Alice Lazzeri</strong>
            </small>
          </div>
          <div className="d-flex align-items-center">
            <BsThreeDots className="text-secondary me-2" />
            <CloseButton />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-start align-items-center ms-2">
          <div
            className="profile-pic mb-3"
            style={{
              backgroundImage: `url(${post?.user?.image})`,
            }}
          ></div>
          <div className="ms-2">
            <p className="numbers fw-bold my-0">
              {post?.user?.name} {post?.user?.surname}
            </p>
            <p className="my-0 text-secondary">
              <small>
                {post?.user?.title} | {post?.user?.area}
              </small>
            </p>
            <p className="mt-0 text-secondary">
              <small>
                6 giorni &#183;
                <BiWorld className="ms-1" />
              </small>
            </p>
          </div>
        </div>
        <div>
          <p className="numbers ps-3">{post?.text}</p>
          <div className="text-center">
            <img
              src="https://www.dossierscuola.it/wp-content/uploads/2020/10/coding-significato.jpg"
              alt="Post-pic"
              width={500}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-3 mb-4">
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <SlLike className="text-secondary fs-4 mx-1" />
              <p className="text-secondary fw-semibold ms-2">Consiglia</p>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <BiMessageRoundedDetail className="text-secondary fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Commenta</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 d-flex">
              <HiOutlineArrowPathRoundedSquare className="text-secondary fs-4 mx-1" />
              <span className="text-secondary fw-semibold ms-2">Diffondi il post</span>
            </Button>
          </div>
          <div id="iconCentralCardHome">
            <Button id="iconCentralCardHome" variant="light" className="mb-0 ms-2 mx-1 d-flex">
              <RiSendPlaneFill className="text-secondary fs-4" />
              <span className="text-secondary fw-semibold ms-2">Scrivi</span>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CentralCardHome;

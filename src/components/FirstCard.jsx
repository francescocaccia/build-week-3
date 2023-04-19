import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstCard = () => {
  return (
    <>
      <Col xs={12} md={6}>
        <img
          src="https://www.shutterstock.com/image-vector/talent-bulb-word-cloud-concept-260nw-320761583.jpg"
          alt="talent_logo"
          className="rounded-circle"
          width={100}
          height={100}
        />
        <Link style={{ textDecoration: "none" }}>Software Engineer 💻</Link>
        <p>sapiente magnam laborum qusequi omnis optio. Eveniet, sint.</p>
        <Link style={{ textDecoration: "none" }}>Per saperne di più</Link>
      </Col>

      <Col xs={12} md={6}>
        <img
          src="https://media.licdn.com/dms/image/C5112AQE1GRp1EditFQ/article-cover_image-shrink_600_2000/0/1520161982525?e=2147483647&v=beta&t=HBNIam_Ad6iD3lF--TLhStVygirueWysxJejUV7Xt1g"
          alt="HR_recruitment"
          width={100}
          height={100}
        />
        <Link style={{ textDecoration: "none" }}>Archieve extraordinary</Link>
        <p>sapiente magnam laborum qusequi omnis optio. Eveniet, sint.</p>
        <Link style={{ textDecoration: "none" }}>Per saperne di più</Link>
      </Col>
    </>
  );
};

export default FirstCard;

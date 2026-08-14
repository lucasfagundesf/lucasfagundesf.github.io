import { Container } from "./styles";
import { Button } from "../Button";
import png from "../../assets/btnIcon.svg";
import PropTypes from "prop-types";

export function Card({ img, title, desc, tags, href}) {
  return (
    <Container>
      <img className="boxImg" src={img} alt="preview site image" />

      <div className="cont">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="tags">{tags}</div>
        <div className="btn">
          <a href={href} target="blank">
            <Button title={"Live"} icon={png} />
          </a>
        </div>
        
      </div>
    </Container>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

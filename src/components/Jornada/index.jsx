import { Container } from "./styles";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import seta from "../../assets/Arrow.svg";
import circleBorder from "../../assets/circleBorder.svg";
import topic from "../../assets/topic.svg";
import { scrollTimeLine } from "../../animations/scrollTimeLine";

export function Jornada() {
  const container = useRef();
  useGSAP(
    () => {
      scrollTimeLine(container.current);
    },
    { scope: container },
  );

  return (
    <Container id="smooth-wrapper" ref={container}>
      <h2 className="title">Minha trajetória no desenvolvimento web</h2>
      <div className="timeline">
        <svg
          className="line"
          viewBox="0 0 865 5"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            className="timeline-path"
            d="M 0 2.5 H 865"
            stroke="#DA7223"
            strokeWidth="3"
          />
        </svg>
        <div className="inicio">
          <span>2021</span>
          <img className="circle" src={circleBorder} alt="circle" />
          <img src={seta} alt="seta" />
          <h2>Start</h2>
          <p>
            Primeiros passos do desenvolvimento web, aprendendo HTML, CSS e
            JavaScript.
          </p>
        </div>
        <div className="inicio">
          <span>2025</span>
          <img className="circle" src={circleBorder} alt="circle" />
          <img src={seta} alt="seta" />
          <h2>Freelance</h2>
          <p>Projetos reais para clientes</p>
          <div className="topic">
            <img src={topic} alt="topic" />
            <p className="topic-text">Brenda do Tarot</p>
          </div>
          <div className="topic">
            <img src={topic} alt="topic" />
            <p className="topic-text">Under Protection</p>
          </div>
          <div className="topic">
            <img src={topic} alt="topic" />
            <p className="topic-text">Novax Engenharia</p>
          </div>
        </div>
        <div className="inicio">
          <span>2026</span>
          <img className="circle" src={circleBorder} alt="circle" />
          <img src={seta} alt="seta" />
          <h2>Now</h2>
          <p>Projetos atuais</p>
          <div className="topic">
            <img src={topic} alt="topic" />
            <p className="topic-text">Zeragon</p>
          </div>
          <div className="topic">
            <img src={topic} alt="topic" />
            <p className="topic-point">. . .</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

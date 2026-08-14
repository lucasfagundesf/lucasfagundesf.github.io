import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useTextReveal } from "../../animations/useTextReveal";
import { useBoxReveal } from "../../animations/useBoxReveal";
import photo from "../../assets/photo.png";

export function Banner() {
  const titleRef = useTextReveal("chars");
  const introTextRef = useTextReveal("words");
  const statusTextRef = useTextReveal("words");
  const boxRef = useBoxReveal();

  return (
    <Container>
      <div className="text">
        <h1 ref={titleRef}>
          Lucas Fagundes <strong>Desenvolvedor Front-end</strong>
        </h1>
        <p ref={introTextRef}>
          Desenvolvimento de interfaces modernas, responsivas e experiências digitais com foco em performance e interação.
        </p>
        <div className="CTA">
          <Link to={"/projetos"}>
          Ver Projetos
          </Link>
          <Link to={"/contatos"}>
          Ver Contatos
          </Link>
          
        </div>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>WordPress</li>
          <li>HubSpot</li>
          <li>GSAP</li>
        </ul>
      </div>
      <div ref={boxRef} className="perfil">
        <div  className="person">
          <img src={photo} alt="Ilustração de pessoa" />
        </div>

        <div className="above">
          <div className="box"></div>
          <p ref={statusTextRef}>
            Atualmente trabalhando na construção do site <strong>Zeragon</strong>
          </p>
        </div>
      </div>
    </Container>
  );
}

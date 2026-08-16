import { Container } from "./styles";
import { Link } from "react-router-dom";
import { LuFolderCode } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
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
          Desenvolvimento de interfaces modernas e responsivas, com foco em performance, interação e experiência digital.
        </p>
        <div className="CTA">
          <Link to={"/projetos"}>
          <LuFolderCode className="icon" />
          Projetos
          </Link>
          <Link to={"/contatos"}>
          <LuContact className="icon" />
          Contato
          </Link>
          
        </div>
        
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

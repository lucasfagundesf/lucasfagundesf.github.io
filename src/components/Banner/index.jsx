import { Container } from "./styles";
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
          Ele constroi websites responsivos onde a tecnologia encontra a
          criatividade
        </p>
      </div>
      <div ref={boxRef} className="perfil">
        <div  className="person">
          <img src={photo} alt="Ilustração de pessoa" />
        </div>

        <div className="above">
          <div className="box"></div>
          <p ref={statusTextRef}>
            Atualmente trabalhando na construção de<strong>Zeragon</strong>
          </p>
        </div>
      </div>
    </Container>
  );
}

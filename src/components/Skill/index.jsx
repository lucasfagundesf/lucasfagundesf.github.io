import { Container } from "./styles.js";

export function Skill({title, list}) {
    return(
        <Container>
            <h2>{title}</h2>
            <p>{list}</p>

            <ul>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>WordPress</li>
                      <li>HubSpot</li>
                      <li>GSAP</li>
                    </ul>
        </Container>
    )

}
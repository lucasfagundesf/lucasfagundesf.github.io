import { useState } from "react";
import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import barra from "../../assets/barra.svg";
import portfolio from "../../assets/portfolio.png";
import brendadotarot from "../../assets/Brendadotarot.png";
import pomodoro from "../../assets/pomodoro.png";
import pokedex from "../../assets/pokedex.png";
import UnderProtection from "../../assets/Under_Protection.png";
import { FaHashtag } from "react-icons/fa";

export function Projetos() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <main>
        <SideMenu
          menuIsOpen={menuIsOpen}
          onCloseMenu={() => setMenuIsOpen(false)}
        />
        <Header onOpenMenu={() => setMenuIsOpen(true)} />

        <section>
          <div className="title">
            <img src={barra} alt="icone de barra" />
            <h1>projetos</h1>
          </div>
          <p>Lista dos meus projetos</p>
        </section>
        <section id="complete">
          <div className="title">
            <FaHashtag />
            <h1>projetos completos</h1>
          </div>
          <div className="projetos">
            <Card
              img={UnderProtection}
              title={"Under Protection"}
              tags={"Wordpress Elementor "}
              desc={"Site de empresa de Cyber Segurança "}
              href={"https://underprotection.com.br/"}
            />
            <Card
              img={brendadotarot}
              title={"Brenda Do tarot"}
              tags={"Wordpress Elementor "}
              desc={"Site de Taróloga com atendimento Online "}
              href={"https://brendadotarot.com.br/"}
            />
            <Card
              img={portfolio}
              title={"Portfolio"}
              tags={"React StyledComponents "}
              desc={"É onde você está acessando agora"}
            />
          </div>
        </section>
        <section id="small">
          <div className="title">
            <FaHashtag />
            <h1>projetos pequenos</h1>
          </div>
          <div className="projetos">
            <Card
              img={pomodoro}
              title={"Focus Time"}
              tags={"HTML CSS JS"}
              href={"https://lucasfagundesf.github.io/focus-time2.0/"}
              href2={"https://github.com/lucasfagundesf/focus-time2.0"}
              desc={"timer pomodoro com sons ambientes"}
            />
            <Card
              img={pokedex}
              title={"Pokedex"}
              tags={"HTML CSS JS "}
              href={`https://lucasfagundesf.github.io/Projeto-pokedex/`}
              href2={"https://github.com/lucasfagundesf/Projeto-pokedex"}
              desc={"A famosa pokedex com pokemons shinys"}
            />
          </div>
        </section>
        <Footer />
      </main>
    </Container>
  );
}

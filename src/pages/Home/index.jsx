import { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Quote } from "../../components/Quote";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Banner } from "../../components/Banner";
import { Skill } from "../../components/Skill";
import quote from "../../assets/quote.svg";
import pomodoro from "../../assets/pomodoro.png";
import pokedex from "../../assets/pokedex.png";
import portfolio from "../../assets/portfolio.png";
import brendadotarot from "../../assets/Brendadotarot.png";
import UnderProtection from "../../assets/Under_Protection.png";
import viewMore from "../../assets/~~_.svg";
import seta from "../../assets/seta.svg";
import skills from "../../assets/skills.png";
import about from "../../assets/about.png";
import { FaHashtag } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { Link } from "react-router-dom";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <main id="home">
        <SideMenu
          menuIsOpen={menuIsOpen}
          onCloseMenu={() => setMenuIsOpen(false)}
        />
        <Header onOpenMenu={() => setMenuIsOpen(true)} />
        <Banner />
        <Quote
          quote={"Se você não correr riscos, não poderá criar um futuro"}
          author={"- Monkey D. Luffy"}
          icon={quote}
        />
        <section id="projetos">
          <h2>
            <FaHashtag />
            projects
          </h2>
          <Link to="/projetos">
            view all
            <img className="seta" src={viewMore} alt="seta" />
          </Link>
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
            href={"/home"}
            href2={""}
          />
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
        </section>
        <section id="skill">
          <h2>
            <FaHashtag />
            skills
          </h2>
          <div className="skillsSection">
            <img className="skills" src={skills} alt="" />
            <div className="cardSkill">
              <Skill title={"Languages"} list={"JavaScript"} />
              <Skill title={"Databases"} list={"SQLite Oracle "} />
              <Skill title={"Tools"} list={"VSCode Figma Git "} />
              <Skill title={"Other"} list={"HTML CSS SASS "} />
              <Skill title={"Frameworks"} list={"React "} />
            </div>
          </div>
        </section>
        <section id="sobre">
          <h2>
            <FaHashtag />
            sobre mim
          </h2>
          <div className="skillsSection">
            <div className="text">
              <p>Olá, eu sou Lucas Fagundes!</p>
              <p>
                Sou um desenvolvedor front-end autodidata, moro em Taubaté,
                Brasil. Posso desenvolver sites responsivos do zero e
                transformá-los em experiências web modernas e amigáveis.
              </p>
              <p>
                Transformar minha criatividade e conhecimento em sites tem sido
                minha paixão por mais de um ano. Sempre me esforço para aprender
                sobre as mais novas tecnologias e frameworks.
              </p>
              <Link to={"/contatos"}>
                <Button title={"Leia mais"} icon={seta} />
              </Link>
            </div>
            <img src={about} alt="" id="about" />
          </div>
        </section>
        <section id="contato">
          <h2>
            <FaHashtag />
            contatos
          </h2>
          <div className="skillsSection">
            <div className="text">
              <p>
                Estou interessado em oportunidades de freelance. No entanto, se
                você tiver outro pedido ou pergunta, não hesite em entrar em
                contato comigo
              </p>
            </div>
            <div className="message">
              <h1>Entre em contato</h1>
              <div className="mail">
                <IoIosMail />
                <p>lucas_fagundesfranco@hotmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Container>
  );
}

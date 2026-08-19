import { useRef, useState } from "react";
import { Container } from "./styles";
import { smoothScroll } from "../../animations/smoothScroll";
import { Header } from "../../components/Header";
// import { Quote } from "../../components/Quote";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Banner } from "../../components/Banner";
import { Jornada } from "../../components/Jornada";
// import quote from "../../assets/quote.svg";
import novax from "../../assets/novax-eng.png";
import portfolio from "../../assets/portfolio.png";
import brendadotarot from "../../assets/Brendadotarot.png";
import UnderProtection from "../../assets/Under_Protection.png";
import seta from "../../assets/seta.svg";
import about from "../../assets/about.png";
import { FaHashtag } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import { Skill } from "../../components/Skill";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const smoother = smoothScroll(wrapperRef.current)
    return () => smoother.kill
  })

  return (
    <Container>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content">
          <main id="home">
            <SideMenu
              menuIsOpen={menuIsOpen}
              onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <Banner />
            <section id="jornada">
              <h2>
                <FaHashtag />
                jornada
              </h2>
              <Jornada />
            </section>
            {/* Analisar se vale a pena essa quote */}
            {/* <Quote
              quote={"Se você não correr riscos, não poderá criar um futuro"}
              author={"- Monkey D. Luffy"}
              icon={quote}
            /> */}
            <section id="projetos">
              <h2>
                <FaHashtag />
                projects
              </h2>
              {/* Quando mais projetos forem adicionados, descomente o link abaixo */}
              {/* <Link to="/projetos">
                view all
                <img className="seta" src={viewMore} alt="seta" />
              </Link> */}
              <Swiper spaceBetween={10} slidesPerView={2}>
                <SwiperSlide>
                  <Card
                    img={novax}
                    title={"Novax Engenharia"}
                    tags={"Wordpress · Elementor "}
                    desc={"Website institucional - Engenharia e climatização "}
                    href={"https://novaxengenharia.com.br/"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    img={UnderProtection}
                    title={"Under Protection"}
                    tags={"Wordpress · Elementor "}
                    desc={"Website institucional - Cibersegurança "}
                    href={"https://underprotection.com.br/"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    img={brendadotarot}
                    title={"Brenda Do tarot"}
                    tags={"Wordpress · Elementor "}
                    desc={"Website profissional - Atendimento online "}
                    href={"https://brendadotarot.com.br/"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    img={portfolio}
                    title={"Portfolio"}
                    tags={"React · StyledComponents · GSAP"}
                    desc={"É onde você está acessando agora"}
                    href={"/"}
                  />
                </SwiperSlide>
              </Swiper>
            </section>
            <section id="skill">
              <h2>
                <FaHashtag />
                skills
              </h2>
              <Skill/>
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
        </div>
      </div>
    </Container>
  );
}

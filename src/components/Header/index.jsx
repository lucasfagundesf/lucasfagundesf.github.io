import { Container } from "./styles";
import { List } from "../List";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";
export function Header({ onOpenMenu }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Lucas Fagundes</h1>
      </div>
      <List>
        <li onClick={scrollToTop}>
          <HiHashtag />
          <Link to="/">home</Link>
        </li>
        <li onClick={scrollToTop}>
          <HiHashtag />
          <Link to="/projetos">projetos</Link>
        </li>
        <li onClick={scrollToTop}>
          <HiHashtag />
          <Link to="/sobre">sobre mim</Link>
        </li>
        <li onClick={scrollToTop}>
          <HiHashtag />
          <Link to="/contatos">contatos</Link>
        </li>
      </List>
      <div className="menu" onClick={onOpenMenu}>
        <img src={menu} alt="icone de menu" />
      </div>
    </Container>
  );
}

import { Container } from "./styles";
import  red from "../../assets/red.svg";
import  yellow  from "../../assets/yellow.svg";
import  green  from "../../assets/green.svg";

export default function TerminalHeader() {
  return (
    <Container>
      <div className="buttons">
        <div className="button btnRed">
          <img src={red} />
        </div>
        <div className="button btnYellow">
          <img src={yellow} alt="" />
        </div>
        <div className="button btnGreen">
          <img src={green} alt="" />
        </div>
      </div>

      <div className="title">lucas@portfolio ~</div>
    </Container>
  );
}
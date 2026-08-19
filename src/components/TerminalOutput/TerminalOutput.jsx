import { Container} from "./styles.js";
import PropTypes from "prop-types";

import SkillList from "../SkillList/SkillList.jsx";

export default function TerminalOutput({ history }) {
  return (
    <Container>
      {history.map((item, index) => (
        <div key={index}>
          <div className="command">
            <span>lucas@portfolio:~$</span>

            {item.command}
          </div>

          <SkillList skills={item.output} />
        </div>
      ))}
    </Container>
  );
}

TerminalOutput.propTypes = {
  history: PropTypes.array.isRequired,
};

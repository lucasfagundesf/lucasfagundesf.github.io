import { Container, Button } from "./styles.js";
import PropTypes from "prop-types";

export default function CommandSuggestion({ commands, setInput, inputRef }) {
  const handleSuggestion = (command) => {
    setInput(command);
    inputRef.current?.focus();
  };
  return (
    <Container>
      {commands.map((command) => (
        <Button
          key={command}
          type="buttton"
          onClick={() => handleSuggestion(command)}>
          {command}
        </Button>
      ))}
    </Container>
  );
}

CommandSuggestion.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.string).isRequired,
  setInput: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
};

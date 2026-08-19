import { Wrapper, Prompt, Input } from "./styles.js";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const TerminalInput = forwardRef( 
  function TerminalInput({ value, setInput, onKeyDown },ref) {
  return (
    <Wrapper>
      <Prompt>lucas@portfolio:~$</Prompt>

      <Input
        ref={ref}
        autoFocus
        value={value}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </Wrapper>
  );
}
)

TerminalInput.propTypes = {
  value: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};


export default TerminalInput;

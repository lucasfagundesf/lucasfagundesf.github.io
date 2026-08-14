import PropTypes from "prop-types";
import { Container } from "./styles.js";

export function List({ children }) {
  return (
    <Container>
      <ul>{children}</ul>
    </Container>
  );
}

List.propTypes = {
  children: PropTypes.node,
};

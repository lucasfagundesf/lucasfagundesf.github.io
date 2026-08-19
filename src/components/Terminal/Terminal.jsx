import { Container } from "./styles";
import PropTypes from "prop-types";

export default function Terminal({ children }) {
  return <Container>{children}</Container>;
}

Terminal.propTypes = {
  children: PropTypes.node,
};

import { List, Item } from "./styles.js";
import PropTypes from "prop-types";

export default function SkillList({ skills }) {
  if (!skills) return null;

  return (
    <List>
      {skills.map((skill, index) => (
        <Item key={skill}>
          {index === skills.length - 1 ? "└── " : "├── "}

          {skill}
        </Item>
      ))}
    </List>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};

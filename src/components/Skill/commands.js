import { skills, commands } from "./data.js"

export function executeCommand(command) {

  if (command === "help") {
    return commands;
  }

  if (skills[command]) {
    return skills[command];
  }

  return [
    `command not found: ${command}`,
    'Type "help" to see available commands.',
  ];
}

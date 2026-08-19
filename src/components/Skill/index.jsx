import { useRef, useState } from "react";
import { Container } from "./styles.js";
import Terminal from "../Terminal/Terminal.jsx";
import TerminalHeader from "../TerminalHeader/TerminalHeader.jsx";
import TerminalInput from "../TerminalInput/TerminalInput.jsx";
import TerminalOutput from "../TerminalOutput/TerminalOutput.jsx";
import CommandSuggestion from "../CommandSuggestion/CommandSuggestions.jsx";
import skill from "../../assets/skills.png";

import { executeCommand } from "./commands.js";
import { commands } from "./data.js";

export function Skill() {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleKeyDown = (e) => {
    // TAB
    if (e.key === "Tab") {
      e.preventDefault();

      const command = input.toLowerCase();

      const match = commands.find((item) =>
        item.startsWith(command)
      );

      if (match) {
        setInput(match);
      }

      return;
    }

    // ENTER
    if (e.key === "Enter") {
      handleCommand();
      return;
    }

    // ARROW UP
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    // ARROW DOWN
    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }
  };

  const handleCommand = () => {
    const command = input.trim().toLowerCase();

    if (!command) return;

    setCommandHistory((prev) => [
      ...prev,
      command,
    ]);

    setHistoryIndex(-1);

    // CLEAR
    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = executeCommand(command);

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);

    setInput("");
  };

  return (
    <Container>
      <Terminal>
        <TerminalHeader />
        <CommandSuggestion
          commands={commands}
          setInput={setInput}
          inputRef={inputRef}
        />
          
        <TerminalOutput history={history}/>
        <TerminalInput
          ref={inputRef}
          value={input}
          setInput={setInput}
          onKeyDown={handleKeyDown}
          />   
           
      </Terminal>
      <div className="img">
        <img src={skill} alt="" />
      </div>
    </Container>
  );
}
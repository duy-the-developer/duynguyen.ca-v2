import { useState, useRef } from "react";
import styled from "styled-components";

const App = () => {
  const [directory, setDirectory] = useState("visitor@duynguyen.ca % ");
  const [input, setInput] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [output, setOutput] = useState([
    "Hello world! Welcome to my personal terminal.",
    "Type 'help' for a list of all available commands.",
  ]);
  const [inputCounter, setInputCounter] = useState(0);
  const inputElem = useRef(null);

  const commands = {
    help: {
      description: `list all available commands`,
    },
    about: {
      description: `information about me`,
    },
    contact: {
      description: `list all available contact options`,
    },
    clear: {
      description: `clear console messages`,
      function: function () {
        console.log("clear");
        setOutput([]);
      },
    },
    ls: {
      description: ``
    }
  };

  const resetInput = (e) => {
    e.preventDefault();
    setInput("");
    setInputWidth(`0ch`);
  };

  const handleSubmit = (e) => {
    const userInput = e.target.value;
    const isHelp = userInput === "help";
    let outputMessage = "";

    resetInput(e);

    if (commands.hasOwnProperty(userInput)) {
      if (isHelp) {
        outputMessage = Object.keys(commands).map(
          (command) => `${command}: ${commands[command].description}`
        );
      } else {
        outputMessage = [...commands[userInput].function()];
      }
    } else {
      outputMessage = [
        `Sorry, '${userInput}' is not a valid command, type 'help' for a list of available commands.`,
      ];
    }

    setOutput([...output, directory + userInput, ...outputMessage]);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setInputWidth(`${e.target.value.length}ch`);
  };

  return (
    <StyledApp
      className="App"
      onClick={() => {
        inputElem.current.focus();
      }}
    >
      {output.map((message) => (
        <StyledTerminal key={output.indexOf(message)}>{message}</StyledTerminal>
      ))}
      <label for="input">{directory}</label>
      <StyledTerminalInput
        autoFocus
        ref={inputElem}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        style={{ width: inputWidth }}
      />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div``;

const StyledTerminal = styled.div``;
const StyledTerminalInput = styled.input`
  @keyframes blinkingCursor {
    50% {
      border-right-color: var(--color-pink-light);
    }
    100% {
      border-right-color: transparent;
    }
  }

  font-family: "Press Start 2P", cursive;
  border: 0px transparent;
  display: inline-block;
  animation: blinkingCursor 1s infinite normal;
  color: inherit;
  outline: none;
  border-right: 10px solid;
  caret-color: transparent;
`;

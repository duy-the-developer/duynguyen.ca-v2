import { useState, useRef } from "react";
import styled from "styled-components";

import { Directory } from "./components/Directory";
import { TerminalMessage } from "./components/TerminalMessage";
import { initialOutput } from "./utils/initialStates";

const App = () => {
  const [directory, setDirectory] = useState("visitor@duynguyen.ca % ");
  const [input, setInput] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [output, setOutput] = useState(initialOutput);

  const inputElem = useRef(null);

  const commands = {
    welcome: {
      description: `initiate the welcome sequence`,
      function: () => {
        return initialOutput;
      },
    },
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
      function: () => {
        console.log("clear");
        setOutput([]);
      },
    },
    ls: {
      description: `list `,
    },
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

    const previousCommand = {
      type: "directory",
      content: `${directory} ${userInput}`,
    };

    resetInput(e);

    if (commands.hasOwnProperty(userInput)) {
      if (isHelp) {
        outputMessage = Object.keys(commands).map((command) => {
          return {
            type: `message`,
            content: `${command} - ${commands[command].description}`,
          };
        });
      } else {
        outputMessage = [...commands[userInput].function()];
      }
    } else {
      outputMessage = [
        {
          type: `error`,
          content: `[ ERROR ] - '${userInput}' is not a valid command, type 'help' for a list of available commands.`,
        },
      ];
    }

    setOutput([...output, previousCommand, ...outputMessage]);
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
      {output.map((message) => {
        const { content, type } = message;
        return (
          <TerminalMessage
            key={output.indexOf(message)}
            message={content}
            type={type}
          />
        );
      })}
      <div className="input-container">
        <Directory for="input" content={directory} />
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
      </div>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  line-height: 1.5ch;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--padding-page) * 2 - var(--margin-page) * 2);
`;

const StyledTerminalInput = styled.input`
  @keyframes blinkingCursor {
    50% {
      border-right-color: var(--color-amber-light);
    }
    100% {
      border-right-color: transparent;
    }
  }

  font-family: "Press Start 2P", cursive;
  border: 0px transparent;
  display: inline-block;
  animation: blinkingCursor 1s infinite steps(2);
  color: inherit;
  outline: none;
  border-right: 10px solid transparent;
  caret-color: transparent;
`;

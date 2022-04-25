import { useState, useRef } from "react";
import styled from "styled-components";

import { Directory } from "./components/Directory";
import { TerminalMessage } from "./components/TerminalMessage";
import { home } from "./utils/output";

const App = () => {
  const [directory, setDirectory] = useState("home");
  const [input, setInput] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [output, setOutput] = useState(home.files["welcome.txt"]);
  const [currentFolder, setCurrentFolder] = useState(home);

  const inputElem = useRef(null);

  const commands = {
    // welcome: {
    //   description: `Initiate the welcome sequence`,
    //   function: () => {
    //     return initialOutput;
    //   },
    // },
    help: {
      description: `List all available commands`,
    },
    list: {
      description: `List all files and folders in the current directory`,
    },
    cd: {
      description: `Change directory - Syntax: 'cd <directory path>' - Example: 'cd /blog'`,
      function: (childDirectory) => {
        if (currentFolder.hasOwnProperty(childDirectory)) {
          setDirectory(`${directory}/${childDirectory} `);
        }
        return [
          {
            type: "error",
            content: `cd: no such file or directory: ${childDirectory}`,
          },
        ];
      },
    },
    cat: {
      description: `View file content - Syntax: 'cat <file name>' - Example: 'cat intro.txt'`,
    },
    clear: {
      description: `Clear console messages`,
      function: () => {
        setOutput([]);
      },
    },
  };

  const resetInput = (e) => {
    e.preventDefault();
    setInput("");
    setInputWidth(`0ch`);
  };

  const displayHelp = () => {
    return Object.keys(commands).map((command) => {
      return {
        type: `message`,
        content: `${command}: ${commands[command].description}`,
      };
    });
  };

  const handleSubmit = (e) => {
    const userInput = e.target.value.split(" ")[0];
    const inputParam = e.target.value.split(" ")[1];
    const isHelp = userInput === "help";
    let outputMessage = "";

    const previousCommand = {
      type: "directory",
      content: `${directory} % ${e.target.value}`,
    };

    resetInput(e);

    if (commands.hasOwnProperty(userInput)) {
      if (isHelp) {
        outputMessage = displayHelp();
      } else {
        outputMessage = [...commands[userInput].function(inputParam)];
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
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setInputWidth(`${e.target.value.length}ch`);
  };

  return (
    <>
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
          <Directory
            for="input"
            content={`visitor@duynguyen.ca/${directory} %  `}
          />
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
    </>
  );
};

export default App;

const StyledApp = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--padding-page) * 2 - var(--margin-page) * 2);
`;

const StyledTerminalInput = styled.input`
  @keyframes blinkingCursor {
    50% {
      border-right-color: var(--color-green);
    }
    100% {
      border-right-color: transparent;
    }
  }

  border: 0px transparent;
  display: inline-block;
  animation: blinkingCursor 1s infinite steps(2);
  color: inherit;
  outline: none;
  border-right: 10px solid transparent;
  caret-color: transparent;
`;

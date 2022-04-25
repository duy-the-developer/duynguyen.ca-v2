import { useEffect, useState } from "react";
import styled from "styled-components";

export const TerminalMessage = ({ message, type }) => {
  const [printingText, setPrintingText] = useState("");

  let i = 0;
  const typeWriter = () => {
    if (i < message.length) {
      setPrintingText(message.substring(0, i + 1));
      i++;
      setTimeout(typeWriter, 15);
    } else {
      clearTimeout(typeWriter);
    }
  };

  useEffect(() => {
    typeWriter();
  }, []);

  if (type === "paragraph") {
    return <StyledParagraph className={`${type}`}>{message}</StyledParagraph>;
  }

  return <StyledMessage className={`${type}`}>{printingText}</StyledMessage>;
};

const StyledMessage = styled.div`
  white-space: pre-wrap;

  &.ascii {
    white-space: pre;
    font-family: "Courier New", Monospace;
    white-space: pre;
    font-size: 125%;

    color: var(--color-pink-light);
    text-shadow: 0 0 5px var(--color-pink-light);
  }

  &.error {
    color: var(--color-pink-light);
    text-shadow: 0 0 5px var(--color-pink-light);
  }

  &.directory {
    color: var(--color-blue-light);
    text-shadow: 0 0 5px var(--color-blue-light);
  }
`;

const StyledUrl = styled.a``;

const StyledParagraph = styled(StyledMessage)``;

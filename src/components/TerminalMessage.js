import { useEffect, useState } from "react";
import styled from "styled-components";

export const TerminalMessage = ({ message, type }) => {
  const [printingText, setPrintingText] = useState("");

  let i = 0;
  const typeWriter = () => {
    if (i < message.length) {
      setPrintingText(message.substring(0, i + 1));
      i++;
      setTimeout(typeWriter, 25);
    }
  };

  useEffect(() => {
    typeWriter();
  }, []);

  return <StyledMessage className={`${type}`}>{printingText}</StyledMessage>;
};

const StyledMessage = styled.p`
  white-space: pre-wrap;
  &.ascii {
    color: var(--color-pink-light);
    text-shadow: 0 0 5px var(--color-amber-light);
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

import { useEffect, useState } from "react";
import styled from "styled-components";

export const TerminalMessage = ({
  message,
  type,
  isLast,
  setScrollHeight,
  setIsPrinting,
}) => {
  const [printingText, setPrintingText] = useState("");

  let i = 0;
  const typeWriter = () => {
    if (i < message.length) {
      setPrintingText(message.substring(0, i + 1));
      i++;
      setTimeout(typeWriter, 10);
      if (isLast) {
        setScrollHeight(document.getElementById("App").scrollHeight);
      }
    } else {
      setScrollHeight(document.getElementById("App").scrollHeight);
      if (isLast) {
        setIsPrinting(false);
      }
    }
  };

  useEffect(() => {
    typeWriter();
    if (isLast) {
      setIsPrinting(true);
    }
  }, []);

  return <StyledMessage className={`${type}`}>{printingText}</StyledMessage>;
};

const StyledMessage = styled.div`
  white-space: pre-wrap;

  &.heading {
    background-color: var(--color-blue-light);
    color: var(--color-gray-dark);
    text-shadow: 0 0 5px var(--color-gray-dark);
    display: inline-block;
    width: fit-content;
    box-shadow: 0 0 5px var(--color-blue-light);
  }

  &.warning {
    background-color: var(--color-amber-light);
    color: var(--color-gray-dark);
    text-shadow: 0 0 5px var(--color-gray-dark);
    display: inline-block;
    /* width: fit-content; */
    box-shadow: 0 0 5px var(--color-amber-light);
  }

  &.ascii {
    white-space: pre;
    font-family: "Courier New", Monospace;
    white-space: pre;
    font-size: 125%;

    color: var(--color-pink-light);
    text-shadow: 0 0 5px var(--color-pink-light);
  }

  &.error {
    /* background-color: var(--color-amber-light); */
    color: var(--color-amber-light);
    text-shadow: 0 0 5px var(--color-amber-light);
    display: inline-block;
    /* width: fit-content; */
    /* box-shadow: 0 0 5px var(--color-amber-light); */
  }

  &.directory {
    color: var(--color-blue-light);
    text-shadow: 0 0 5px var(--color-blue-light);
  }
`;

const StyledUrl = styled.a``;

const StyledParagraph = styled(StyledMessage)``;

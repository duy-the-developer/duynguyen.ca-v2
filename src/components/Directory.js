import styled from "styled-components";

export const Directory = ({content}) => {
  return <StyledDirectory>{content}</StyledDirectory>;
};

const StyledDirectory = styled.label`
  color: var(--color-blue-light);
  text-shadow: 0 0 4px var(--color-blue-light);
`;

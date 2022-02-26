import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  left?: string;
  top?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const button: React.FC<ButtonProps> = ({ text, left, top, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} left={left} top={top}>
      {text}
    </StyledButton>
  );
};

export default button;

const StyledButton = styled.button<{ left?: string; top?: string }>`
  position: absolute;
  width: 125px;
  height: 30px;
  left: ${({ left }) => left};
  top: ${({ top }) => top};

  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;

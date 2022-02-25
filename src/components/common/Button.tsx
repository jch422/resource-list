import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default button;

const StyledButton = styled.button`
  width: 200px;
  height: 36px;
  padding: 5px 50px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;

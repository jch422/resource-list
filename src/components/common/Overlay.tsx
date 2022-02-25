import React from "react";
import styled from "styled-components";

interface OverlayProps {
  handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Overlay: React.FC<OverlayProps> = ({ handleOverlayClick }) => {
  return <TransparentOverlay onClick={handleOverlayClick} />;
};

export default Overlay;

const TransparentOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  cursor: pointer;
`;

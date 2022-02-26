import React from "react";
import styled from "styled-components";
import { TypedIcon } from "typed-design-system";

import { MainProps as MainHeadProps } from "./Main";

const MainHead: React.FC<MainHeadProps> = ({ resource, setResources }) => {
  const handleClose = (): void => {
    setResources((prevResources) => {
      return prevResources.map((prevResource) => {
        if (prevResource.id !== resource?.id) {
          return prevResource;
        }
        return {
          ...prevResource,
          isClicked: false,
        };
      });
    });
  };

  return (
    <Wrapper>
      <ResourceValue>{resource?.value}</ResourceValue>
      <IconContainer onClick={handleClose}>
        <TypedIcon icon="close_small" style={{ fontSize: "19px" }} />
      </IconContainer>
    </Wrapper>
  );
};

export default MainHead;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 17px;
  width: 919px;
  height: 50px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ResourceValue = styled.div`
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    & > svg {
      stroke: red;
    }
  }
`;

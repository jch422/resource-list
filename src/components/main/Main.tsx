import React from "react";
import styled from "styled-components";

import { ResourceState as Props } from "../../app/App";
import MainHead from "./MainHead";
import Viewer from "./Viewer";

export interface MainProps {
  resource: Props["resource"] | null;
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const Main: React.FC<MainProps> = ({ resource, setResources }) => {
  return (
    <Wrapper>
      {resource && (
        <>
          <MainHead resource={resource} setResources={setResources} />
          <Viewer resource={resource} />
        </>
      )}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  position: absolute;
  width: 919px;
  height: 800px;
  left: 281px;
  top: 0px;
  background: #ffffff;
  border-left: 1px solid #e5e5e5;
`;

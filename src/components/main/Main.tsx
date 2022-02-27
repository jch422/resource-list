import React, { memo } from "react";
import styled from "styled-components";

import { ResourceState } from "../../app/resource_presenter";
import MainHead from "./MainHead";
import Viewer from "./Viewer";

export interface MainProps {
  resource: ResourceState | null;
  handleActivate(id: string): void;
}

const Main: React.FC<MainProps> = ({ resource, handleActivate }) => {
  return (
    <Wrapper>
      {resource && (
        <>
          <MainHead resource={resource} handleActivate={handleActivate} />
          <Viewer resource={resource} />
        </>
      )}
    </Wrapper>
  );
};

export default memo(Main);

const Wrapper = styled.main`
  position: absolute;
  width: 919px;
  height: 800px;
  left: 281px;
  top: 0px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-left: none;
`;

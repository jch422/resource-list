import React from "react";
import styled from "styled-components";

import { ResourceState } from "../../app/resource_presenter";

interface ViewerProps {
  resource: ResourceState;
}

const Viewer: React.FC<ViewerProps> = ({ resource }) => {
  return (
    <Wrapper>
      {resource?.type === "url" && <Iframe src={resource.value} />}
    </Wrapper>
  );
};

export default Viewer;

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 600px;
  height: 400px;
`;

import React from "react";
import styled from "styled-components";

import { ResourceState as Props } from "../../App";
import SidebarHead from "./SidebarHead";

interface SidebarProps {
  resources: Props["resource"][];
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ resources, setResources }) => {
  return (
    <Aside>
      <SidebarHead setResources={setResources} />
      {resources.map((resource) => (
        <div>{resource.value}</div>
      ))}
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  width: 460px;
  height: 100vh;
  background-color: #f7f7f7;
`;

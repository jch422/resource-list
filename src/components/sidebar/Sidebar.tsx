import React from "react";
import styled from "styled-components";

import { ResourceState as Props } from "../../App";
import ResourceList from "./ResourceList";
import SidebarHead from "./SidebarHead";

export interface SidebarProps {
  resources: Props["resource"][];
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ resources, setResources }) => {
  return (
    <Aside>
      <SidebarHead setResources={setResources} />
      <ResourceList resources={resources} setResources={setResources} />
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  position: absolute;
  width: 280px;
  height: 800px;
  left: 0px;
  top: 0px;
  background-color: #f7f7f7;
`;

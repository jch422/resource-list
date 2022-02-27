import React from "react";
import styled from "styled-components";

import { ResourceState } from "../../app/resource_presenter";
import ResourceList from "./ResourceList";
import SidebarHead from "./SidebarHead";

export interface SidebarProps {
  resources: ResourceState[];
  handleAdd(value: string, type: "img" | "url"): void;
  handleDelete(id: string): void;
  handleEdit(id: string, value: string): void;
  handleActivate(id: string): void;
}

const Sidebar: React.FC<SidebarProps> = ({
  resources,
  handleAdd,
  handleDelete,
  handleEdit,
  handleActivate,
}) => {
  return (
    <Aside>
      <SidebarHead handleAdd={handleAdd} />
      <ResourceList
        resources={resources}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleActivate={handleActivate}
      />
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
  border-bottom: 1px solid #e5e5e5;
`;

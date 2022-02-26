import React from "react";
import styled from "styled-components";
import ResourceItem from "./ResourceItem";

import { SidebarProps as ListProps } from "./Sidebar";

const ResourceList: React.FC<ListProps> = ({ resources, setResources }) => {
  return (
    <Wrapper>
      <List>
        {resources.map((resource) => (
          <ResourceItem
            key={resource.id}
            resource={resource}
            setResources={setResources}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default ResourceList;

const Wrapper = styled.section`
  margin: 60px 10px 0px 10px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

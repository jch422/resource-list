import React from "react";
import styled from "styled-components";
import ResourceItem from "./ResourceItem";

import { ResourceState } from "../../app/resource_presenter";

interface ListProps {
  resources: ResourceState[];
  handleDelete(id: string): void;
  handleEdit(id: string, value: string): void;
  handleActivate(id: string): void;
}

const ResourceList: React.FC<ListProps> = ({
  resources,
  handleDelete,
  handleEdit,
  handleActivate,
}) => {
  return (
    <Wrapper>
      <List>
        {resources.map((resource) => (
          <ResourceItem
            key={resource.id}
            resource={resource}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleActivate={handleActivate}
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

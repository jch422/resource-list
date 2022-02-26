import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { ResourceState as Props } from "../../App";
import { TypedIcon } from "typed-design-system";

interface ItemProps {
  resource: Props["resource"];
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const ResourceItem: React.FC<ItemProps> = ({ resource, setResources }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(resource.value);

  useEffect(() => {
    if (editable && inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [editable]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleEditClick = (): void => setEditable(true);

  const handleSaveClick = (): void => {
    setResources((prevResources) => {
      return prevResources.map((prevResource) => {
        if (prevResource.id !== resource.id) {
          return prevResource;
        }
        return {
          ...prevResource,
          value,
        };
      });
    });
    setEditable(false);
  };

  const handleResetClick = (): void => {
    setValue(resource.value);
    setEditable(false);
  };

  const handleDeleteClick = (): void => {
    setResources((prevResources) => {
      return prevResources.filter(
        (prevResource) => prevResource.id !== resource.id
      );
    });
  };

  return (
    <Wrapper>
      {!editable && <TextBox>{resource.value}</TextBox>}
      {editable && (
        <Input ref={inputRef} value={value} onChange={handleChange} />
      )}
      <ActionButtons>
        {!editable && (
          <IconContainer onClick={handleEditClick}>
            <TypedIcon icon="edit_small" style={{ fontSize: "19px" }} />
          </IconContainer>
        )}
        {editable && (
          <IconContainer onClick={handleSaveClick}>
            <TypedIcon icon="success_small_1" style={{ fontSize: "19px" }} />
          </IconContainer>
        )}
        {editable && (
          <IconContainer onClick={handleResetClick}>
            <TypedIcon icon="reset_small" style={{ fontSize: "19px" }} />
          </IconContainer>
        )}
        <IconContainer onClick={handleDeleteClick}>
          <TypedIcon icon="trash_small" style={{ fontSize: "19px" }} />
        </IconContainer>
      </ActionButtons>
    </Wrapper>
  );
};

export default ResourceItem;

const Wrapper = styled.li`
  width: 260px;
  height: 90px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  border-radius: 10px;
`;

const TextBox = styled.div`
  height: 32px;
  border-radius: 5px;
  padding: 7px 7px 7px 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid transparent;
`;

const Input = styled.input`
  height: 32px;
  outline: none;
  border: 1px solid #38a5e1;
  border-radius: 5px;
  padding: 0 6px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { ResourceState as Props } from "../../App";
import Button from "../common/Button";
import Overlay from "../common/Overlay";

interface SidebarHeadProps {
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ setResources }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showUrlInput, setShowUrlInput] = useState(false);

  useEffect(() => {
    if (showUrlInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showUrlInput]);

  const handleUrlClick = (): void => {
    setShowUrlInput((show) => !show);
  };

  const handleImgClick = (): void => {
    console.log("img 추가");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const value = inputRef.current?.value.trim();
    if (!value) {
      return alert("URL을 입력해 주세요.");
    }

    setResources((prevResources) => {
      const newResource: Props["resource"] = {
        value,
        type: "url",
      };
      return [newResource, ...prevResources];
    });
    setShowUrlInput(false);
  };

  return (
    <Wrapper>
      <Button text="URL 추가" handleClick={handleUrlClick} />
      <Button text="이미지 추가" handleClick={handleImgClick} />
      {showUrlInput && (
        <InputForm onSubmit={handleSubmit}>
          <Overlay handleOverlayClick={handleUrlClick} />
          <Input ref={inputRef} />
        </InputForm>
      )}
    </Wrapper>
  );
};

export default SidebarHead;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  -webkit-box-shadow: 0 5px 5px -5px #757575;
  box-shadow: 0 5px 5px -5px #757575;
`;

const InputForm = styled.form`
  position: absolute;
  top: 60px;
  width: 420px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  position: absolute;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  border: 1px solid #38a5e1;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
`;
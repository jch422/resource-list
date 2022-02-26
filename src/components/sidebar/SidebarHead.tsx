import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { ResourceState as Props } from "../../app/App";
import Button from "../common/Button";
import Overlay from "../common/Overlay";
import ImgUpload from "./ImgUpload";

import { handleUrl } from "../../utils/url";

interface SidebarHeadProps {
  setResources: React.Dispatch<React.SetStateAction<Props["resource"][]>>;
}

const SidebarHead: React.FC<SidebarHeadProps> = ({ setResources }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const imgUploadFormRef = useRef<HTMLInputElement>(null);
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
    imgUploadFormRef.current?.click();
  };

  const handleImgUpload = (imgFileName: string): void => {
    setResources((prevResources) => {
      const newResource: Props["resource"] = {
        id: uuid(),
        value: imgFileName,
        type: "img",
        isClicked: false,
      };
      return [newResource, ...prevResources];
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const value = handleUrl(inputRef.current?.value || "");
    if (!value) return;

    setResources((prevResources) => {
      const newResource: Props["resource"] = {
        id: uuid(),
        value,
        type: "url",
        isClicked: false,
      };
      return [newResource, ...prevResources];
    });
    setShowUrlInput(false);
  };

  return (
    <>
      <ButtonsContainer>
        <Button
          text="URL 추가"
          handleClick={handleUrlClick}
          left="10px"
          top="10px"
        />
        <Button
          text="이미지 추가"
          handleClick={handleImgClick}
          left="145px"
          top="10px"
        />
      </ButtonsContainer>
      {showUrlInput && (
        <InputForm onSubmit={handleSubmit}>
          <Overlay handleOverlayClick={handleUrlClick} />
          <Input ref={inputRef} />
        </InputForm>
      )}
      <ImgUpload handleImgUpload={handleImgUpload} ref={imgUploadFormRef} />
    </>
  );
};

export default SidebarHead;

const ButtonsContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 50px;
  left: calc(50% - 280px / 2);
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const InputForm = styled.form`
  position: absolute;
  width: 260px;
  height: 40px;
  left: 10px;
  top: 42px;

  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  position: absolute;
  width: 250px;
  height: 30px;
  left: 5px;
  top: 5px;

  background: #f7f7f7;
  border: 1px solid #38a5e1;
  border-radius: 3px;
  outline: none;
  padding: 0px 5px;
`;

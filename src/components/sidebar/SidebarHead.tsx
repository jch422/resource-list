import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { ResourceState as Props } from "../../App";
import Button from "../common/Button";
import Overlay from "../common/Overlay";
import ImgUpload from "./ImgUpload";

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
      };
      return [newResource, ...prevResources];
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let value = inputRef.current?.value.trim() || "";
    // 아무것도 입력하지 않았다면 alert를 띄운다
    if (!value) {
      return alert("URL을 입력해 주세요.");
    }
    // http:// 혹은  https:// 로 시작하지 않는 경우 https:// 를 추가한다
    if (!value.startsWith("http://") && !value.startsWith("https://")) {
      value = "https://" + value;
    }
    // youtube url은 embed url로 변경해야 한다.
    if (value.includes("youtube.com/watch?v=")) {
      value = value.replace("watch?v=", "embed/");
    }

    setResources((prevResources) => {
      const newResource: Props["resource"] = {
        id: uuid(),
        value,
        type: "url",
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

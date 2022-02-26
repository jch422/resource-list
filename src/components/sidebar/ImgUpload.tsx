import React, { forwardRef } from "react";
import styled from "styled-components";

interface ImgUploadProps {
  handleImgUpload: Function;
}

const ImgUpload = forwardRef<HTMLInputElement, ImgUploadProps>((props, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files?.length) {
      return;
    }
    const allowedTypes = ["image/jpg", "image/png"];
    const { name, type } = files[0];

    if (allowedTypes.some((allowedType) => allowedType === type)) {
      props.handleImgUpload(name);
    } else {
      alert("jpg 혹은 png 형식의 이미지만 업로드 가능합니다.");
    }

    e.target.value = ""; // 같은 파일을 재업로드 할 수 있도록 초기화
  };

  return (
    <Input
      ref={ref}
      type="file"
      accept="image/jpg, image/png"
      onChange={handleChange}
    />
  );
});

export default ImgUpload;

const Input = styled.input`
  display: none;
`;

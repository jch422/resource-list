const allowedTypes = [".jpg", ".png"];

export const validateImgFileName = (name: string): boolean => {
  name = name.trim();
  if (allowedTypes.some((allowedType) => name.endsWith(allowedType))) {
    return true;
  } else {
    alert("jpg 혹은 png 형식의 이미지만 업로드 가능합니다.");
    return false;
  }
};

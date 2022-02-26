export const handleUrl = (url: string): string => {
  url = url.trim() || "";
  if (!url) {
    alert("URL을 입력해 주세요.");
    return "";
  }
  // http:// 혹은  https:// 로 시작하지 않는 경우 https:// 를 추가한다
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  // youtube url은 embed url로 변경해야 한다.
  if (url.includes("youtube.com/watch?v=")) {
    url = url.replace("watch?v=", "embed/");
  }

  return url;
};

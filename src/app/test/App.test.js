import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import ResourcePresenter from "../resource_presenter";

describe("App", () => {
  let presenter;
  beforeEach(() => {
    presenter = new ResourcePresenter([
      { id: "1", value: "https://google.com", type: "url", isClicked: false },
      { id: "2", value: "penguin.jpg", type: "img", isClicked: false },
    ]);
  });

  describe("Component", () => {
    beforeEach(() => {
      render(<App presenter={presenter} />);
    });

    it("리소스 리스트가 보여야 한다", () => {
      const resourceItems = screen.getAllByTitle("item");
      expect(resourceItems.length).toBe(2);
    });

    it("리소스 추가가 가능하여야 한다", () => {
      const addUrlButton = screen.getByText("URL 추가");
      userEvent.click(addUrlButton);

      const urlInput = screen.getByTitle("url-input");
      const newUrl = "https://youtube.com";
      userEvent.type(urlInput, newUrl);
      userEvent.keyboard("{Enter}");

      const resourceItems = screen.getAllByTitle("item");
      const resourceTexts = screen.getAllByTitle("resource-text");
      expect(resourceItems.length).toBe(3);
      expect(resourceTexts[0].innerHTML).toBe(newUrl);
    });

    it("리소스 삭제가 가능해야 한다", () => {
      let resourceItems = screen.getAllByTitle("item");
      expect(resourceItems.length).toBe(2);

      const firstItemDeleteBtn = screen.getAllByTitle("delete")[0];
      userEvent.click(firstItemDeleteBtn);

      resourceItems = screen.getAllByTitle("item");
      expect(resourceItems.length).toBe(1);
    });

    it("리소스 이름 변경이 가능해야 한다.", () => {
      const secondResourceEditBtn = screen.getAllByTitle("edit")[1];
      userEvent.click(secondResourceEditBtn);

      const saveBtn = screen.getByTitle("save");
      const editInput = screen.getByTitle("edit-input");
      const newImgFileName = "cat.png";
      userEvent.type(editInput, "{backspace}".repeat(20));
      userEvent.type(editInput, newImgFileName);
      userEvent.click(saveBtn);

      const secondResourceText = screen.getAllByTitle("resource-text")[1];
      expect(secondResourceText.innerHTML).toBe(newImgFileName);
    });

    it("리소스를 클릭하면 뷰어가 보여야 한다.", () => {
      const firstResourceItem = screen.getAllByTitle("item")[0];
      const firstResourceItemValue = firstResourceItem.firstChild.innerHTML;
      userEvent.click(firstResourceItem);

      const viewer = screen.getByTitle("viewer");
      expect(viewer.innerHTML).toBe(firstResourceItemValue);
    });
  });
});

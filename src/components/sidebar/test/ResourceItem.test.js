import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ResourceItem from "../ResourceItem";

describe("ResourceItem", () => {
  const resource = {
    id: "1",
    value: "https://youtube.com",
    type: "url",
    isClicked: false,
  };
  let ResourceComponent;
  let handleDelete;
  let handleEdit;
  let handleActivate;

  beforeEach(() => {
    handleDelete = jest.fn();
    handleEdit = jest.fn();
    handleActivate = jest.fn();
    ResourceComponent = (
      <ResourceItem
        resource={resource}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleActivate={handleActivate}
      />
    );
  });

  describe("삭제 / 수정 / 여백을 클릭했을 때의 동작 테스트", () => {
    beforeEach(() => {
      render(ResourceComponent);
    });

    it("휴지통 버튼을 누르면 handleDelete가 실행된다", () => {
      const button = screen.getByTitle("delete");
      userEvent.click(button);
      expect(handleDelete).toHaveBeenCalledWith(resource.id);
    });

    it("연필 버튼을 누른 후 체크 버튼을 누르면 handleEdit이 실행된다", () => {
      const editButton = screen.getByTitle("edit");
      userEvent.click(editButton);
      const saveButton = screen.getByTitle("save");
      userEvent.click(saveButton);

      expect(handleEdit).toHaveBeenCalledWith(resource.id, resource.value);
    });

    it("버튼 이외의 여백을 누르면 handleActivate가 실행된다", () => {
      const item = screen.getByTitle("item");
      userEvent.click(item);
      expect(handleActivate).toHaveBeenCalledWith(resource.id);
    });
  });
});

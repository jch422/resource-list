import ResourcePresenter from "../resource_presenter";

describe("ResourcePresenter", () => {
  const resources = [
    { id: "1", value: "https://google.com", type: "url", isClicked: false },
    { id: "2", value: "penguin.jpg", type: "img", isClicked: false },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new ResourcePresenter(resources);
    update = jest.fn();
  });

  it("전달된 resources로 초기화된다", () => {
    expect(presenter.getResources()).toEqual(resources);
  });

  it("새 리소스를 추가한다", () => {
    presenter.add("https://naver.com", "url", update);
    expect(presenter.getResources()[0].value).toBe("https://naver.com");
    expect(presenter.getResources().length).toBe(3);
    expect(update).toHaveBeenCalledTimes(1);

    presenter.add("penguin.jpg", "img", update);
    expect(presenter.getResources()[0].value).toBe("penguin.jpg");
    expect(presenter.getResources().length).toBe(4);
    expect(update).toHaveBeenCalledTimes(2);
  });

  it("아이디값을 바탕으로 리소스를 삭제한다", () => {
    presenter.delete("2", update);

    expect(presenter.getResources().length).toBe(1);
    expect(update).toHaveBeenCalledTimes(1);
  });

  it("리소스를 수정한다", () => {
    presenter.edit("1", "https://youtube.com", update);

    expect(presenter.getResources()[0].value).toBe("https://youtube.com");
    expect(update).toHaveBeenCalledTimes(1);
  });

  it("활성화된 리소스는 최대 한 개이다", () => {
    presenter.activate("1", update);
    presenter.activate("2", update);
    expect(
      presenter.getResources().filter((resource) => resource.isClicked).length
    ).toBe(1);
    expect(update).toHaveBeenCalledTimes(2);
  });
});

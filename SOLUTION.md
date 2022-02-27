# Solution

### Component

- 크게 `Sidebar` & `Main` 컴포넌트로 나누어집니다.
  - `Sidebar` 컴포넌트는 리소스 추가/삭제/수정/활성화(보기) 기능을 담당합니다.
  - `Main` 컴포넌트는 특정 리소스가 클릭되어 활성화됐을 때 뷰어로써 기능합니다.

### resource_presenter.ts

- 각각의 리소스 객체를 배열로 관리하면서 `추가`/`삭제`/`수정`/`활성화` 하기 위한 로직을 클래스로 분리했습니다.
- `index.tsx`에서 resource presenter를 `<App />` 컴포넌트에 주입했고, state를 변경하는 setter 메소드가 있는 `<App />` 컴포넌트에서 handler 함수를 정의해서 하위 컴포넌트로 전달합니다.

### resource 구조

```js
interface ResourceState {
  id: string;
  value: string;
  type: "url" | "img";
  isClicked: true | false;
}
```

### 디자인

- Figma에서 제시된 position, width, height, background 등을 그대로 적용했습니다.
- 전체 크기는 1200 x 800로 화면을 가득 채우지는 않습니다.

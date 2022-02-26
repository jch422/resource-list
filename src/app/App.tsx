import React, { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

export interface ResourceState {
  resource: {
    id: string;
    value: string;
    type: "url" | "img";
    isClicked: true | false;
  };
}

function App() {
  const [resources, setResources] = useState<ResourceState["resource"][]>([]);
  const clickedResource = resources.filter((r) => r.isClicked)?.[0] || null;

  return (
    <>
      <Sidebar resources={resources} setResources={setResources} />
      <Main resource={clickedResource} setResources={setResources} />
    </>
  );
}

export default App;

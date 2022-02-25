import React, { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";

export interface ResourceState {
  resource: {
    id: string;
    value: string;
    type: "url" | "img";
  };
}

function App() {
  const [resources, setResources] = useState<ResourceState["resource"][]>([]);

  return (
    <>
      <Sidebar resources={resources} setResources={setResources} />
    </>
  );
}

export default App;

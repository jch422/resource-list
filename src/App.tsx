import React, { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";

export interface ResourceState {
  resource: {
    value: string;
    type: "url" | "img";
  };
}

function App() {
  const [resources, setResources] = useState<ResourceState["resource"][]>([]);

  return (
    <>
      <Sidebar setResources={setResources} />
    </>
  );
}

export default App;

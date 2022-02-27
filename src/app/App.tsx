import React, { useState } from "react";

import ResourcePresenter, { ResourceState } from "./resource_presenter";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

interface AppProps {
  presenter: ResourcePresenter;
}

const App: React.FC<AppProps> = ({ presenter }) => {
  const [resources, setResources] = useState<ResourceState[]>(
    presenter.getResources()
  );
  const clickedResource =
    resources.filter((resource) => resource.isClicked)?.[0] || null;

  const handleAdd = (value: string, type: "img" | "url"): void => {
    presenter.add(value, type, setResources);
  };

  const handleDelete = (id: string): void => {
    presenter.delete(id, setResources);
  };

  const handleEdit = (id: string, value: string): void => {
    presenter.edit(id, value, setResources);
  };

  const handleActivate = (id: string): void => {
    presenter.activate(id, setResources);
  };

  return (
    <>
      <Sidebar
        resources={resources}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleActivate={handleActivate}
      />
      <Main resource={clickedResource} handleActivate={handleActivate} />
    </>
  );
};

export default App;

import React from "react";
import { v4 as uuid } from "uuid";

export interface ResourceState {
  id: string;
  value: string;
  type: "url" | "img";
  isClicked: true | false;
}

export default class ResourcePresenter {
  resources: ResourceState[];

  constructor(resources: ResourceState[]) {
    this.resources = resources;
  }

  getResources(): ResourceState[] {
    return this.resources;
  }

  add(
    value: string,
    type: "url" | "img",
    update: React.Dispatch<React.SetStateAction<ResourceState[]>>
  ): void {
    const newResource: ResourceState = {
      id: uuid(),
      value,
      type,
      isClicked: false,
    };

    this.resources = [newResource, ...this.resources];
    update(this.resources);
  }

  delete(
    id: string,
    update: React.Dispatch<React.SetStateAction<ResourceState[]>>
  ): void {
    this.resources = this.resources.filter((resource) => resource.id !== id);
    update(this.resources);
  }

  edit(
    id: string,
    value: string,
    update: React.Dispatch<React.SetStateAction<ResourceState[]>>
  ): void {
    this.resources = this.resources.map((resource) => {
      if (resource.id !== id) {
        return resource;
      }
      return {
        ...resource,
        value,
      };
    });
    update(this.resources);
  }

  activate(
    id: string,
    update: React.Dispatch<React.SetStateAction<ResourceState[]>>
  ): void {
    this.resources = this.resources.map((resource) => {
      if (resource.id !== id) {
        return {
          ...resource,
          isClicked: false,
        };
      }
      return {
        ...resource,
        isClicked: !resource.isClicked,
      };
    });
    update(this.resources);
  }
}

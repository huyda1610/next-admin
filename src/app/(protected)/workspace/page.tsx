import React from "react";
import WorkspaceHeader from "./components/header";
import WorkspaceTechnologies from "./components/technologies";
import WorkspaceNavigator from "./components/navigator";
import WorkspaceNews from "./components/news";
import WorkspaceTodoList from "./components/todo";
import WorkspaceVisitsSource from "./components/visits-source";
import type { Metadata } from "next";
import { getMetadataTitle } from "@/@core/utils/getMetadataTitle";

export const metadata: Metadata = {
  title: getMetadataTitle("Workspace"),
  description: "",
};

function WorkspacePage() {
  return (
    <article className="p-5">
      <WorkspaceHeader />

      <section className="mt-5 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="w-full lg:col-span-3 flex flex-col gap-4">
          <WorkspaceTechnologies />
          <WorkspaceNews />
        </div>
        <div className="w-full lg:col-span-2 flex flex-col gap-4">
          <WorkspaceNavigator />
          <WorkspaceTodoList />
          <WorkspaceVisitsSource />
        </div>
      </section>
    </article>
  );
}

export default WorkspacePage;

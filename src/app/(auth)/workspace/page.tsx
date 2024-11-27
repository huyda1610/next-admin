'use client';
import React from 'react';
import WorkspaceHeader from '@app/(auth)/workspace/components/header';
import WorkspaceTechnologies from './components/technologies';
import WorkspaceNavigator from '@app/(auth)/workspace/components/navigator';
import WorkspaceNews from '@app/(auth)/workspace/components/news';
import WorkspaceTodoList from '@app/(auth)/workspace/components/todo';
import WorkspaceVisitSource from '@app/(auth)/workspace/components/visit-source';
import { useClientMetadata } from '@hooks/useClientMetadata';

function WorkspacePage() {
  useClientMetadata('Workspace');

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
          <WorkspaceVisitSource />
        </div>
      </section>
    </article>
  );
}

export default WorkspacePage;

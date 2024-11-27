'use client';
import React from 'react';
import WorkspaceHeader from '@app/(auth)/workspace/components/header';
import WorkspaceTechnologies from './components/technologies';
import WorkspaceNavigator from '@app/(auth)/workspace/components/navigator';

function WorkspacePage() {
  return (
    <article className="p-5">
      <WorkspaceHeader />

      <section className="mt-5 flex max-lg:flex-col gap-4">
        <div className="w-full lg:w-2/3">
          <WorkspaceTechnologies />
        </div>
        <div className="w-full lg:w-1/3">
          <WorkspaceNavigator />
        </div>
      </section>
    </article>
  );
}

export default WorkspacePage;

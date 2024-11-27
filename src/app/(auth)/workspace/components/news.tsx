'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@components/shadcn/card';
import ShareIcon from '@components/share/icon';

function WorkspaceNews() {
  return (
    <Card>
      <CardHeader>Latest news</CardHeader>
      <CardContent className="flex flex-col p-5 pt-0">
        <section className="flex justify-between items-end py-5 border-border-color border-b border-solid">
          <div className="flex gap-x-4 items-center">
            <ShareIcon
              select="alien"
              iconProps={{
                width: 40,
                height: 40,
              }}
            />
            <div className="flex flex-col justify-between">
              <strong>William</strong>
              <span>abczsdsd</span>
            </div>
          </div>

          <span>1 day ago</span>
        </section>
      </CardContent>
    </Card>
  );
}

export default WorkspaceNews;

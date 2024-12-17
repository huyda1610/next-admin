"use client";
import React from "react";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import VisitsChart from "./visits-chart";
import TrafficChart from "./traffic-chart";

function AnalyticsTabs() {
  return (
    <Card>
      <CardContent className="px-4 pb-5 pt-3">
        <Tabs defaultValue="traffic">
          <TabsList className="grid grid-cols-2 w-fit">
            <TabsTrigger value="traffic">Traffic trends</TabsTrigger>
            <TabsTrigger value="visits">Monthly visits</TabsTrigger>
          </TabsList>
          <TabsContent value="traffic">
            <TrafficChart />
          </TabsContent>
          <TabsContent value="visits">
            <VisitsChart />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default AnalyticsTabs;

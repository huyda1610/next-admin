"use client";
import React from "react";
import CardItem from "./card-item";
import { Binoculars, Clock, Download, User } from "lucide-react";

const data = [
  {
    title: "Users",
    value: 2000,
    totalTitle: "Total",
    totalValue: 120000,
    icon: <User className="w-5 h-5 text-muted-foreground" />,
  },
  {
    title: "Visits",
    value: 2000,
    totalTitle: "Total",
    totalValue: 500000,
    icon: <Binoculars className="w-5 h-5 text-muted-foreground" />,
  },
  {
    title: "Downloads",
    value: 8000,
    totalTitle: "Total",
    totalValue: 120000,
    icon: <Download className="w-5 h-5 text-muted-foreground" />,
  },
  {
    title: "Usage",
    value: 5000,
    totalTitle: "Total",
    totalValue: 50000,
    icon: <Clock className="w-5 h-5 text-muted-foreground" />,
  },
];

function AnalyticsInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <CardItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default AnalyticsInfo;

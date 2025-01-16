import React from "react";
import type { Metadata } from "next";
import { getMetadataTitle } from "@/@core/utils/getMetadataTitle";
import FormBuilderClientPage from "@/app/(protected)/(demos)/form-builder/page.client";

export const metadata: Metadata = {
  title: getMetadataTitle("Form Builder"),
  description: "",
};

function AnalyticsPage() {
  return <FormBuilderClientPage />;
}

export default AnalyticsPage;

import React from "react";
import type { Metadata } from "next";
import { getMetadataTitle } from "@/@core/utils/getMetadataTitle";
import ContentLayout from "@/components/shared/content-layout";
import FormBuilderComponent from "@/app/(protected)/(demos)/form-builder/index";

export const metadata: Metadata = {
  title: getMetadataTitle("Form Builder"),
  description: "",
};

function FormBuilderPage() {
  return (
    <ContentLayout
      title="Form Builder"
      description="Drag and drop to create a beautiful form"
    >
      <FormBuilderComponent />
    </ContentLayout>
  );
}

export default FormBuilderPage;

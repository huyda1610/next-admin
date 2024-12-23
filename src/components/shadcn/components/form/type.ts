import { ControllerRenderProps } from "react-hook-form";

export type FormUIType = {
  label?: string;
  description?: string;
  field: ControllerRenderProps;
};

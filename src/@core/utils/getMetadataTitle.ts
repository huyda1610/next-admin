import { APP_NAME } from "@/@core/const";

export const getMetadataTitle = (title: string): string => {
  return `${title} - ${APP_NAME}`;
};

'use client';
import { useEffect } from 'react';
import { APP_NAME } from '@core/const/app-const';

export const useClientMetadata = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + ' - ' + APP_NAME;
    return () => {
      document.title = prevTitle;
    };
  });
};

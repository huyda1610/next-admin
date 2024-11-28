'use client';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@core/const/app-const';

declare global {
  interface String {
    toDateFormat(format?: string): string;
  }
}

String.prototype.toDateFormat = function (this: string, format: string = DATE_FORMAT): string {
  if (!this) return '';

  return dayjs(this).format(format);
};

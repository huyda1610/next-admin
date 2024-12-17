import dayjs from "dayjs";

/**
 * Generate a random date between two dates
 * @param {Date|string} start - Start of the date range (default: 1 year ago)
 * @param {Date|string} end - End of the date range (default: 1 year from now)
 * @returns {dayjs.Dayjs} Randomly generated date
 */
function date(start?: Date | string, end?: Date | string): dayjs.Dayjs {
  // If no start date provided, default to 1 year ago
  const startDate = start ? dayjs(start) : dayjs().subtract(1, "year");

  // If no end date provided, default to 1 year from now
  const endDate = end ? dayjs(end) : dayjs().add(1, "year");

  // Calculate the time difference in milliseconds
  const timeDiff = endDate.diff(startDate);

  // Generate a random time within the range
  const randomTime = Math.random() * timeDiff;

  // Return the random date
  return dayjs(startDate.valueOf() + randomTime);
}

export function number(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomGenerate = {
  date,
  number,
};

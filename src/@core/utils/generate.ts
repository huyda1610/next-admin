const array2D = (totalItems: number, rows: number): number[][] => {
  // Input validation
  if (totalItems <= 0 || rows <= 0) {
    return [];
  }
  if (rows > totalItems) {
    return [];
  }

  // Calculate columns needed
  const cols = Math.ceil(totalItems / rows);
  const array = [];
  let counter = 1;

  // Create the array row by row
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      // Add number if we haven't exceeded total items
      if (counter <= totalItems) {
        row.push(counter);
        counter++;
      }
    }
    array.push(row);
  }

  return array;
};

export const generate = {
  array2D,
};

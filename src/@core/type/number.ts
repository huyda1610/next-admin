export {}; // This makes the file a module

declare global {
  interface Number {
    toCurrencyFormat(): string;
  }
}

Number.prototype.toCurrencyFormat = function (this: number): string {
  if (this === null || this === undefined) return '';

  if (isNaN(this)) return this.toString();

  if (this === Infinity || this === -Infinity) {
    return this.toString().replace(/^[+-]?\d+/, function (int) {
      return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 6,
  }).format(this);
};

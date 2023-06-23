export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits:
      Math.round(value * 100) / 100 === Math.round(value) ? 0 : 2,
  });

  if (value >= 1) {
    return formatter.format(value);
  } else {
    return `$${Math.round(value * 1000000) / 1000000}`;
  }
};

export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (value >= 1) {
    return formatter.format(value);
  } else {
    return `$${Math.round(value * 1000000) / 1000000}`;
  }
};

export const percentageFormatter = (value: number) => {
  const percentage = Math.round(value * 100) / 100;

  if (percentage > 0) {
    return `+${percentage}%`;
  } else {
    return `${percentage}%`;
  }
};

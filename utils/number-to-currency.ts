export const formatToCurrency = (value: number | null | undefined): string => {
  if (value === null || value === undefined) {
    return '';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);
};

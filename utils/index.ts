export const formatCurrency = (value: number, currency = 'EUR') => {
  return new Intl.NumberFormat('en-US', {
    currency,
    style: 'currency',
  }).format(value)
}

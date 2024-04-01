export const formatCurrency = (
  value: number,
  currency = 'EUR',
  locale = 'it-IT',
) => {
  return new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
  }).format(value)
}

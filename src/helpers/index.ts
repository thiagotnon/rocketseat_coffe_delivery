export const formatMoney = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'symbol',
    currency: 'BRL',
  })
}

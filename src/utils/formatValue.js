export const formatCurrency = (value) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
;

export const formatPercent = (value) =>
  Intl.NumberFormat("pt-BR", {
    style: "percent",
  }).format(value);
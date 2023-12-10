export function currency(currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "MXN",
  }).format(currency);
}

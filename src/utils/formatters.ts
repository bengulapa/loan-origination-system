export function formatCurrency(
  value: string | number,
  hideSign = false
): string {
  const amount = value ? +value : 0;

  const formatted = new Intl.NumberFormat("en-AU", {
    currency: "AUD",
    style: "currency",
  }).format(amount);

  return hideSign ? formatted.replace("$", "") : formatted;
}

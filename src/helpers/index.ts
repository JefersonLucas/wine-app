export function formatToReal(value: number): string {
  return value
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function percentage(discount: number, price: number): string {
  return ((discount * 100) / price).toString().substring(2, 0);
}

export function limitText(
  text: string,
  limit: number,
  isEllipsis: boolean = true,
): string {
  const arrayText: string[] = text.split("");

  const length: number = text.length;

  let stringText: string;

  let i: number;

  for (i = length; i >= limit; i--) arrayText.pop();

  isEllipsis
    ? (stringText = arrayText.join("").padEnd(limit + 2, ".."))
    : (stringText = arrayText.join(""));

  return stringText;
}

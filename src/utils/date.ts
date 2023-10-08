export function formatIsoDateString(isoDateString: string): string {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString(undefined, options);
}

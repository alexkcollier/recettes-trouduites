/**
 * Format a date value as a string
 * @param value Value to format
 * @returns Date string formatted as: 1 janvier 2023
 */
export default function formatDate(value: string | number | Date) {
  const formatter = new Intl.DateTimeFormat(['fr-CA'], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const dateValue = new Date(
    typeof value === 'string' ? value.replace('Z', '') : value,
  );

  return formatter.format(dateValue);
}

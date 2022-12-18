export default function formatDate(val: string | number | Date) {
  const formatter = new Intl.DateTimeFormat(['fr-CA'], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const dateValue = new Date(
    typeof val === 'string' ? val.replace('Z', '') : val,
  );

  return formatter.format(dateValue);
}

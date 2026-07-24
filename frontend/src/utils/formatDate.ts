export function formatDate(iso: string, locale = 'en-IN'): string {
  return new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

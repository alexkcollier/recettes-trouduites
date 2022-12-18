export interface MarkdownFrontmatter {
  title: string;
  /** YYYY-MM-DD in markdown, converted to ISO date string by astro */
  date: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

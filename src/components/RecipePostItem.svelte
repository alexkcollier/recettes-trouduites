<script lang="ts">
  import formatDate from 'src/utils/formatDate';

  export let url: string;
  export let label: string;
  /** ISO date string */
  export let date: string;
  export let attribution: string | undefined;

  const attributionText = attribution ? ` • ${attribution}` : '';
</script>

<article>
  <h1>
    <a href={url}>{label}</a>
  </h1>

  <footer>
    <time>{formatDate(date)}</time>
    <address>{attributionText}</address>
  </footer>
</article>

<style>
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  footer {
    color: rgba(0 0 0 / 0.56);
  }

  address {
    display: inline;
  }
</style>

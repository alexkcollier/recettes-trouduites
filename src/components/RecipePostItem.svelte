<script lang="ts">
  export let url: string;
  export let label: string;
  export let date: string;

  const formatter = new Intl.DateTimeFormat(['fr-CA'], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const dateValue = new Date(date);
</script>

<article>
  <h1>
    <a href={url}>{label}</a>
  </h1>

  <footer>
    {formatter.format(dateValue)}
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
</style>

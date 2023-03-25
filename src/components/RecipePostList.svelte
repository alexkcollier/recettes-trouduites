<script lang="ts">
  import RecipePostItem from '@components/RecipePostItem.svelte';
  import type { CollectionEntry } from 'astro:content';

  export let posts: CollectionEntry<'recettes'>[];
</script>

<ul>
  {#each posts as post}
    {#if post.slug}
      <li>
        <RecipePostItem
          url={`/${post.collection}/${post.slug}`}
          label={post.data.title}
          date={post.data.date}
          attribution={post.data?.sourceText}
        />
      </li>
    {/if}
  {/each}
</ul>

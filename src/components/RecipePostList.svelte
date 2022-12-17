<script lang="ts">
  import RecipePostItem from '@components/RecipePostItem.svelte';
  import type { MarkdownFrontmatter } from '@layouts/MarkdownFrontmatter';
  import type { MarkdownInstance } from 'astro';

  export let posts: readonly MarkdownInstance<MarkdownFrontmatter>[];
</script>

<ul>
  {#each posts as post}
    {#if post.url}
      <li>
        <RecipePostItem
          url={post.url}
          label={post.frontmatter.title}
          date={post.frontmatter.date}
        />
      </li>
    {/if}
  {/each}
</ul>

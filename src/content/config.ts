import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    sourceUrl: z.string().optional(),
    sourceText: z.string().optional(),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  recettes: blogCollection,
};

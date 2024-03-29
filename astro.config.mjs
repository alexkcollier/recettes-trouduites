import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        publish_mode: 'editorial_workflow',
        backend: {
          name: 'github',
          branch: 'main',
          repo: 'alexkcollier/recettes-trouduites',
        },
        collections: [
          {
            name: 'recettes',
            label: 'Recette',
            folder: 'src/content/recettes',
            create: true,
            delete: true,
            fields: [
              {
                name: 'title',
                widget: 'string',
                label: 'Titre',
              },
              {
                name: 'date',
                widget: 'date',
                label: 'Date',
                date_format: 'YYYY-MM-DD',
              },
              {
                name: 'sourceUrl',
                widget: 'string',
                label: 'URL de source',
                required: false,
              },
              {
                name: 'sourceText',
                widget: 'string',
                label: 'Texte de source',
                required: false,
              },
              {
                name: 'body',
                widget: 'markdown',
                label: 'Corps',
              },
            ],
          },
        ],
      },
    }),
    svelte(),
  ],
});

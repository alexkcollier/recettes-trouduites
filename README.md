# Bienvenue à `recettes-trouduites`

Des recettes traduites, que les traductions soient bien faites ou non.

Ce projet est une exercise d'apprentissage, à la fois en français et en Astro.

Les recettes et la documentation seront rédigées en français, tout le
code en anglais. Je privilégierai les termes franco-canadiens.

## 🚀 Structure du projet

Dans ce projet, vous trouverez les fichiers et dossiers suivants:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro cherche les fichiers `.astro` ou `.md` dans le dossier `src/pages/`.
Chaque fichier crée une route basée sur son nom.

Il y a rien de spécial dans `src/components/`. C'est où on met tous les
composants.

Tous les ressources statiques, comme des images, peuvent être placés dans
`public/`.

## 🧞 Commandes

| Commande               | Action                                                        |
| :--------------------- | :------------------------------------------------------------ |
| `npm install`          | Installer les dépendances                                     |
| `npm run dev`          | Commencer le serveur local de dev `localhost:3000`            |
| `npm run build`        | Compiler le site pour production dans `./dist/`               |
| `npm run preview`      | Prévisualiser localement le build avant de le déployer        |
| `npm run astro ...`    | Exécuter des commandes CLI comme `astro add`, `astro preview` |
| `npm run astro --help` | Obtenir de l'aide avec Astro CLI                              |

## Aide

- [Documentation Astro](https://docs.astro.build)
- [Discord server](https://astro.build/chat).

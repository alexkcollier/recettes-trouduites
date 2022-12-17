module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:astro/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.astro'],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};

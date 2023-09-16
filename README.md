# Language learning app

A language learning app written in React using TypeScript scaffolded with Vite.

## Workflow

```bash
npm run build
npm run dev
```

## Scaffolding the app

```bash
npm create vite@latest
npm install @mui/material @mui/icons-material
npm install @emotion/styled
npm install react-router-dom
```

The directory structure:

```txt
my-language-learning-app/
├── src/
|   ├── components/
|   |   ├── Dialog.tsx
|   |   ├── Vocabulary.tsx
|   |   └── ...
|   ├── data/
|   |   └── chapterData.ts (Place your JSON data here)
|   ├── pages/
|   |   ├── Home.tsx
|   |   └── ...
|   ├── App.tsx
|   ├── index.tsx
├── public/
|   |   ├── chapter1Data.json
|   |   ├── chapter2Data.json
|   |   └── ...
├── ...
```

## Chapters

```js
{
    unid: <unique-id>,
    encoding: "utf-8",
    nativeLanguageTitle: "En",
    targetLanguageTitle: "Ko",
    nativeLanguageEncoding: "",
    targetLanguageEncoding: "euc-kr",
    chapter: "328",
    dialogue: "Real-Life Korean Conversations: Intermediate",
    titleTarget: "그냥 몸이 좀 안 좋네.",
    titleNative: "I just don’t feel well.",
    dialog: { ... }
    vocabulary
    patterns
    exercises
    appliedPatterns
}
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

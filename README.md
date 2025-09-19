# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

```
vue-examples
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ 1_app
│  │  ├─ App.vue
│  │  ├─ index.ts
│  │  └─ providers
│  │     ├─ router
│  │     │  └─ index.ts
│  │     └─ store
│  │        └─ index.ts
│  ├─ 2_pages
│  │  └─ MainPage
│  │     ├─ index.ts
│  │     └─ ui
│  │        └─ MainPage.vue
│  ├─ 3_widgets
│  │  └─ user-table
│  │     ├─ index.ts
│  │     └─ ui
│  │        ├─ UserTable.vue
│  │        ├─ UserTableColumns.vue
│  │        └─ UserTableRows.vue
│  ├─ 4_features
│  │  ├─ user-edit
│  │  └─ user-search
│  │     ├─ index.ts
│  │     └─ ui
│  │        └─ UserSearch.vue
│  ├─ 5_entities
│  │  └─ user
│  │     └─ model
│  │        ├─ api
│  │        │  └─ userApi.ts
│  │        ├─ store.ts
│  │        └─ types.ts
│  ├─ 6_shared
│  ├─ shims-vue.d.ts
│  ├─ style.css
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
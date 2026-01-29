import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      'src/app': resolve(__dirname, 'src/1_app'),
      'src/pages': resolve(__dirname, 'src/2_pages'),
      'src/widgets': resolve(__dirname, 'src/3_widgets'),
      'src/features': resolve(__dirname, 'src/4_features'),
      'src/entities': resolve(__dirname, 'src/5_entities'),
      'src/shared': resolve(__dirname, 'src/6_shared'),
    },
  },
})

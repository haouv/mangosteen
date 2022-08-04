import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import {svgstore} from './src/vite_plugins/svgstore';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    proxy: {

      '/api/v1': {
        target: 'http://127.0.0.1:3001',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api\/v1/, '')
      },
   
    }
  }
});

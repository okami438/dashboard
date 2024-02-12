import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import svgLoader from 'vite-svg-loader';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({defaultImport: 'component'})],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: [
      { find: '@', replacement: path.join(__dirname, 'src') },
      { find: /^src\//, replacement: path.join(__dirname, "src/") },
      { find: "/root/src", replacement: path.join(__dirname, "src") },
    ],
  },
})

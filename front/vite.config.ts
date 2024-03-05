import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: [{ find: '@pages', replacement: './pages' }],
  },

  server: {
    port: 3000,
  },
});

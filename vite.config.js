import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces (localhost & local network IP)
    port: 5173,
    open: false,
    strictPort: false,
    watch: {
      usePolling: true, // Guarantees instant on-the-spot file change detection on Windows
      interval: 100     // 100ms ultra-fast polling interval
    },
    hmr: {
      overlay: true     // Instant Hot Module Replacement with interactive error overlay
    }
  }
});

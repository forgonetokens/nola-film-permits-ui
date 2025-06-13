import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ This is what Render needs
    port: 8080       // ✅ Matches your start script
  }
})

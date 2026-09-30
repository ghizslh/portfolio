import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remplace "portfolio" par le nom réel de ton repo GitHub si tu déploies
// sur https://ghizslh.github.io/nom-du-repo/. Laisse "/" si tu déploies
// sur un domaine personnalisé ou sur ghizslh.github.io directement.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

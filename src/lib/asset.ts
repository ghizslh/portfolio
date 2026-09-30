// Toutes les images placées dans /public doivent passer par cette
// fonction plutôt que d'utiliser un chemin absolu "/xxx" en dur.
// En dev, BASE_URL vaut "/", donc rien ne change. Une fois déployé
// sur GitHub Pages avec base: "/portfolio/" (voir vite.config.ts),
// un chemin en dur comme "/projects/DiaMini/cover.jpg" pointerait
// vers la racine du domaine au lieu de "/portfolio/...", et l'image
// ne s'afficherait jamais. asset() préfixe toujours avec la bonne base.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL // ex: "/" en dev, "/portfolio/" en prod
  return base + path.replace(/^\/+/, '')
}

export interface Creation {
  slug: string
  name: string
  category: { fr: string; en: string }
  image: string
}

// Ajoute un objet ici pour chaque nouvelle création. Place l'image
// correspondante dans public/creations/.
export const creations: Creation[] = [
  {
    slug: 'branding-atelier-1',
    name: 'Atelier Cours Maths',
    category: { fr: 'Branding', en: 'Branding' },
    image: '/creations/branding-1.png',
  },
  {
    slug: 'branding-atelier-2',
    name: 'Atelier Cours Maths',
    category: { fr: 'Affiche', en: 'Poster' },
    image: '/creations/branding-2.png',
  },
  {
    slug: 'social-1',
    name: 'Atelier Cours Maths',
    category: { fr: 'Social Media', en: 'Social Media' },
    image: '/creations/branding-3.png',
  },
  {
    slug: 'uiux-1',
    name: 'DiaMini',
    category: { fr: 'UI/UX', en: 'UI/UX' },
    image: '/creations/branding-4.jpg',
  },
]

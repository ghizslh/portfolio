export type ProjectCategory = 'app' | 'web' | 'design'
export type MockupType = 'phone' | 'laptop' | 'graphic'

export interface Project {
  slug: string
  name: string
  // Titre affiché sous forme de catégorie courte, ex: "Application mobile"
  categoryLabel: { fr: string; en: string }
  category: ProjectCategory
  // Type de mockup utilisé pour présenter la cover (section 26 du brief)
  mockup: MockupType
  shortDescription: { fr: string; en: string }
  technologies: string[]
  // Chemin de la cover, utilisée sur la carte de la homepage
  cover: string
  // Captures d'écran affichées sur la page projet dédiée
  images: string[]
  link?: string
  linkLabel?: { fr: string; en: string }
  linkType?: 'site' | 'instagram'
}

export const projects: Project[] = [
  {
    slug: 'DiaMini',
    name: 'DiaMini',
    categoryLabel: { fr: 'Application mobile', en: 'Mobile application' },
    category: 'app',
    mockup: 'phone',
    shortDescription: {
      fr: 'Suivi du diabète pour les enfants diabétiques.',
      en: 'Diabetes tracking for diabetic children.',
    },
    technologies: ['Flutter', 'Dart', 'IA'],
    cover: '/projects/DiaMini/cover.jpg',
    images: [
      '/projects/DiaMini/screen1.png',
      '/projects/DiaMini/screen2.png',
      '/projects/DiaMini/screen3.png',
      '/projects/DiaMini/screen4.png',
    ],
  },
  {
    slug: 'oreka',
    name: 'Oreka Promotion Immobilière',
    categoryLabel: { fr: 'Site vitrine / immobilier', en: 'Real estate showcase' },
    category: 'web',
    mockup: 'laptop',
    shortDescription: {
      fr: 'Site vitrine pour un projet immobilier à Oran.',
      en: 'Showcase website for a real estate project in Oran.',
    },
    technologies: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
    cover: '/projects/oreka/cover.png',
    images: ['/projects/oreka/screen1.png', '/projects/oreka/screen2.png', '/projects/oreka/screen3.png'],
    link: 'https://ghizslh.github.io/oreka/',
    linkType: 'site',
  },
  {
    slug: 'slayfit',
    name: 'Salle de sport Slayfit',
    categoryLabel: { fr: 'Site web / fitness', en: 'Fitness website' },
    category: 'web',
    mockup: 'laptop',
    shortDescription: {
      fr: 'Site web pour une salle de sport.',
      en: 'Website for a fitness gym.',
    },
    technologies: ['Web Design', 'Development'],
    cover: '/projects/slayfit/cover.png',
    images: ['/projects/slayfit/screen1.png', '/projects/slayfit/screen2.png', '/projects/slayfit/screen3.png', '/projects/slayfit/screen4.png' , '/projects/slayfit/screen5.png'],
    link: 'https://ghizslh.github.io/slayfit/',
    linkType: 'site',
  },
  {
    slug: 'atelier-cours-maths',
    name: 'Atelier Cours Maths',
    categoryLabel: { fr: 'Site web', en: 'Website' },
    category: 'web',
    mockup: 'laptop',
    shortDescription: {
      fr: 'Site web pour des cours particuliers de mathématiques.',
      en: 'Website for private math tutoring.',
    },
    technologies: ['React', 'TypeScript', 'Vite'],
    cover: '/projects/atelier-maths/cover.png',
    images: [
      '/projects/atelier-maths/screen1.png',
      '/projects/atelier-maths/screen2.png',
      '/projects/atelier-maths/screen3.png',
      '/projects/atelier-maths/screen4.png',
    ],
    link: 'https://ghizslh.github.io/Atelier-Cours-Maths/',
    linkType: 'site',
  },
  {
    slug: 'branding-atelier',
    name: 'Identité visuelle Atelier Cours Maths',
    categoryLabel: { fr: 'Branding / Design graphique', en: 'Branding / Graphic design' },
    category: 'design',
    mockup: 'graphic',
    shortDescription: {
      fr: 'Identité visuelle, logo et supports de communication.',
      en: 'Visual identity, logo and communication materials.',
    },
    technologies: ['Canva', 'UI/UX'],
    cover: '/projects/branding-atelier/cover.png',
    images: [
      '/projects/branding-atelier/design1.png',
      '/projects/branding-atelier/design2.png',
      '/projects/branding-atelier/design3.png',
    ],
    link: 'https://www.instagram.com/ateliercoursmaths/',
    linkType: 'instagram',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

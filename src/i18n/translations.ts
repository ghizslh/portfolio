export type Lang = 'fr' | 'en'

export const translations: Record<Lang, TranslationShape> = {
  fr: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      creations: 'Creations',
      contact: 'Contact',
      back: 'Retour aux projets',
    },
    hero: {
      role: 'Développeuse informatique\n& créatrice digitale',
      intro:
        "Passionnée par la création de projets digitaux et le design, j'aime rendre chaque idée réalisable sur le digital.",
      cta: 'Voir mes projets',
      photoPlaceholder: 'Ajoute ta photo ici',
    },
    about: {
      eyebrow: 'About me',
      education: 'Master 2 Informatique — USTO',
      location: 'Oran, Algérie',
      focus: 'Développement web · Applications · UI/UX · IA',
      quote:
        "Je crée des projets digitaux à la croisée du développement, du design et de la créativité.",
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Ce que je pratique',
    },
    projects: {
      eyebrow: 'Mes projets',
      title: 'Selected Projects',
      subtitle: 'Une sélection de projets que j\'ai réalisés.',
      filterAll: 'Tous',
      viewProject: 'Voir le projet',
    },
    projectPage: {
      technologies: 'Technologies',
      visitSite: 'Voir le site',
      viewGithub: 'Voir sur GitHub',
      viewInstagram: 'Instagram',
      noLink: 'Lien à venir',
    },
    creations: {
      eyebrow: 'Creations',
      title: 'Mes créations',
      subtitle: 'Design, identité visuelle, supports de communication.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      text: 'Vous avez une idée, un projet ou souhaitez simplement échanger ?',
      cta: 'Me contacter',
      email: 'Email',
      phone: 'Téléphone',
      github: 'GitHub',
      instagram: 'Instagram',
      location: 'Localisation',
    },
    footer: {
      role: 'Développeuse informatique & créatrice digitale',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      creations: 'Creations',
      contact: 'Contact',
      back: 'Back to projects',
    },
    hero: {
      role: 'Software developer\n& digital creator',
      intro:
        "I love turning ideas into real digital projects, at the crossing point of code and design.",
      cta: 'See my work',
      photoPlaceholder: 'Add your photo here',
    },
    about: {
      eyebrow: 'About me',
      education: "Master's in Computer Science — USTO",
      location: 'Oran, Algeria',
      focus: 'Web development · Applications · UI/UX · AI',
      quote:
        'I build digital projects at the crossing point of development, design and creativity.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'What I work with',
    },
    projects: {
      eyebrow: 'My work',
      title: 'Selected Projects',
      subtitle: "A selection of projects I've worked on.",
      filterAll: 'All',
      viewProject: 'View project',
    },
    projectPage: {
      technologies: 'Technologies',
      visitSite: 'Visit site',
      viewGithub: 'View on GitHub',
      viewInstagram: 'Instagram',
      noLink: 'Link coming soon',
    },
    creations: {
      eyebrow: 'Creations',
      title: 'My creations',
      subtitle: 'Design, visual identity, communication materials.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      text: 'Have an idea, a project, or just want to say hi?',
      cta: 'Get in touch',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      instagram: 'Instagram',
      location: 'Location',
    },
    footer: {
      role: 'Software developer & digital creator',
      rights: 'All rights reserved.',
    },
  },
}

export interface TranslationShape {
  nav: {
    home: string
    about: string
    projects: string
    creations: string
    contact: string
    back: string
  }
  hero: {
    role: string
    intro: string
    cta: string
    photoPlaceholder: string
  }
  about: {
    eyebrow: string
    education: string
    location: string
    focus: string
    quote: string
  }
  skills: {
    eyebrow: string
    title: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    filterAll: string
    viewProject: string
  }
  projectPage: {
    technologies: string
    visitSite: string
    viewGithub: string
    viewInstagram: string
    noLink: string
  }
  creations: {
    eyebrow: string
    title: string
    subtitle: string
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    cta: string
    email: string
    phone: string
    github: string
    instagram: string
    location: string
  }
  footer: {
    role: string
    rights: string
  }
}

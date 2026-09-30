# Portfolio — Ghizlene Salah

Portfolio personnel bilingue (FR/EN), construit avec React + TypeScript + Vite.

## 1. Arborescence du projet

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── 404.html                  # redirection SPA pour GitHub Pages
│   ├── profile.jpg               # (à ajouter) photo du Hero
│   ├── about.jpg                 # (à ajouter) photo de la section About
│   ├── projects/
│   │   ├── DiaMini/            # cover.png, screen1.png ... screen4.png
│   │   ├── oreka/                # cover.png, screen1.png ... screen3.png
│   │   ├── slayfit/              # cover.png, screen1.png ... screen3.png
│   │   ├── atelier-maths/        # cover.png, screen1.png ... screen3.png
│   │   └── branding-atelier/     # cover.png, design1.png ... design4.png
│   └── creations/                # branding-1.png, social-1.png, ...
├── src/
│   ├── components/                # Navbar, Footer, ProjectCover, Reveal, LanguageSwitch
│   ├── sections/                  # Hero, About, Skills, Projects, Creations, Contact
│   ├── pages/                     # Home, ProjectPage
│   ├── data/                      # projects.ts, creations.ts
│   ├── i18n/                      # translations.ts, LanguageContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # design tokens + tous les styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 2. Installer et lancer le projet

```bash
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:5173`.

## 3. Build de production

```bash
npm run build
npm run preview   # pour prévisualiser le build localement
```

Le résultat est généré dans `dist/`.

## 4. Où placer les images

Chaque projet a son propre dossier dans `public/projects/<slug>/`. Il suffit de
déposer les fichiers avec les noms déjà attendus par `src/data/projects.ts` :

- `public/projects/DiaMini/cover.png`, `screen1.png` à `screen4.png`
- `public/projects/oreka/cover.png`, `screen1.png` à `screen3.png`
- `public/projects/slayfit/cover.png`, `screen1.png` à `screen3.png`
- `public/projects/atelier-maths/cover.png`, `screen1.png` à `screen3.png`
- `public/projects/branding-atelier/cover.png`, `design1.png` à `design4.png`

Pour la photo de profil : ajoute `public/profile.jpg` (Hero) et `public/about.jpg`
(section About).

Tant qu'une image n'existe pas, un emplacement élégant clairement identifié
("Image à ajouter") s'affiche à la place — le site reste toujours propre,
même sans aucune image.

## 5. Ajouter un nouveau projet

Ouvre `src/data/projects.ts` et ajoute un objet au tableau `projects` :

```ts
{
  slug: 'mon-projet',
  name: 'MON PROJET',
  categoryLabel: { fr: 'Site web', en: 'Website' },
  category: 'web', // 'app' | 'web' | 'design'
  shortDescription: { fr: '...', en: '...' },
  technologies: ['React', 'TypeScript'],
  cover: '/projects/mon-projet/cover.png',
  images: ['/projects/mon-projet/screen1.png'],
  link: 'https://...',
  linkType: 'site', // 'site' | 'github' | 'instagram'
}
```

Puis crée le dossier `public/projects/mon-projet/` avec les images
correspondantes. La page dédiée `/project/mon-projet` est générée
automatiquement, ainsi que sa carte sur la page d'accueil.

## 6. Modifier les informations personnelles

- Coordonnées (email, téléphone, GitHub, Instagram) : `src/sections/Contact.tsx`
  et `src/components/Footer.tsx`
- Titre, sous-titre, phrase d'intro du Hero : `src/i18n/translations.ts` (clé `hero`)
- Diplôme / localisation : `src/i18n/translations.ts` (clé `about`)
- Liste des compétences : `src/sections/Skills.tsx`

## 7. Modifier les traductions

Tous les textes visibles (hors noms de projets) sont centralisés dans
`src/i18n/translations.ts`, avec un objet `fr` et un objet `en`. Modifie
directement les valeurs pour changer un texte dans les deux langues.

## 8. Déployer sur GitHub Pages

1. Dans `vite.config.ts`, vérifie que `base` correspond au nom de ton repo
   GitHub (`/nom-du-repo/`). Le fichier `public/404.html` doit utiliser la
   même valeur dans la variable `base`.
2. Installe la dépendance de déploiement (déjà présente dans `package.json`) :
   ```bash
   npm install
   ```
3. Déploie :
   ```bash
   npm run deploy
   ```
   Cette commande build le projet puis publie le contenu de `dist/` sur la
   branche `gh-pages` du repo (via le paquet `gh-pages`).
4. Dans les réglages GitHub du repo → **Pages**, choisis la branche
   `gh-pages` comme source, si ce n'est pas déjà fait automatiquement.
5. Le site sera visible sur `https://ghizslh.github.io/nom-du-repo/`.

Le fichier `public/404.html` gère les liens profonds (ex :
`/project/DiaMini`) : GitHub Pages n'a pas de routing serveur, donc toute
URL inconnue est redirigée vers `index.html` qui restaure ensuite la bonne
page côté client.

## Palette et typographie

| Rôle | Valeur |
|---|---|
| Fond | `#F5F1EB` |
| Texte | `#171717` |
| Texte secondaire | `#77736D` |
| Accent | `#7A2635` |

Titres : **Fraunces** (serif éditoriale) · Texte courant : **Inter** (sans-serif).

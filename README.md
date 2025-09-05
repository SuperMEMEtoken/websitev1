# Kairo The Starborn - Website

Un site web de production pour Kairo The Starborn, un univers Web3 cinématique et narratif avec des NFTs évolutifs, une progression on-chain et une économie communautaire ancrée dans l'écosystème Solana.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec un thème sombre futuriste
- **Animations fluides** avec Framer Motion
- **Composants UI réutilisables** basés sur shadcn/ui
- **Effets visuels avancés** avec champ d'étoiles animé et gradients néon
- **Sections complètes** : Hero, Collections, Token, Roadmap, Community
- **Navigation fluide** avec ancres et scroll smooth
- **Optimisé pour la production** avec Next.js 14 et TypeScript

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes
- **shadcn/ui** - Composants UI accessibles

## 📦 Installation

1. Clonez le repository :
```bash
git clone <repository-url>
cd kairo-the-starborn
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
├── app/
│   ├── globals.css          # Styles globaux et variables CSS
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   └── ui/                  # Composants UI réutilisables
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts             # Utilitaires (cn function)
└── public/                  # Assets statiques
```

## 🎨 Sections du site

### Hero Section
- Titre principal avec gradient
- Description de l'univers Kairo
- Boutons d'action (Explore Collections, Learn about $KAIRO)
- Visuel placeholder pour le héros Kairo

### Collections
- **Starboxes** : Boîtes de loot avec niveaux évolutifs (Lv.1-5)
- **SpaceParts** : 4 types de pièces mécaniques, améliorables jusqu'au Lv.10
- **Starships** : NFT principal, stakeable avec 4 SpaceParts Lv.10
- **Planet NFTs** : Parts dans des pools de memecoins ($BONK, $PEPE, $WEN)

### Token ($KAIRO)
- Description de l'utilité du token
- Distribution initiale et mécanismes de sink
- Formulaire d'inscription à la whitelist email

### Roadmap
- **Phase 1** : Foundation (Starbox NFTs, Lore site, Quests)
- **Phase 2** : Core Mechanics (SpaceParts, Staking, Cosmétiques)
- **Phase 3** : Starships & Planets (Staking, Pools memecoin)
- **Phase 4** : Token & Expansion (Token genesis, Partenariats, Mobile game)

### Community
- Liens vers Discord et Twitter
- Section Builder-friendly avec documentation et GitHub

## 🎭 Effets visuels

- **Starfield animé** : 180 étoiles avec positions et opacités aléatoires
- **Gradients néon** : Séparateurs avec effets cyan/purple
- **Animations d'apparition** : Fade up avec Framer Motion
- **Effets de hover** : Glow et transitions sur les cartes
- **Backdrop blur** : Effets de flou sur la navigation et les overlays

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
```

Puis déployez sur Vercel en connectant votre repository GitHub.

### Autres plateformes
```bash
npm run build
npm start
```

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Navigation mobile avec menu hamburger
- Grilles adaptatives pour les cartes
- Typographie responsive
- Espacement adaptatif

## 🎯 Optimisations

- **Performance** : Lazy loading des animations
- **SEO** : Métadonnées optimisées
- **Accessibilité** : Composants accessibles avec ARIA
- **Bundle size** : Imports optimisés et tree-shaking

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🔗 Liens utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Kairo The Starborn** - L'univers Web3 cinématique qui vous attend parmi les étoiles ✨

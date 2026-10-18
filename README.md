# Sociaf Services

Site vitrine bilingue français/arabe réalisé avec React et Vite.

![Capture d’écran du site Sociaf Services](./docs/screenshots/homepage.png)

## Fonctionnalités

- Interface en français et en arabe avec prise en charge du RTL
- Thèmes clair et sombre
- Présentation des services, localisation et formulaire de contact
- Formulaire de contact intégré à EmailJS

## Prérequis

- Node.js et npm
- Firebase CLI pour le déploiement

## Installation et développement

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

Renseignez les valeurs EmailJS dans `.env` pour activer le formulaire de contact. Ne publiez jamais ce fichier.

## Build et aperçu de production

```bash
npm run build
npm run preview
```

Vite génère le site dans `dist/`.

## Déploiement Firebase Hosting

Le projet Firebase est configuré dans `.firebaserc`. Connectez-vous avec un compte autorisé, puis lancez :

```bash
firebase login
firebase deploy --only hosting --project sociaf-services
```

## Configuration EmailJS

Copiez `.env.example` vers `.env` et renseignez les identifiants EmailJS :

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Les variables préfixées par `VITE_` sont intégrées au code client lors du build ; utilisez uniquement des valeurs prévues pour être publiques et configurez les protections disponibles dans EmailJS.

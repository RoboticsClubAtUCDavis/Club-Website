# UC Davis Robotics Club Website

Built with [Astro](https://astro.build) and deployed via GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/join` | `src/pages/join.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/workshops` | `src/pages/workshops.astro` |
| `/gallery` | `src/pages/gallery.astro` |
| `/team` | `src/pages/team.astro` |
| `/contact` | `src/pages/contact.astro` |

## Adding real images

Place your images in `/public/images/` and reference them as `/images/photo.jpg` in the `.astro` files.
Replace every `img-placeholder` div with a real `<img src="..." alt="..." />` tag.

## Deploying

1. Push to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The `.github/workflows/deploy.yml` handles the rest automatically on every push to `main`

## Customizing

- Global colors & fonts: `src/styles/global.css`
- Navigation links: `src/components/Nav.astro`
- Footer links/socials: `src/components/Footer.astro`
- Contact form: replace the placeholder in `src/pages/contact.astro` with a Formspree or Google Form embed
- Join form: same in `src/pages/join.astro`

# Portfolio: Rizki Dwi Sya'bana Nugraha

Astro + Tailwind CSS v4, deployed to GitHub Pages at https://rizkidwi07.github.io

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/

Requires Node 22.23.4 or newer.

## Where things live
- Projects: `src/content/projects/*.md` (frontmatter drives cards, body is the case study)
- Screenshots and charts: `src/assets/projects/<project-id>/`, captions in `src/data/gallery.ts`
- Architecture diagrams: `src/data/diagrams.ts` (rendered by `src/components/FlowDiagram.astro`)
- Experience, education, organizations: `src/data/experience.ts`
- Credentials: `src/pages/publications.astro`
- Profile photo: `src/assets/profile/rizki.jpg`; CV: `public/cv/Rizki-Dwi-Syabana-Nugraha-CV.pdf`
- Link preview image: `public/og-image.png` (1200 x 630)

## Deploy
1. Create a public repository named exactly `rizkidwi07.github.io`.
2. Push this folder to its `main` branch.
3. In the repository, open Settings > Pages and set Source to **GitHub Actions**.
4. Open the Actions tab and wait for "Deploy to GitHub Pages" to finish. Every later push to `main` redeploys automatically.

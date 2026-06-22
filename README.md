# Next.js + Tailwind Portfolio

This repository contains a minimal Next.js (app router) portfolio template using Tailwind CSS. It's set up for static export and is optimized for deployment to Vercel.

Features included:
- Next.js app router
- Tailwind CSS
- Responsive hero, projects list, and contact form (Formspree placeholder)
- Dark mode toggle (client-side)

Getting started (locally):

1. Clone the repo

   git clone https://github.com/RuiCalvin-Wu/portfolio.git
   cd portfolio

2. Install dependencies

   npm install

3. Run development server

   npm run dev

Build and static export:

  npm run build

Deploying to Vercel (recommended):

1. Push the repo to GitHub (already done).
2. Visit https://vercel.com/new and import the repository.
3. Use the default build settings — Vercel auto-detects Next.js.
4. For a static export, set the output to "standalone" or use the default Next.js settings — Vercel will handle incremental/static rendering.

Using a custom domain (Namecheap):

1. Buy or use your Namecheap domain.
2. In Vercel, go to your project > Settings > Domains and add your domain.
3. Follow Vercel's DNS instructions in Namecheap — typically adding an A/ALIAS or CNAME record.

Next steps / Customization suggestions:
- Replace placeholder images with real screenshots or GIFs of your projects (public/ or remote URLs).
- Replace Formspree ID with your own endpoint.
- Add a resume.pdf to the public/ folder.
- Consider adding shadcn/ui for prebuilt component primitives if you want a more polished UI.

License: MIT

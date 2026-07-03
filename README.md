# Schotts Legacy Engraving Website

Static website for Schotts Legacy Engraving, a custom sandblasted stone engraving business serving Northeast Florida and South Georgia. Deployed through Cloudflare Pages.

## Files

- `index.html` - homepage
- `services.html` - services page
- `gallery.html` - gallery page
- `about.html` - about page
- `contact.html` - contact and quote request page
- `css/styles.css` - site styling
- `js/main.js` - mobile navigation
- `assets/` - images, logos, and icons
- `package.json` - optional Cloudflare Pages build command support
- `scripts/build.mjs` - copies static files into `dist`
- `scripts/serve-local.mjs` - local static preview server

## Purpose

This repository hosts a small static business website for Schotts Legacy Engraving. It provides service information, gallery placeholders, company details, and contact options for quotes and project questions.

## Cloudflare Pages

- Framework preset: None
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Cloudflare Pages deploys this website automatically whenever changes are pushed to the `main` branch.

## Local Preview

```text
npm run build
npm run serve
```

The local preview serves the generated `dist` folder at `http://127.0.0.1:8080/`.

## Image Credits

Temporary web imagery was sourced from Unsplash and can be replaced later with company-owned project photos:

- Raihan Kibria: https://unsplash.com/photos/inl2Ty-VZlw
- Phil Hearing: https://unsplash.com/photos/eII8pjg3684
- Jason Leung: https://unsplash.com/photos/eMFGy9iPySs
- Haley Owens: https://unsplash.com/photos/lxtEP-f8aLA
- Carlos Felipe Ramirez Mesa: https://unsplash.com/photos/jClAHFs_fOY
- Phill D: https://unsplash.com/photos/QsZ3vAI0TZY
- Pramod Kumar Sharma: https://unsplash.com/photos/rrjrUqg6-As
- Roger Starnes Sr: https://unsplash.com/photos/YF-k_rjM4IM
- Julia Taubitz: https://unsplash.com/photos/Lt07dSSqEqU
- Donna Elliot: https://unsplash.com/photos/1QVKCZ27Z3Y

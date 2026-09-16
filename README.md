# Natis — Startup Studio Website

A static, no-build-step website for Natis (New Asset Theory Innovation Studio).

## Structure

```
index.html              Landing page
about.html               About the founder / studio
mission.html             Mission statement
contact.html              Contact form + socials
projects/
  index.html              Portfolio grid
  project-1.html           Individual project page
  project-2.html
  project-3.html
css/style.css             All site styles
js/components.js          Shared header/footer + site config (nav, socials, email)
js/main.js                 Contact form submit handling
assets/favicon.svg
```

## Editing content

- **Nav links, social URLs, studio email**: edit the `SITE_CONFIG` object at the
  top of `js/components.js`. This is the single source of truth — the header
  and footer on every page pull from it automatically.
- **Contact form**: sign up at [formspree.io](https://formspree.io) (free), create
  a form, and replace `YOUR_FORM_ID` in the `<form action="...">` attribute in
  `contact.html` with your real form ID.
- **Projects**: duplicate `projects/project-1.html` for each new project, update
  its content, and add a matching card to `projects/index.html` and the
  portfolio section of `index.html`.
- **Colors/fonts**: CSS variables are defined at the top of `css/style.css`
  under `:root`.

## Running locally

No build step required. From the project root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening the HTML files directly via `file://` also mostly works, but the
shared header/footer script uses root-relative paths like `/css/style.css`,
so a local server is recommended.)

## Deploying

This is plain static HTML/CSS/JS, so it deploys anywhere:

- **GitHub Pages**: enable Pages on this repo (Settings → Pages → Deploy from
  branch), pointing at the branch/folder containing these files.
- **Netlify / Vercel**: connect the repo, no build command needed, publish
  directory is the repo root.

## TODO before launch

- [ ] Replace `YOUR_FORM_ID` in `contact.html` with a real Formspree ID
- [ ] Replace social URLs and studio email in `js/components.js`
- [ ] Replace the three `[Project One/Two/Three]` placeholders with real
      portfolio companies
- [ ] Replace the `[City, Country]` and bio placeholder text in `about.html`

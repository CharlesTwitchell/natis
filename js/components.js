/**
 * Natis — shared site config, header, and footer.
 * Edit SITE_CONFIG below to update nav links, social URLs, and contact info
 * everywhere on the site from one place.
 */

const SITE_CONFIG = {
  name: "Natis",
  tagline: "New Asset Theory Innovation Studio",
  email: "hello@natis.studio", // TODO: replace with your real studio inbox
  nav: [
    { label: "Home", href: "/index.html" },
    { label: "About", href: "/about.html" },
    { label: "Mission", href: "/mission.html" },
    { label: "Projects", href: "/projects/index.html" },
    { label: "Contact", href: "/contact.html" },
  ],
  // TODO: swap in your real profile URLs. Leave a value as "" to hide that icon.
  socials: {
    substack: "https://natis.substack.com",
    x: "https://x.com/natisstudio",
    linkedin: "https://www.linkedin.com/company/natis",
    github: "https://github.com/charlestwitchell",
    instagram: "",
    youtube: "",
  },
};

const SOCIAL_ICONS = {
  substack:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17v3.22c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.41.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.22-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.41a3.74 3.74 0 0 1-1.38-.89 3.74 3.74 0 0 1-.89-1.38c-.17-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.22.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6z"/></svg>',
};

function socialLinksHTML() {
  return Object.entries(SITE_CONFIG.socials)
    .filter(([, url]) => url)
    .map(
      ([key, url]) => `
        <a class="social-icon" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${key}">
          ${SOCIAL_ICONS[key] || ""}
        </a>`
    )
    .join("");
}

function currentPath() {
  return window.location.pathname.replace(/\/index\.html$/, "/");
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = currentPath();
    const links = SITE_CONFIG.nav
      .map((item) => {
        const itemPath = item.href.replace(/\/index\.html$/, "/");
        const isCurrent =
          path === itemPath || (itemPath === "/" && path === "/index.html");
        return `<li><a href="${item.href}" ${isCurrent ? 'aria-current="page"' : ""}>${item.label}</a></li>`;
      })
      .join("");

    this.innerHTML = `
      <nav class="nav">
        <a class="nav-brand" href="/index.html">
          <span class="mark">N</span>
          <span>${SITE_CONFIG.name}</span>
        </a>
        <ul class="nav-links" id="nav-links">${links}</ul>
        <div class="nav-actions">
          <a class="btn btn-primary" href="/contact.html">Get in touch</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </nav>
    `;

    const toggle = this.querySelector("#nav-toggle");
    const navLinks = this.querySelector("#nav-links");
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    const linkCols = [
      {
        heading: "Studio",
        links: [
          { label: "About", href: "/about.html" },
          { label: "Mission", href: "/mission.html" },
          { label: "Projects", href: "/projects/index.html" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "Contact", href: "/contact.html" },
          { label: "Substack", href: SITE_CONFIG.socials.substack || "#" },
          { label: "Email us", href: `mailto:${SITE_CONFIG.email}` },
        ],
      },
    ];

    this.innerHTML = `
      <div class="container footer-inner">
        <div class="footer-brand">
          <a class="nav-brand" href="/index.html" style="margin-bottom:14px;">
            <span class="mark">N</span>
            <span>${SITE_CONFIG.name}</span>
          </a>
          <p>${SITE_CONFIG.tagline}. We design, build, and back startups exploring new theories of value, ownership, and asset creation.</p>
          <div class="social-row">${socialLinksHTML()}</div>
        </div>
        ${linkCols
          .map(
            (col) => `
          <div>
            <div class="footer-heading">${col.heading}</div>
            <ul class="footer-links">
              ${col.links
                .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
                .join("")}
            </ul>
          </div>`
          )
          .join("")}
      </div>
      <div class="container footer-bottom">
        <span>© ${year} ${SITE_CONFIG.name}. All rights reserved.</span>
        <span>Built as a startup studio for new asset theory.</span>
      </div>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

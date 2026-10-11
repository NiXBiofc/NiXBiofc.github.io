# NiXBi multi-project site (GitHub Pages)

Static, responsive multi-project website for NiXBiofc. Default language is English; visitors can switch to Russian with the `RU` / `EN` control in the navigation. The choice is remembered across pages in the browser. The background glow elements are part of the scrolling document and use a subtle scroll-linked parallax effect. No build tools or paid hosting are required.

## Files

- `index.html` — team homepage and project overview
- `launcher.html` — NIXBI Launcher project page
- `giftspokupbot.html` — Gifts Pokup Bot project page
- `privacy.html` — privacy policy
- `terms.html` — terms of use
- `styles.css` — responsive dark-green styling and scrollable background glows
- `site.js` — language toggle and background motion
- `.nojekyll` — publish static files as-is

## Update GitHub Pages

Upload the **contents** of this folder to the root of `NiXBiofc/NiXBiofc.github.io`, replacing old HTML/CSS files and adding `site.js`. Do not upload the ZIP itself. Commit changes and verify that Settings → Pages publishes from branch `main`, folder `/ (root)`.

Current free URLs:

- `https://nixbiofc.github.io/` — team homepage
- `https://nixbiofc.github.io/launcher.html` — NIXBI Launcher
- `https://nixbiofc.github.io/giftspokupbot.html` — Gifts Pokup Bot

These are pages on one GitHub Pages site, not true subdomains. Real project subdomains require a base domain (or a domain delegated to you) plus DNS configuration.

## Before submitting Google OAuth verification

Review `privacy.html` against the exact released launcher, OAuth scopes, and token handling. In particular, `gmail.readonly` grants broader access than simply displaying labels. The website's existence does not guarantee Google will accept a GitHub Pages hostname for OAuth branding or verification. Never upload OAuth client JSON files containing secrets, access/refresh tokens, or user-specific launcher configuration to this public repository.

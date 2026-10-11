# NiXBi Project Site

A static, responsive portfolio for the independent NiXBi project team. English is the default language; the RU/EN button switches the whole site between English and Russian. The site uses a visible scroll-linked parallax background and reduced-motion fallbacks. No build tools are required.

## Pages
- `index.html` — team introduction and expandable Explore Projects directory
- `launcher.html` — NIXBI Launcher overview and add-on directory
- `radial-menu.html` — Radial Menu add-on page
- `gmail-integration.html` — Gmail Integration add-on page
- `youtube-downloader.html` — YouTube Downloader add-on page
- `giftspokupbot.html` — Gifts Pokup Bot overview
- `privacy.html` — privacy policy
- `terms.html` — terms of use
- `styles.css` — responsive design and product illustrations
- `site.js` — language toggle, expandable project directory, scroll progress, and parallax

## Publish to GitHub Pages
Upload the **contents** of this folder (not the ZIP) to the root of `NiXBiofc/NiXBiofc.github.io`, commit the changes, and ensure Settings → Pages publishes from `main` and `/(root)`.

The current GitHub Pages URL is `https://nixbiofc.github.io/`. Paths like `launcher.html` are pages on the same site, not real subdomains. Real project subdomains require a domain or a delegated subdomain and DNS configuration.

## Important Google OAuth note
Review `privacy.html` against the exact released application and the requested Google OAuth scopes before submission. The current launcher has requested `gmail.readonly`, which is a restricted scope. This site template is not itself proof of Google verification. Never commit OAuth client JSON, client secrets, access or refresh tokens, or user-specific configuration.

## Product status accuracy
Download buttons are intentionally marked as coming soon. Do not enable them until a distribution package and release process exist. The Gifts Pokup Bot page describes it as a beta workflow with manager assistance and cautions that the project's claims are not independently verified.

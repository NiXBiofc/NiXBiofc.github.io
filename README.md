# NiXBi Project Site

A static, responsive portfolio for the independent NiXBi project team. English is the default language; the RU/EN button switches the whole site between English and Russian. No build tools are required.

## Pages
- `index.html` — team introduction and expandable project directory
- `launcher.html` — NIXBI Launcher overview, screenshot carousel, and add-ons
- `radial-menu.html`, `gmail-integration.html`, `youtube-downloader.html` — launcher add-ons
- `giftspokupbot.html` — Gifts Pokup Bot overview
- `privacy.html`, `terms.html` — policy and terms
- `styles.css`, `site.js` — site design and interactions

## Add any number of launcher screenshots
Put image files in `assets/launcher/` and list them in `assets/launcher/screenshots.json`. There is no fixed limit and filenames can be anything, including `settings-final.webp` or `radial-menu-2026.png`. Each item needs a `src`; `alt` and `caption` are optional. If `caption` is omitted, no caption is shown. Missing or invalid files are ignored, with no placeholder cards displayed.

Example entry: `{ "src": "assets/launcher/settings-final.webp", "alt": "Launcher settings screen" }`. Add as many entries to the `screenshots` array as you want.

## Publish to GitHub Pages
Upload the contents of this folder to the root of `NiXBiofc/NiXBiofc.github.io`, commit the changes, and ensure Settings → Pages publishes from `main` and `/(root)`.

Review `privacy.html` against the actual released app and its OAuth scopes before submitting Google OAuth verification. Never commit client secrets, user tokens, or private account configuration.

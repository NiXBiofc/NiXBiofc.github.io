# NIXBI Launcher public site (GitHub Pages)

This is a ready-to-publish static site starter for NIXBI Launcher. It includes a homepage, privacy policy, terms, and shared styling. No build tools or paid hosting are required.

## Publish free with GitHub Pages

1. In GitHub, create a **public** repository named exactly `NiXBiofc.github.io` (if that user-site repository already exists, use it instead).
2. Upload the contents of this folder into the repository root. Upload the files themselves, not the containing `nixbi_oauth_site` folder.
3. Open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for the site to deploy. The expected URLs are:
   - Homepage: `https://nixbiofc.github.io/`
   - Privacy: `https://nixbiofc.github.io/privacy.html`
   - Terms: `https://nixbiofc.github.io/terms.html`
5. Open all three URLs in a private/incognito browser window and confirm they are publicly accessible over HTTPS.

## Verify the site in Google Search Console

1. Sign in to Search Console using the same Google account that owns or edits the Google Cloud project used by NIXBI OAuth.
2. Add a **URL-prefix property** for `https://nixbiofc.github.io/`.
3. Choose the HTML file or HTML tag verification option presented by Search Console. Follow the exact instructions and keep the provided verification file/tag unchanged. If using an HTML file, upload that downloaded file to this repository's root. If using the meta tag, add the exact provided tag inside the `<head>` of `index.html` and commit it.
4. Press Verify in Search Console. Do not guess a verification token. Keep the verification file/tag in the published site after success.

Google's current rules require a public homepage on a verified domain, a privacy policy on the same site/domain, and a policy that accurately discloses how Google user data is accessed, used, stored, and shared. A GitHub Pages subdomain can be worth trying before paying for a custom domain, but only Google can confirm whether this specific property is accepted for the OAuth review.

## Google Cloud branding values (after publishing)

Use the exact deployed URLs:

- App homepage: `https://nixbiofc.github.io/`
- Privacy policy: `https://nixbiofc.github.io/privacy.html`
- Terms of service: `https://nixbiofc.github.io/terms.html`
- Authorized domain, if accepted by Google Cloud: `nixbiofc.github.io`

Also add a support email you actively monitor in Google Auth Platform branding/contact settings. Do not use a made-up address.

## IMPORTANT — review the policy before submitting

The privacy policy currently describes the intended app flow based on the current project discussion: OAuth for Gmail, label/folder metadata in the menu, tokens stored locally with Windows DPAPI, and no developer-operated backend receiving Gmail data. **Verify that every statement matches the code and released build before asking Google to verify the app.** In particular, the current `gmail.readonly` scope is broader than label metadata alone and may trigger a restricted-scope review. The page explicitly notes this; that reviewer-facing note should be removed only after the policy and scope justification have been finalized and rechecked.

Do not add Client Secrets, OAuth client JSON files, refresh tokens, access tokens, verification tokens belonging to someone else's account, or any private launcher configuration to this repository.

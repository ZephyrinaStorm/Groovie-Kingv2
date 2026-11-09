# FlameNotes Website

A public-facing, static website for FlameNotes (formerly Groovie King). Includes Home, Sources, Features, Status, Privacy, Terms, and Discord pages.

## Manual GitHub installation

1. In your GitHub repository, open `website/`.
2. Replace `index.html`, `styles.css`, and `script.js` with the files in this package.
3. Upload `assets/logo.png` from this package to `website/assets/logo.png`, replacing the previous logo.
4. Commit all four changed files. Keep your bot code and Render secrets unchanged.
5. Deploy `website/` as a Render Static Site with **Publish Directory** `website`. For a plain static site, no build command is required.
6. Open your Render-provided `.onrender.com` URL to test Home, Sources, Features, Status, Privacy, Terms, and Discord.
7. To connect a custom domain, add it under Render Static Site > Settings > Custom Domains and follow the exact DNS instructions shown there. DNS records vary by provider and should not be guessed.

## Before public launch

- Replace draft Privacy and Terms text with policies accurately reflecting your bot's practices.
- Add a verified FlameNotes Discord invite to the Discord page.
- The Status page intentionally does not claim live uptime; connect a real API before displaying status.
- Verify source availability against your installed Lavalink plugins. LavaSrc links often resolve metadata, not direct audio.
- This website does not rename the Discord application or bot internally. Update the Discord Developer Portal bot name/avatar separately, if desired.

## Files

- `index.html` — page shell, navigation, metadata
- `script.js` — content and navigation
- `styles.css` — responsive visual design
- `assets/logo.png` — logo supplied by the website owner

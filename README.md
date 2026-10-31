# RESET — Dopamine Level Reset & Learn

A local-first, cyberpunk-inspired self-improvement RPG web app.

## Run locally
Because this project uses JavaScript ES modules, serve it through a local web server:
- VS Code: install/use Live Server and open `index.html`.
- Python: `python -m http.server 8000`, then visit `http://localhost:8000`.

Opening `index.html` directly with `file://` will not load ES modules correctly.

## Deploy to GitHub Pages
1. Create a GitHub repository and upload the project files.
2. Open Settings → Pages.
3. Select Deploy from a branch, choose `main` and `/ (root)`.
4. Save and wait for deployment.

## Data & privacy
Records are stored in LocalStorage in the current browser origin. They do not sync between devices. Use Settings → Export JSON Backup regularly. Browser storage can be cleared by browser settings.

## Notes
- The Attention Recovery Index is a transparent behavioral indicator based on user-entered records, not a dopamine or medical measurement.
- Chart.js and Lucide are loaded from CDNs; their assets require internet access unless separately cached by the browser.
- PWA service worker caching requires HTTPS or localhost.
- This is a functional starter implementation. Review and extend educational references, accessibility, browser testing, and production safeguards before broad release.

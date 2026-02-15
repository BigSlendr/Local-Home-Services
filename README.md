# North Peak Home Services (Static Website Demo)

This repository is a **static HTML/CSS/JS demo site** for **North Peak Home Services**.
It is designed to work well as a lightweight GitHub Pages portfolio/marketing site.

## Stack

- HTML (multi-page)
- CSS (custom responsive styles)
- Vanilla JavaScript (UI interactions)

No frameworks, no npm dependencies, and no build tooling are required.

## Pages

- `/index.html`
- `/services/index.html`
- `/projects/index.html`
- `/about/index.html`
- `/contact/index.html`

## Local Preview

You can open `index.html` directly in your browser, or serve the folder with any static server.

Example with Python:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Enable GitHub Pages

1. Push this repository to GitHub.
2. Go to **Repository Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
4. Save and wait for deployment.
5. Your static site will be live at the Pages URL GitHub provides.

## Brand Details Used

- **Business:** North Peak Home Services
- **Phone:** (718) 555-0199
- **Service Area:** Staten Island + South Brooklyn
- **Primary CTA:** Request a Quote (`/contact/`)

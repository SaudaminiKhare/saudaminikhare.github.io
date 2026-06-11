# Saudamini Khare — Portfolio

Personal portfolio site for Saudamini Khare, Generative AI Engineer.
Static HTML/CSS/JS — no build step required.

## Hosting on GitHub Pages with a custom domain

1. **Create a repo** (any name works; for a user site use `<username>.github.io`).
2. **Upload these files** to the repo root: `index.html`, `CNAME`, `.nojekyll`, `README.md`.
3. **Enable Pages:** Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)` → Save.
4. **Custom domain:** The included `CNAME` file sets the domain to `saudaminikhare.com`.
   - Edit `CNAME` to your actual apex domain if different.
   - At your DNS provider, add four `A` records for the apex domain pointing to GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - (Optional) Add a `CNAME` DNS record for `www` → `<username>.github.io`.
5. In Settings → Pages, check **Enforce HTTPS** once the certificate is issued (can take a few minutes to an hour).

## Files
- `index.html` — the entire site (styles and scripts inline)
- `CNAME` — custom domain for GitHub Pages
- `.nojekyll` — tells Pages to skip Jekyll processing and serve files as-is

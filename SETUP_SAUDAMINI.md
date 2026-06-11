# Saudamini Khare — Portfolio (developerFolio)

This is the [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio)
React template, pre-filled with your resume content. Everything in
`src/portfolio.js` is already your data — you mostly just run it and deploy.

## What's already done for you
- `src/portfolio.js` — populated with your summary, skills, education (ASU, IIIT-B, PES),
  work experience (Cognizant, Philips x2, IBM), three projects, and your Springer publication.
- Sections you have no data for (Blogs, Talks, Podcast, Twitter, GitHub open-source) are
  set to `display: false` so they don't render. Flip them to `true` later if you add content.
- `public/CNAME` — set to `saudaminikhare.com`. **Change this** to your real domain.
- `package.json` `homepage` — set to `https://saudaminikhare.com`. Change to match your domain.
- `public/index.html` — title and SEO metadata updated to your name.
- Placeholder logos/images are in `src/assets/images/` (e.g. `asuLogo.png`, `cognizantLogo.png`,
  `thoracicProject.webp`). **Replace these** with real logos, keeping the same filenames.

## Run locally
You need Node.js 14+ and npm.

```
npm install
cp env.example .env        # Windows: copy env.example .env
npm start                  # opens http://localhost:3000
```

If `npm start` or `npm run build` errors with an OpenSSL message, prefix the command:
- macOS/Linux: `NODE_OPTIONS=--openssl-legacy-provider npm start`
- Windows (PowerShell): `$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start`

## Add your resume download button
The "Resume" button is hidden until you add a link. In `src/portfolio.js`, set:
```
resumeLink: "https://drive.google.com/file/d/XXXX/view"
```
(Upload your PDF to Google Drive, set sharing to "anyone with the link", paste the view URL.)

## (Optional) Auto-populate GitHub profile + pinned repos
Currently disabled. To enable:
1. Create a classic GitHub token (no scopes): https://github.com/settings/tokens
2. In `.env`, set `REACT_APP_GITHUB_TOKEN`, keep `GITHUB_USERNAME="SaudaminiKhare"`, set `USE_GITHUB_DATA="true"`.
3. In `src/portfolio.js`, set `openSource.display: true` and `showGithubProfile: "true"`.

## Deploy to GitHub Pages with your custom domain

The simplest path uses the `gh-pages` package (already a dependency):

```
npm run deploy
```

This builds the site and pushes it to a `gh-pages` branch. Then:
1. Repo → **Settings → Pages** → Source: branch `gh-pages` / root → Save.
2. Under **Custom domain**, enter your apex domain (e.g. `saudaminikhare.com`). The
   included `public/CNAME` already sets this on each deploy.
3. At your DNS provider, add four A records for the apex domain:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   (Optional) add a CNAME DNS record for `www` → `<your-username>.github.io`.
4. Once the certificate is issued, tick **Enforce HTTPS** in Settings → Pages.

> Note: `.env` is gitignored (it can hold secrets), so it won't be in your repo —
> that's intentional. The build reads it locally at deploy time.

## Files you'll most likely touch
- `src/portfolio.js` — all your content
- `src/_globalColor.scss` — colors / theme
- `src/assets/images/` — swap placeholder logos (keep filenames)
- `public/CNAME` and `package.json` (`homepage`) — your domain

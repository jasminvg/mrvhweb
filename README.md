# Velez CPA Services — Website

Static site (HTML/CSS/JS, no build step) — 4 pages: Home, About, Services, Contact.

## What's here
- `index.html`, `about.html`, `services.html`, `contact.html`
- `styles.css`, `script.js`
- `CNAME` — tells GitHub Pages to serve this site at `velezcpaservices.com`

## Placeholders to replace before launch
- **Phone number** — currently `(555) 555-5555 [placeholder]` in the footer, About page, and Contact page (search all files for `555-5555`)
- **About Michael** bio + credentials on `about.html` and the homepage teaser (marked `[Placeholder]`)
- **Headshot photo** — currently a green monogram circle ("MV") on `about.html` and the homepage. Replace with an actual `<img>` tag once you have a photo.
- **Formspree form ID** — see step 3 below

---

## 1. Put this on GitHub

1. Create a new repository on GitHub (e.g. `velez-cpa-site`). Keep it **public** — GitHub Pages custom domains require a public repo on the free plan.
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/velez-cpa-site.git
   git push -u origin main
   ```

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save. GitHub will give you a `https://YOUR_USERNAME.github.io/velez-cpa-site` URL — confirm the site loads there first.

## 3. Connect your domain (velezcpaservices.com)

Since your domain and email both already live elsewhere (Google Workspace), you only need to change the **web** records — leave your existing **MX** records alone so email keeps working.

At your domain's DNS provider, add:

| Type  | Host / Name | Value |
|-------|-------------|-------|
| A     | @           | 185.199.108.153 |
| A     | @           | 185.199.109.153 |
| A     | @           | 185.199.110.153 |
| A     | @           | 185.199.111.153 |
| CNAME | www         | YOUR_USERNAME.github.io |

Then in **Settings → Pages → Custom domain**, enter `velezcpaservices.com` and save (this is also what the `CNAME` file in this repo does automatically once GitHub reads it). Check **Enforce HTTPS** once the certificate becomes available (can take up to 24 hours).

## 4. Set up the Formspree contact form

1. Go to [formspree.io](https://formspree.io) and sign up with `michael@velezcpaservices.com` (free plan: 50 submissions/month).
2. Create a new form, and copy the endpoint it gives you (looks like `https://formspree.io/f/abcd1234`).
3. In `contact.html`, find this line:
   ```html
   <form id="inquiry-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Commit and push the change. Submissions will land in the inbox tied to your Formspree account.

If you ever outgrow the free 50/month cap, Formspree's paid tiers start around $10–15/month — no code changes needed, just usage limits lift.

## Notes
- Fonts: **Source Serif 4** (bold/black weights, standing in for Minion Pro) for headings, **Inter** for body text — both loaded free from Google Fonts.
- Colors: forest green `#043f27`, leaf green `#91cb41`, black `#0a100c`, white, plus two light neutral tints for section backgrounds.
- The site is fully responsive and includes a mobile nav menu, keyboard focus states, and respects "reduce motion" settings.

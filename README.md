# IRONSTEEL — Iron & Steel Utilities Nig. Ltd.

A premium, fully responsive construction/structural-steel company website,
built as a React app with Create React App (CRA).

## Getting Started

```bash
npm install
npm start
```

Opens the site at `http://localhost:3000`.

To build for production / deployment:

```bash
npm run build
```

This outputs static files into the `build/` folder, which you can deploy to
any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## Project Structure

```
public/
  assets/
    logo/             ← company logo (logo.png, logo-large.png)
    images/           ← all photos used across the site (hero, about,
                         equipment, gallery, services)
src/
  components/         ← shared UI building blocks (Header, Footer,
                         HeroSlider, GalleryGrid, ServicesGrid, etc.)
  pages/              ← one file per route (Home, About, Gallery,
                         Equipment, Services, Contact, NotFound)
  data/siteData.js    ← ALL editable content lives here: contact info,
                         WhatsApp number, services list, equipment list,
                         gallery image list, hero slides, testimonials
  styles/utilities.css← shared design tokens / utility classes
  hooks/useReveal.js   ← scroll-reveal animation hook
```

## How To Add Gallery Images (as many as you want)

1. Drop your image files into `public/assets/images/`
   (e.g. `public/assets/images/gallery-9.jpg`).
2. Open `src/data/siteData.js` and add a new entry to the
   `GALLERY_IMAGES` array, for example:

   ```js
   { src: '/assets/images/gallery-9.jpg', alt: 'Describe the photo', category: 'Structural' },
   ```

   - `category` can be any label you like (`Structural`, `Fabrication`,
     `Site Works`, or a brand-new one) — the gallery page filter buttons
     are generated automatically from whatever categories exist.
   - There's no limit on how many images you add.

3. Save the file — the gallery page (and homepage preview) will pick up
   the new image automatically.

The same pattern applies to `EQUIPMENT`, `SERVICES`, `HERO_SLIDES`, and
`TESTIMONIALS` in the same file — edit the arrays, no other code changes
needed.

## How To Update Contact Details

Open `src/data/siteData.js` and edit the `SITE` object at the top:

- `phoneRaw` / `phoneDisplay` — phone number (raw for `tel:` links, display
  for what's shown on screen)
- `email` — used for the footer, contact page, and the contact form's
  `mailto:` action
- `WHATSAPP_NUMBER` (top of the file) — international format, digits only,
  no `+` or leading `0`. This powers both the footer WhatsApp icon and the
  floating WhatsApp button.
- `address`, `facebook`, `instagram`, `linkedin`, `mapsEmbed` — update as
  needed. `mapsEmbed` should be a Google Maps **embed** URL (Google Maps →
  Share → Embed a map → copy the `src` from the iframe code).

## Replacing The Logo

Replace `public/assets/logo/logo.png` (and `logo-large.png` if you want a
higher-resolution version elsewhere) with your own file, keeping the same
filenames — no code changes required.

## Notes On Placeholder Imagery

The hero, about, equipment, and gallery sections ship with abstract,
on-brand placeholder graphics (steel-toned panels with a diagonal beam
motif) so the site looks complete out of the box. Swap any of the files in
`public/assets/images/` with real project photography whenever you're
ready — just keep the same filenames, or update the paths in
`src/data/siteData.js` if you rename them.

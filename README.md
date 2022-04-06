# Next.js i18n Starter for Static Pages

This starter allows you to use the `next export` future from `Next.js` in combination with `i18n` to create a complete static site.

Clients will directly redirected from `/` to `/[lang]` based on the detected language.

Packages included:

- [i18next](https://github.com/i18next/i18next)
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [styled-components](https://github.com/styled-components/styled-components)

## Installation

Clone the repository and run `npm ci` (recommend) or `npm install`.

## Configuration

- Set the supported languages, default language, namespaces and default namespace in `/src/i18n/config.js`.
- Locales are located in `/src/locales/`. Split the `.json` translation file(s) into multiple namespaces to prevent mess.

## Development

Run `npm run dev` to start the development server on [http://localhost:3000](http://localhost:3000).  
Visit [http://localhost:3000](http://localhost:3000) to view this starter.

## Build and Export Static Pages

```bash
npm run export
```

> **Tipp:**
> You could deploy static sites totally for free on [Cloudflare Pages](https://pages.cloudflare.com/).

## Test/Serve the Site Locally

```bash
npm run serve
```

## Example

- https://nextjs-i18n-static-page-starter.pages.dev (this repo)
- https://www.meatandme.info (based on this starter)

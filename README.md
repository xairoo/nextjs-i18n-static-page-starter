# Next.js i18n Starter for Static Pages

This starter allows you to use the `next export` function from `Next.js` in combination with `i18n`. No need for SSR/SSG.

Includes `i18next`, `i18next-browser-languagedetector`, `tailwindcss` and `twin.macro` with `styled-components`.

Clients will be directly redirected from `/` to `/[lang]` based on the detected language.

> **Tipp:**  
> You could deploy the site totally for free on [Cloudflare Pages](https://pages.cloudflare.com/).

## Installation

Clone the repository and then run `npm ci` (recommend) or `npm install`.

## Configuration

- Set the languages and the default language `/src/i18n/config.js`
- Locales are located in `/src/locales/`

## Build and Export Static Pages

`npm run export`

## Test/Serve the Site Locally

`npm run serve`

## Full Example

https://www.meatandme.info

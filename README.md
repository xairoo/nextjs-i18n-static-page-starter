> 🔥🔥🔥  
> I released a better solution: [next-i18next-static-site](https://www.npmjs.com/package/next-i18next-static-site)  
> This package brings you `react-i18next` and `i18next` to your static sites build with the `next export` future from Next.js.  
>  
> - 🗲 Translation is already rendered (SSG), client will receive the final translated site.  
> - 🔥 Hot reload works also when you update your locale (translation) files.  
> - 🚀 Automatic browser language detection can be realized.  
> - 🍪 Cookie stores the client language.  
>  
> It's highly recommend to use [next-i18next-static-site](https://www.npmjs.com/package/next-i18next-static-site) instead of this starter if you want to use all functions from `react-i18next`.


# Next.js i18n Starter for Static Pages

This starter allows you to use the `next export` future from `Next.js` in combination with `i18n` to create a complete static site.

Clients will directly redirected from `/` to `/[lang]` based on the detected language.

Packages included:

- [i18next](https://github.com/i18next/i18next)
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [styled-components](https://github.com/styled-components/styled-components)
- Custom 404 page with i18n support

## Installation

Clone the repository and run `npm ci` (recommend) or `npm install`.

## Configuration

- Set the supported languages, default language, namespaces and default namespace in `/src/i18n/config.js`
- Locales are located in `/src/locales/`
  - To prevent mess, you can split the `.json` translation file(s) into multiple namespaces

## Development

Run `npm run dev` to start the development server on [http://localhost:3000](http://localhost:3000).  
Visit [http://localhost:3000](http://localhost:3000) to view this starter.

### `Link` Usage

There is a custom wrapper for `<Link>` that will handle the i18n linking, just replace `next/link` with `src/components/link`.

Set `locale` to force a specific language for a given `href`:

```
<Link href="/somesite" locale="en">
  <a>Somesite (EN)</a>
</Link>
```

To change the language of the current site you only need `locale`, `href` will be grabbed automatically:

```
<Link locale="de">
  <a>Current site (DE)</a>
</Link>
```

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

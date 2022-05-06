import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {
  languages,
  defaultLanguage,
  namespaces,
  defaultNamespace,
} from './config'

export { languages, defaultLanguage, namespaces, defaultNamespace }

// Load all locales
const locales = Object.assign(
  {},
  ...Object.keys(languages).map((index) => {
    const language = languages[index]

    return {
      [language]: Object.assign(
        {},
        ...Object.keys(namespaces).map((index) => {
          const namespace = namespaces[index]
          return {
            [namespace]: require('../locales/' +
              language +
              '/' +
              namespace +
              '.json'),
          }
        })
      ),
    }
  })
)

const detection = {
  // Order and from where user language should be detected
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  // Keys or params to lookup language from
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // Cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // Optional set cookie options, reference: MDN Set-Cookie docs, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
  cookieOptions: { path: '/', sameSite: 'strict' },
}

export default i18next.use(LanguageDetector).init({
  detection: detection,
  fallbackLng: defaultLanguage,
  resources: locales,
  ns: namespaces,
  defaultNS: defaultNamespace,
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false, // Not needed for React
  },
  react: {
    wait: true,
  },
})

export function getAllLanguageSlugs() {
  return languages.map((lang) => {
    return { params: { lang: lang } }
  })
}

export function getLanguage(lang) {
  return languages.includes(lang) ? lang : defaultLanguage
}

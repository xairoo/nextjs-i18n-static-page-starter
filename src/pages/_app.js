import '../i18n'
import '../styles/global.css'
import { useEffect, useState } from 'react'
import GlobalStyles from '../components/globalStyles'
import i18next from 'i18next'

import { defaultLanguage, languages } from '../i18n'
import { useRouter } from 'next/router'

const App = function ({ Component, pageProps }) {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState(language)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/' && asPath !== '/404') {
    i18next.changeLanguage(clientLanguage)
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

// import '../i18n/init'
import '../styles/global.css'
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

  i18next.changeLanguage(language)

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

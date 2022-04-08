import '../i18n/init'
import '../styles/global.css'
import GlobalStyles from '../components/globalStyles'
import i18next from 'i18next'

const App = function ({ Component, pageProps }) {
  i18next.changeLanguage(pageProps.language)

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import Link from './link'
import LanguageMenu from './languageMenu'

const Layout = function ({ children }) {
  const router = useRouter()
  const { t } = i18next

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={t('title', { ns: 'meta' })} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />{' '}
        <title>{t('title', { ns: 'meta' })}</title>
      </Head>
      <LanguageMenu />
      <header>
        <h1 tw="my-10 font-bold text-4xl">{t('title', { ns: 'meta' })}</h1>
      </header>
      <main>{children}</main>

      <ul>
        {router.pathname !== '/[lang]' && (
          <li>
            <Link href="/">
              <a>{t('backTo')} /</a>
            </Link>
          </li>
        )}

        {router.pathname !== '/404' && (
          <li>
            <Link href="/404">
              <a>/404</a>
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
export default Layout

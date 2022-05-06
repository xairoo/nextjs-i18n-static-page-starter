import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'twin.macro'
import i18next from 'i18next'
import { defaultLanguage, languages } from '../i18n'
import Layout from '../components/layout'

function Custom404() {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState(null)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Prevent `Text content does not match server-rendered HTML.`
  if (!clientLanguage) {
    return null
  }

  return (
    <Layout>
      <Head>
        <title>
          {`${i18next.t('404', { ns: 'error' })} | ${i18next.t('title', {
            ns: 'meta',
          })}`}
        </title>
      </Head>
      <div tw="text-5xl my-20 text-align[center]">
        404 -{' '}
        {i18next.t('404', {
          ns: 'error',
        })}
      </div>
    </Layout>
  )
}

export default Custom404

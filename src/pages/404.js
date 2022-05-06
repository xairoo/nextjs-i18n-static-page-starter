import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'twin.macro'
import i18next from 'i18next'
import { getAllLanguageSlugs, getLanguage } from '../i18n'
import { defaultLanguage, languages } from '../i18n'
import Layout from '../components/layout'

function Custom404() {
  const router = useRouter()
  const { asPath, query } = router
  // console.log(router);

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  // const [clientLanguage, setClientLanguage] = useState(language)

  // useEffect(() => {
  //   setClientLanguage(language)
  // }, [language])

  return (
    <Layout>
      <Head>
        <title>
          {`${i18next.t('404', { ns: 'error' })} | ${i18next.t('siteTitle', {
            ns: 'common',
            // lng: clientLanguage,
          })}`}
        </title>
      </Head>
      <div tw="text-5xl my-20 text-align[center]">
        404 -{' '}
        {i18next.t('404', {
          ns: 'error',
          // lng: clientLanguage,
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  // console.log('params', params)
  // const language = 'de'
  // const language = getLanguage(params.lang);
  return {
    props: {
      // language,
    },
  }
}

export default Custom404

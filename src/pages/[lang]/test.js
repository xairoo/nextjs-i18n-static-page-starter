import i18next from 'i18next'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang'
import 'twin.macro'
import Layout from '../../components/layout'

export default function Test () {
  const { t } = i18next

  return (
    <Layout>
      <h2 tw='mt-5 mb-5 font-bold text-2xl'>test.js</h2>
      <p>{t('helloWorld')}</p>
    </Layout>
  )
}

export async function getStaticPaths () {
  const paths = getAllLanguageSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const language = getLanguage(params.lang)
  return {
    props: {
      language
    }
  }
}

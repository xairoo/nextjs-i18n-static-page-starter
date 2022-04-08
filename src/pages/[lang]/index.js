import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang'

export default function LangIndex ({ language }) {
  const { t } = i18next

  return (
    <Layout>
      <h2 tw='mt-5 mb-5 font-bold text-2xl'>index.js</h2>
      <div>
        {t('language')}: {language}
      </div>
      <Link href='/test'>
        <a>/{language}/test</a>
      </Link>
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

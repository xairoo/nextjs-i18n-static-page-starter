import Link from 'next/link';

import i18next from 'i18next';

import Layout from '../../components/Layout';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

export default function LangIndex({ language }) {
  return (
    <Layout>
      <h1 className="mt-5 mb-5 text-4xl font-bold">index.js</h1>
      <div>
        {i18next.t('language')}: {language}
      </div>
      <Link prefetch={false} href={`/[lang]/test`} as={`/${language}/test`}>
        <a className="text-blue-600">/{language}/test</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}

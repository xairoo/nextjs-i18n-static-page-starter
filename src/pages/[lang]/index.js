import Link from 'next/link';

import i18next from 'i18next';

import Layout from '../../components/Layout';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

export default function LangIndex({ language }) {
	return (
		<Layout>
			<div>
				{i18next.t('language')}: {language}
			</div>
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

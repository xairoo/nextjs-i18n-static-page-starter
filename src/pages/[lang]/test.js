import React, { useEffect } from 'react';
import i18next from 'i18next';

import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

import Layout from '../../components/Layout';

const Test = (props) => {
	return (
		<Layout>
			<h1 className="mt-5 mb-5 font-bold text-4xl">test.js</h1>
			<p>{i18next.t('helloWorld')}</p>
		</Layout>
	);
};

export default Test;

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

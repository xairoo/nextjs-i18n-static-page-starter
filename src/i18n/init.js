import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { languages, defaultLanguage } from './config';

const locales = Object.assign(
	{},
	...Object.keys(languages).map((index) => {
		return {
			[languages[index]]: {
				translations: require('../locales/' + languages[index] + '/translation.json'),
			},
		};
	}),
);

const lng =
	typeof window !== 'undefined' && localStorage.getItem('lng')
		? localStorage.getItem('lng')
		: defaultLanguage;

i18next.use(LanguageDetector).init({
	lng: lng,
	fallbackLng: defaultLanguage,
	resources: locales,
	ns: ['translations'],
	defaultNS: 'translations',
	returnObjects: true,
	debug: false,
	interpolation: {
		escapeValue: false, // not needed for react!!
	},
	react: {
		wait: true,
	},
});

export default i18next;

import React from 'react';
import Link from 'next/link';

import i18next from 'i18next';

import { languages } from '../i18n/config';

const LanguageMenu = (props) => {
	const classes = ['text-sm', 'md:text-base', 'm-0.5', 'p-0.5'];

	return (
		<div className="flex flex-wrap content-end text-gray-300">
			{languages.map((lang, index) => {
				const current = ['uppercase', i18next.language === lang ? 'text-blue-600' : ''];
				return (
					<Link key={index} href={'/' + lang}>
						<a className={classes.concat(current).join(' ').trim()}>{i18next.t(lang)}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default LanguageMenu;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import i18next from 'i18next';

import { languages } from '../i18n/config';

const LanguageMenu = (props) => {
  const router = useRouter();
  const { pathname } = router;

  const classes = ['text-sm', 'md:text-base', 'm-0.5', 'p-0.5'];

  return (
    <div className="flex flex-wrap content-end text-gray-300">
      {languages.map((lang, index) => {
        const current = ['uppercase', i18next.language === lang ? 'text-blue-600' : ''];
        const path = pathname.replace(/\[lang\]/i, lang);

        return (
          <Link key={index} prefetch={false} href={pathname} as={path}>
            <a className={classes.concat(current).join(' ').trim()}>{i18next.t(lang)}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageMenu;

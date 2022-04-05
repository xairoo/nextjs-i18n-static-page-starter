import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

import i18next from 'i18next';

import { languages } from '../i18n/config';

const LanguageMenu = (props) => {
  const router = useRouter();
  const { pathname } = router;

  const classes = ['text-1xl', 'md:text-base', 'm-0.5', 'p-0.5'];

  return (
    <div tw="flex flex-wrap content-end text-gray-300">
      {languages.map((lang, index) => {
        const path = pathname.replace(/\[lang\]/i, lang);

        return (
          <Link key={index} prefetch={false} href={pathname} as={path}>
            <a
              css={[
                tw`text-base m-0.5 p-0.5 cursor-pointer uppercase`,
                i18next.language === lang && tw`text-purple-400 underline `,
              ]}
            >
              {i18next.t(lang)}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageMenu;

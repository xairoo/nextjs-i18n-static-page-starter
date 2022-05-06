import i18next from 'i18next'
import { languages } from '../i18n'
import tw from 'twin.macro'
import Link from './link'

const LanguageMenu = () => {
  const { t } = i18next

  return (
    <div tw="flex flex-wrap content-end text-gray-300">
      {languages.map((lang, index) => {
        return (
          <Link key={index} locale={lang}>
            <a
              css={[
                tw`text-base m-0.5 p-0.5 cursor-pointer uppercase`,
                i18next.language === lang && tw`text-purple-400 underline `,
              ]}
            >
              {t(lang)}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageMenu

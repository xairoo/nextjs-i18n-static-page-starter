import Link from 'next/link'
import { useRouter } from 'next/router'
import { defaultLanguage, languages } from '../i18n'

const LinkComponent = ({ children, locale, ...props }) => {
  const router = useRouter()
  const { pathname, query, asPath } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  let href = props.href || pathname

  if (locale) {
    if (props.href) {
      console.log(1, href)
      href = `/${locale}${href}`
    } else {
      if (pathname.startsWith('/404')) {
        href = `/${locale}`
      } else {
        href = pathname.replace('[lang]', locale)
      }
    }
  } else {
    if (language) {
      console.log(3, href, language)
      href = `/${language}${href}`
    } else {
      console.log(4, href, language)
      href = `/${href}`
    }
  }

  // Fix double slashes
  href = href.replace(/([^:]\/)\/+/g, '$1').replace('//', '/')

  return (
    <Link href={href} passHref>
      {children}
    </Link>
  )
}

export default LinkComponent

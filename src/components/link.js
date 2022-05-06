import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComponent = ({ children, locale, ...props }) => {
  const router = useRouter()
  const { pathname, query } = router

  const lang = query.lang || ''

  let href = props.href || pathname

  if (locale) {
    if (props.href) {
      href = `/${locale}${href}`
    } else {
      if (pathname.startsWith('/404')) {
        href = `/${locale}`
      } else {
        href = pathname.replace('[lang]', locale)
      }
    }
  } else {
    href = `/${lang}${href}`
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

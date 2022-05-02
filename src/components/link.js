import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkComponent = ({ children, locale, ...props }) => {
  const router = useRouter()

  const lang = router.query.lang || ''

  let href = props.href || router.pathname

  if (locale) {
    if (props.href) {
      href = `/${locale}${href}`
    } else {
      href = router.pathname.replace('[lang]', locale)
    }
  } else {
    href = `/${lang}${href}`
  }

  // Fix double slashes
  href = href.replace(/([^:]\/)\/+/g, '$1')

  return (
    <Link href={href} passHref>
      {children}
    </Link>
  )
}

export default LinkComponent

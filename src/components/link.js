import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkComponent = ({ children, skipLocaleHandling, ...props }) => {
  const router = useRouter();

  const lang = props.lang || router.query.lang || '';

  let href = props.href || router.asPath;

  if (href.indexOf('http') === 0) {
    skipLocaleHandling = true;
  }

  if (lang && !skipLocaleHandling) {
    href = href ? `/${lang}${href}` : router.pathname.replace('[lang]', locale);
    href = href.replace('//', '/');
  }

  return <Link href={href}>{children}</Link>;
};

export default LinkComponent;

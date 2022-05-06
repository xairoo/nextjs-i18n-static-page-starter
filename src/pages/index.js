import { useEffect } from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

export default function Home({ allLangsData }) {
  const router = useRouter()

  useEffect(() => {
    const { pathname } = router
    if (pathname === '/') {
      router.push('/' + i18next.language.substring(0, 2))
    }
  })

  return null
}

import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Link from '../elements/Link'
import { Routes } from '../types'

const DIV = styled.div`
  display: flex;
`

type LocaleSwitcherProps = {
  routes: Routes
}

export default function LocaleSwitcher({
  routes,
}: LocaleSwitcherProps): ReactElement {
  const router = useRouter()

  if (router.locales && router.locales.length > 1) {
    return (
      <DIV>
        {router.locales.map((locale) => (
          <Link
            href={routes[locale][router.asPath] || router.asPath}
            locale={locale}
            key={locale}
          >
            {locale}
          </Link>
        ))}
      </DIV>
    )
  }

  return null
}

import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Link from '../elements/Link'

const DIV = styled.div`
  display: flex;
`

export default function LocaleSwitcher(): ReactElement {
  const router = useRouter()
  if (router.locales && router.locales.length > 1) {
    return (
      <DIV>
        {router.locales.map((locale) => (
          <Link href="/" locale={locale} key={locale}>
            {locale}
          </Link>
        ))}
      </DIV>
    )
  }

  return null
}

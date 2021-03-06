import React, { ReactElement, ReactNode } from 'react'
// import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
// import Button from '@material-ui/core/Button'

import { Routes } from '../../types'
import { NavigationItem } from '../../modules/Navigation'

import Meta from '../Meta'
// import exitPreview from 'services/api/preview/exitPreview'
import Header from './Header'
import Footer from './Footer'

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: calc(100vh - 88px);
  flex-direction: column;
`

type LayoutDefaultProps = {
  // preview: boolean
  children: ReactNode
  navigationItems: NavigationItem[]
  routes: Routes
}

export default function LayoutDefault({
  // preview,
  children,
  navigationItems,
  routes,
}: LayoutDefaultProps): ReactElement {
  // const router = useRouter()

  // async function onClickExitPreview() {
  //   await exitPreview()

  //   router.reload()
  // }

  return (
    <>
      <Meta />
      {/* {preview && (
        <div>
          <Button onClick={onClickExitPreview}>Exit Preview</Button>
        </div>
      )} */}

      <ContainerStyled>
        <Header navigationItems={navigationItems} routes={routes} />
        <main>{children}</main>
      </ContainerStyled>

      <Container>
        <Footer navigationItems={navigationItems} />
      </Container>
    </>
  )
}

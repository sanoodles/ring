import React, { ReactElement, ReactNode } from 'react'
// import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
// import Button from '@material-ui/core/Button'

import type { Config } from 'types/config'
import Meta from '../Meta'
// import exitPreview from 'services/api/preview/exitPreview'
import Header from './Header'
import Footer from './Footer'

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: calc(100vh - 88px);
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(6)}px;
`

type LayoutDefaultProps = {
  preview: boolean
  config: Config
  children: ReactNode
}

export default function LayoutDefault({
  preview,
  config,
  children,
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
        <Header config={config} />
        <main>{children}</main>
      </ContainerStyled>

      <Container>
        <Footer config={config} />
      </Container>
    </>
  )
}

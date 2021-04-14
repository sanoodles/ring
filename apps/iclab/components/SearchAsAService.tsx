import Head from 'next/head'
import { ReactElement } from 'react'

export default function SearchAsAService(): ReactElement {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/valtech-ch-saas.js" />
      </Head>
      <div id="@valtech-ch/saas" data-id="icweb" data-prefix="/saas" />
    </>
  )
}

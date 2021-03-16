import Head from 'next/head'
import React, { ReactElement } from 'react'

export default function Meta(): ReactElement {
  return (
    <Head>
      <meta name="description" content="ICLab" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
  )
}

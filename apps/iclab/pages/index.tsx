import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import { ContentTemplate } from '@ring/iclab-ui'
import { IContentPage } from '../types/generated/contentful'
import contentful from '../services/contentful'

// TODO investigate if ssg works with styled-components

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const entries = await contentful(preview).getEntries<IContentPage>({
    content_type: 'contentPage',
    'fields.uid': 'home',
  })

  const [contentPage] = entries.items

  return {
    props: { contentPage },
  }
}

export default function IndexPage({ contentPage }: HomePageProp): ReactElement {
  return <ContentTemplate fields={contentPage.fields} />
}

type HomePageProp = {
  contentPage: IContentPage
}

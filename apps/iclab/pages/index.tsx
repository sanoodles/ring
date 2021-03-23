import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import { ContentTemplate } from '@ring/iclab/ui'
import { IContentPage, IConfig } from '../types/generated/contentful'
import contentful from '../services/contentful'
import selectNavigationItems from '../services/contentful/selectNavigationItems'

export const getStaticProps: GetStaticProps = async ({
  locale,
  preview = false,
}) => {
  const [configEntries, contentPageEntries] = await Promise.all([
    contentful(preview).getEntries<IContentPage>({
      content_type: 'config',
      locale,
    }),
    contentful(preview).getEntries<IContentPage>({
      content_type: 'contentPage',
      'fields.slug': 'home',
      locale,
    }),
  ])

  const [config] = configEntries.items
  const [contentPage] = contentPageEntries.items

  return {
    props: { config, contentPage },
  }
}

export default function HomePage({
  config,
  contentPage,
}: HomePageProp): ReactElement {
  const navigationItems = selectNavigationItems(config)
  return (
    <ContentTemplate
      navigationItems={navigationItems}
      fields={contentPage.fields}
    />
  )
}

type HomePageProp = {
  config: IConfig
  contentPage: IContentPage
}

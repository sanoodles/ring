import React, { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'

import { ContentTemplate } from '@ring/iclab/ui'
import {
  IContentPage,
  IConfig,
  IContentPageFields,
} from '../types/generated/contentful'
import contentful from '../services/contentful'
import selectNavigationItems from '../services/contentful/selectNavigationItems'

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const preview = false
  const contentPageEntriesPerLocale = await Promise.all(
    locales.map((locale) =>
      contentful(preview).getEntries<IContentPageFields>({
        content_type: 'contentPage',
        'fields.slug[ne]': 'home',
        locale,
      }),
    ),
  )

  const paths = []

  contentPageEntriesPerLocale.forEach((contentPageEntries) => {
    contentPageEntries.items.forEach((item) => {
      paths.push(`/${item.sys.locale}/${item.fields.slug}`)
    })
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
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
      'fields.slug': params?.slug,
      locale,
    }),
  ])

  const [config] = configEntries.items
  const [contentPage] = contentPageEntries.items

  if (!config || !contentPage) {
    return {
      props: {},
    }
  }

  return {
    props: { config, contentPage },
  }
}

export default function ContentPage({
  config,
  contentPage,
}: ContentPageProps): ReactElement {
  if (!config || !contentPage) {
    return <Error statusCode={404} />
  }

  const navigationItems = selectNavigationItems(config)
  return (
    <ContentTemplate
      navigationItems={navigationItems}
      fields={contentPage.fields}
    />
  )
}

type ContentPageProps = {
  config: IConfig
  contentPage: IContentPage
}

import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

import { LayoutDefault } from '@ring/iclab/ui'

import { routes } from '../config'
import { IConfig, IConfigFields } from '../types/generated/contentful'
import contentful from '../services/contentful'
import selectNavigationItems from '../services/contentful/selectNavigationItems'

export const getStaticProps: GetStaticProps = async ({
  locale,
  preview = false,
}) => {
  const [configEntries] = await Promise.all([
    contentful(preview).getEntries<IConfigFields>({
      content_type: 'config',
      locale,
    }),
  ])

  const [config] = configEntries.items

  if (!config) {
    return {
      props: {},
    }
  }

  return {
    props: { config },
  }
}

const SearchAsAService = dynamic(
  () => import('../components/SearchAsAService'),
  { ssr: false },
)

type SearchAsAServicePageProps = {
  config: IConfig
}
export default function SearchAsAServicePage({
  config,
}: SearchAsAServicePageProps): ReactElement {
  const navigationItems = selectNavigationItems(config)

  return (
    <LayoutDefault navigationItems={navigationItems} routes={routes}>
      <SearchAsAService />
    </LayoutDefault>
  )
}

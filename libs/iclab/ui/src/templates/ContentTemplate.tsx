import React, { ReactElement } from 'react'

import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault'
import RichText from '../elements/RichText'
import { NavigationItem } from '../modules/Navigation'
import { Routes } from '../types'
import { IContentPageFields } from '../../types/generated/contentful'
import Teaser from '../modules/Teaser'

export default function ContentTemplate({
  navigationItems,
  fields,
  routes,
}: ContentTemplateProps): ReactElement {
  return (
    <LayoutDefault navigationItems={navigationItems} routes={routes}>
      {fields.sections.map((section) => {
        switch (section.sys.contentType.sys.id) {
          case 'teaser':
            return <Teaser />

          default:
            console.error(
              `Unexpected section type "${section.sys.contentType.sys.id}"`,
            )
            return null
        }
      })}
      <RichText richText={fields.text} />
    </LayoutDefault>
  )
}

type ContentTemplateProps = {
  navigationItems: NavigationItem[]
  fields: IContentPageFields
  routes: Routes
}

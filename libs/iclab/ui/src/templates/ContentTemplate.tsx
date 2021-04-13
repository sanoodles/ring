import React, { ReactElement } from 'react'
import { Document } from '@contentful/rich-text-types'

import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault'
import RichText from '../elements/RichText'
import { NavigationItem } from '../modules/Navigation'
import { Routes } from '../types'

export default function ContentTemplate({
  navigationItems,
  fields,
  routes,
}: ContentTemplateProps): ReactElement {
  return (
    <LayoutDefault navigationItems={navigationItems} routes={routes}>
      <RichText richText={fields.text} />
    </LayoutDefault>
  )
}

type ContentTemplateProps = {
  navigationItems: NavigationItem[]
  fields: ContentPage
  routes: Routes
}

type ContentPage = {
  text?: Document
}

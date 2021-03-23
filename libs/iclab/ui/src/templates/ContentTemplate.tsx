import React, { ReactElement } from 'react'
import { Document } from '@contentful/rich-text-types'

import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault'
import RichText from '../elements/RichText'
import { NavigationItem } from '../modules/Navigation'

export default function ContentTemplate({
  navigationItems,
  fields,
}: ContentTemplateProps): ReactElement {
  return (
    <LayoutDefault navigationItems={navigationItems}>
      <RichText richText={fields.text} />
    </LayoutDefault>
  )
}

type ContentTemplateProps = {
  navigationItems: NavigationItem[]
  fields: ContentPage
}

type ContentPage = {
  text?: Document
}

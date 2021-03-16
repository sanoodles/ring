import React, { ReactElement } from 'react'
import { Document } from '@contentful/rich-text-types'

import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault'
import RichText from '../elements/RichText'

export default function ContentTemplate({
  fields,
}: ContentTemplateProps): ReactElement {
  return (
    <LayoutDefault>
      <RichText richText={fields.text} />
    </LayoutDefault>
  )
}

type ContentTemplateProps = {
  fields: ContentPage
}

type ContentPage = {
  text?: Document
}

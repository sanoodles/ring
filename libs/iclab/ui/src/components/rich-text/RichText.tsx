import { ReactElement } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

type RichTextProps = {
  richText: Document
}

export default function RichText({ richText }: RichTextProps): ReactElement {
  return <>{documentToReactComponents(richText)}</>
}

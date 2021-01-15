import { EntryCollection } from 'contentful'

import getClient from '../contentful'
import { IPageFields } from '../../../types/generated/contentful'

type GetPageForHome = {
  query:
    | {
        order?: string
        limit?: number
        select?: string
      }
    | { [key: string]: string }
  preview?: boolean
}
export default async function getPageForHome({
  query,
  preview = false,
}: GetPageForHome): Promise<PostParsed[]> {
  const entries: EntryCollection<IPageFields> = await getClient(
    preview,
  ).getEntries({
    content_type: 'post',
    ...query,
  })

  return entries.items.map(postParser)
}

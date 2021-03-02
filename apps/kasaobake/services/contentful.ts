import { ContentfulClientApi, createClient } from 'contentful'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env as Record<string, string | undefined>

if (!CONTENTFUL_SPACE_ID) {
  throw new Error('Undefined "CONTENTFUL_SPACE_ID" environment variable')
}
if (!CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Undefined "CONTENTFUL_ACCESS_TOKEN" environment variable')
}
if (!CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  throw new Error(
    'Undefined "CONTENTFUL_PREVIEW_ACCESS_TOKEN" environment variable',
  )
}

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

export default function getClient(preview: boolean): ContentfulClientApi {
  return preview ? previewClient : client
}

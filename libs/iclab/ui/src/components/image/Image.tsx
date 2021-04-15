import ImageNext, { ImageProps as ImageNextProps } from 'next/image'
import { ReactElement } from 'react'

export type ImageProps = ImageNextProps

export function Image(props: ImageProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ImageNext {...props} />
}

export default Image

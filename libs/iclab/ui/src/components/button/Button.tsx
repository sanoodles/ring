import ButtonMui from '@material-ui/core/Button'
import { ReactElement } from 'react'
import { IButtonFields } from '../../types/generated/contentful'

export type ButtonProps = IButtonFields

export function Button(props: ButtonProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ButtonMui {...props} />
}

export default Button

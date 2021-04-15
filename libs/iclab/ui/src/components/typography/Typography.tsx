import TypographyMui, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography'
import { ReactElement } from 'react'

export type TypographyProps = MuiTypographyProps

export function Typography(props: TypographyProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TypographyMui {...props} />
}

export default Typography

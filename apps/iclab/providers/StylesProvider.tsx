import {
  StylesProvider as StylesProviderMUI,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { ReactElement } from 'react'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#B80420' },
    secondary: { main: '#fafafa' },
  },
})

type StylesProviderProps = {
  children: ReactElement
}

export default function StylesProvider({
  children,
}: StylesProviderProps): ReactElement {
  return (
    <StylesProviderMUI injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProviderMUI>
  )
}

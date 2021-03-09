import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactElement } from 'react'
import 'normalize.css/normalize.css'

import ProviderStyledComponents from './ProviderStyledComponents'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ProviderStyledComponents>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </ProviderStyledComponents>
  )
}

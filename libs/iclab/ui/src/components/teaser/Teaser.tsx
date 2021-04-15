import type { ReactElement } from 'react'

import { Route, Link } from 'react-router-dom'

import styled from 'styled-components'
import { ITeaserFields } from '../../types/generated/contentful'

export type TeaserProps = ITeaserFields

export function Teaser(props: TeaserProps): ReactElement {
  return (
    <StyledTeaser>
      <h1>Welcome to Teaser!</h1>

      <ul>
        <li>
          <Link to="/">Teaser root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the Teaser root route.</div>}
      />
    </StyledTeaser>
  )
}

export default Teaser

const StyledTeaser = styled.div`
  color: pink;
`

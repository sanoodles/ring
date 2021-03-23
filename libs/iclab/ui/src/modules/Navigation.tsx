import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '../elements/Link'

const Category = styled(Typography)`
  &:hover {
    text-decoration: underline;
  }
`

type NavigationProps = {
  items: NavigationItem[]
}

export default function Navigation({ items }: NavigationProps): ReactElement {
  return (
    <nav>
      <Grid container justify="center" spacing={3}>
        {items.map((item) => {
          return (
            <Grid key={item.slug} item>
              <Link href={`/${item.slug}`}>
                <Category variant="subtitle1">{item.title}</Category>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </nav>
  )
}

export type NavigationItem = { title: string; slug: string }

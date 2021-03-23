import Grid from '@material-ui/core/Grid'
import React, { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import Navigation, { NavigationItem } from '../../modules/Navigation'

type FooterProps = {
  navigationItems: NavigationItem[]
}

export default function Footer({ navigationItems }: FooterProps): ReactElement {
  return (
    <footer>
      <Grid container justify="space-between" alignItems="center">
        <Typography>ICLab</Typography>
        <Navigation items={navigationItems} />
      </Grid>
    </footer>
  )
}

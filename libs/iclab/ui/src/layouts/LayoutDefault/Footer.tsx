import Grid from '@material-ui/core/Grid'
import React, { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import Navigation from '../../modules/Navigation'

type FooterProps = {
  config: Config
}

export default function Footer({ config }: FooterProps): ReactElement {
  return (
    <footer>
      <Grid container justify="space-between" alignItems="center">
        <Typography>{config.siteName}</Typography>
        <Navigation config={config} />
      </Grid>
    </footer>
  )
}

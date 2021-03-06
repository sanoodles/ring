import React, { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Link from '../../elements/Link'
import Navigation, { NavigationItem } from '../../modules/Navigation'
import NavigationMobile from '../../modules/NavigationMobile'
import LocaleSwitcher from '../../modules/LocaleSwitcher'
import { Routes } from '../../types'

type HeaderProps = {
  navigationItems: NavigationItem[]
  routes: Routes
}

export default function Header({
  navigationItems,
  routes,
}: HeaderProps): ReactElement {
  return (
    <header>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Hidden smUp>
          <NavigationMobile items={navigationItems} />
        </Hidden>
        <Link href="/">ICLab</Link>
        <Hidden xsDown>
          <Navigation items={navigationItems} />
        </Hidden>
        <div>
          <LocaleSwitcher routes={routes} />
        </div>
      </Grid>
    </header>
  )
}

import React, { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconClose from '@material-ui/icons/Close'

import Link from '../elements/Link'

const DrawerMobile = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100vh;
  }
`

type NavigationMobileProps = {
  items: { name: string; slug: string }[]
  menuStatus: 'OPEN' | 'CLOSED'
  openMenu: () => void
  closeMenu: () => void
}

export default function NavigationMobile({
  items,
  menuStatus,
  openMenu,
  closeMenu,
}: NavigationMobileProps): ReactElement {
  return (
    <nav>
      <IconButton onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      <DrawerMobile
        anchor="top"
        open={menuStatus === 'OPEN'}
        onClose={closeMenu}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
        }}
      >
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>ICLab</Grid>
            <Grid item>
              <IconButton onClick={closeMenu}>
                <IconClose />
              </IconButton>
            </Grid>
          </Grid>
        </Container>

        <Box mb={2}>
          <Divider />
        </Box>

        <Container>
          <Grid container direction="column" justify="center" spacing={3}>
            {items.map((item) => (
              <Grid key={item.slug} item>
                <Link href={`/${item.slug}`} onClick={closeMenu}>
                  <Box px={2}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </DrawerMobile>
    </nav>
  )
}

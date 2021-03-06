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

import useToggle from '../hooks/useToggle'
import Link from '../elements/Link'
import { NavigationItem } from './Navigation'

const DrawerMobile = styled(Drawer)`
  .MuiDrawer-paper {
    height: 100vh;
  }
`

type NavigationMobileProps = {
  items: NavigationItem[]
}

export default function NavigationMobile({
  items,
}: NavigationMobileProps): ReactElement {
  const [menuStatus, { open, close }] = useToggle()

  return (
    <nav>
      <IconButton onClick={open}>
        <MenuIcon />
      </IconButton>
      <DrawerMobile
        anchor="top"
        open={menuStatus === 'OPEN'}
        onClose={close}
        ModalProps={{
          // Better open performance on mobile.
          keepMounted: true,
        }}
      >
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>ICLab</Grid>
            <Grid item>
              <IconButton onClick={close}>
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
                <Link href={`/${item.slug}`} onClick={close}>
                  <Box px={2}>
                    <Typography variant="subtitle1">{item.title}</Typography>
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

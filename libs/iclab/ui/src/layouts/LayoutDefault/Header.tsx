import React, { ReactElement, useReducer } from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Logo from '../../elements/Logo'
import Link from '../../elements/Link'
import Navigation from '../../modules/Navigation'
import NavigationMobile from '../../modules/NavigationMobile'

type HeaderProps = {
  config: {
    siteName: string
    logo: {
      url: string
      width: string
      height: string
    }
  }
}

export default function Header({ config }: HeaderProps): ReactElement {
  const [state, dispatch] = useReducer(reducer, { menuStatus: 'CLOSED' })

  return (
    <header>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Hidden smUp>
          <NavigationMobile
            config={config}
            menuStatus={state.menuStatus}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
        </Hidden>
        <Link href="/">
          <a>
            <Logo config={config} />
          </a>
        </Link>
        <Hidden xsDown>
          <Navigation config={config} />
        </Hidden>
        <div>{/* <LocaleSwitcher /> */}</div>
      </Grid>
    </header>
  )

  function openMenu() {
    dispatch({ type: 'MENU_OPEN' })
  }

  function closeMenu() {
    dispatch({ type: 'MENU_CLOSE' })
  }
}

type State = {
  menuStatus: 'OPEN' | 'CLOSED'
}

type Action = { type: 'MENU_OPEN' } | { type: 'MENU_CLOSE' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'MENU_OPEN':
      return { ...state, menuStatus: 'OPEN' }

    case 'MENU_CLOSE':
      return { ...state, menuStatus: 'CLOSED' }

    default:
      return state
  }
}

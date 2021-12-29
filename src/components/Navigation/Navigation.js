import React from 'react'
import { 
  Nav,
  NavItem,
  NavButton,
  LogoutSymbol,
} from './styledNavigation'

export default function Navigation({ loggedIn }) {
  return (
    <Nav>
      <NavItem to='/'>Home</NavItem>
      { loggedIn && <NavItem to='/saved-news'>Saved articles</NavItem> }
      { loggedIn ? 
        ( <NavButton>Elise<LogoutSymbol /></NavButton> ) 
        : 
        ( <NavButton>Sign in</NavButton> ) 
      }
    </Nav>
  )
}

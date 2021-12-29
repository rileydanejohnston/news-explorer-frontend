import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { 
  Nav,
  NavItem,
  NavItemActive,
  NavButton,
  LogoutSymbol,
} from './styledNavigation'

export default function Navigation({ loggedIn }) {

  const location = useLocation();

  return (
    <Nav>
      { location.pathname === '/'  ?
        ( <NavItemActive to='/'>Home</NavItemActive> )
          : 
        ( <NavItem to='/'>Home</NavItem> )
      }
      {
    // 1) show 'saved articles' link IF user is signed in
    // 2. if we are on the 'saved articles' path, return the active link (with underline), otherwise return the standard link
      loggedIn && 
      ( location.pathname === '/saved-news' ?
        ( <NavItemActive to='/saved-news'>Saved articles</NavItemActive> )
          : 
        ( <NavItem to='/saved-news'>Saved articles</NavItem> )
      )}

      { loggedIn ? 
        ( <NavButton>Elise<LogoutSymbol /></NavButton> ) 
        : 
        ( <NavButton>Sign in</NavButton> ) 
      }
    </Nav>
  )
}

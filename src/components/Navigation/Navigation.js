import { React } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { 
  Nav,
  NavList,
  NavItem,
  NavItemNews,
  NavItemBtn,
  NavText,
  NavButton,
  LogoutSymbol,
} from './styledNavigation'

export default function Navigation({ loggedIn, isMenuOpen }) {

  const location = useLocation();

  return (
    <Nav>
      <NavList isMenuOpen={isMenuOpen}>
        <NavItem path={location.pathname}>
          <NavText to='/'>Home</NavText>
        </NavItem>
      {
        loggedIn && 
        <NavItemNews path={location.pathname}>
          <NavText to='/saved-news'>Saved articles</NavText>
        </NavItemNews>
      }
        <NavItemBtn path={location.pathname}>
          { loggedIn ? 
            ( <NavButton loggedIn={loggedIn}>Elise<LogoutSymbol /></NavButton> ) 
          : 
            ( <NavButton loggedIn={loggedIn}>Sign in</NavButton> ) 
          }
        </NavItemBtn>
      </NavList>
    </Nav>
  )
}

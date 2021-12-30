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
      <NavList path={location.pathname} isMenuOpen={isMenuOpen}>
        <NavItem path={location.pathname}>
          <NavText path={location.pathname} to='/'>Home</NavText>
        </NavItem>
      {
        loggedIn && 
        <NavItemNews path={location.pathname}>
          <NavText  path={location.pathname} to='/saved-news'>Saved articles</NavText>
        </NavItemNews>
      }
        <NavItemBtn path={location.pathname}>
          { loggedIn ? 
            ( <NavButton path={location.pathname} loggedIn={loggedIn}>Elise<LogoutSymbol path={location.pathname}/></NavButton> ) 
          : 
            ( <NavButton path={location.pathname} loggedIn={loggedIn}>Sign in</NavButton> ) 
          }
        </NavItemBtn>
      </NavList>
    </Nav>
  )
}

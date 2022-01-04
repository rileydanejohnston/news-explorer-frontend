import { React, useContext } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { LoggedInContext } from '../../contexts/loggedInContext';
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

export default function Navigation({ isMenuOpen, handleLogIn, handleLogOut }) {

  const location = useLocation();
  const loggedIn = useContext(LoggedInContext);

  const handleLogInStatus = () => {
    if (loggedIn) {
      handleLogOut();
      return;
    }
    handleLogIn();
  }

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
        <NavItemBtn path={location.pathname} onClick={handleLogInStatus}>
          { loggedIn ? 
            ( <NavButton 
                path={location.pathname}
                loggedIn={loggedIn}
              >
                Elise
                <LogoutSymbol path={location.pathname}/>
              </NavButton> ) 
          : 
            ( <NavButton
                path={location.pathname}
                loggedIn={loggedIn}
              >
                Sign in
              </NavButton> ) 
          }
        </NavItemBtn>
      </NavList>
    </Nav>
  )
}

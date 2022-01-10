import { React, useContext } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { IsMenuOpenContext } from '../../contexts/isMenuOpenContext';
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

export default function Navigation({ openLoginWindow, handleLogOut }) {

  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const loggedIn = useContext(LoggedInContext);
  const isMenuOpen = useContext(IsMenuOpenContext);

  const handleLogInStatus = () => {
    if (loggedIn) {
      handleLogOut();
      return;
    }
    openLoginWindow();
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
                {currentUser.username}
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

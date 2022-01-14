import { React, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { IsLoginOpenContext } from '../../contexts/isLoginModalOpen';
import { IsMenuOpenContext } from '../../contexts/isMenuOpenContext';
import { SuccessRegisterContext } from '../../contexts/successRegisterContext';
import Navigation from '../Navigation/Navigation'
import { 
  Logo,
  Wrapper,
  LogoMenuWrapper,
  CloseButton,
  MenuButton,
} from './styledHeader'

export default function Header({ openLoginWindow, handleLogOut, setIsMenuOpen }) {
  const location = useLocation();
  const isMenuOpen = useContext(IsMenuOpenContext);
  const isLoginOpen = useContext(IsLoginOpenContext);
  const isSuccessOpen = useContext(SuccessRegisterContext);

  return (
    <Wrapper
      path={location.pathname}
      isMenuOpen={isMenuOpen}
    >
      <LogoMenuWrapper isLoginOpen={isLoginOpen} isSuccessOpen={isSuccessOpen}>
        <Logo to='/' path={location.pathname} >NewsExplorer</Logo>
        {
          isMenuOpen ? 
            <CloseButton path={location.pathname} onClick={() => setIsMenuOpen(!isMenuOpen)} /> 
          : 
            <MenuButton path={location.pathname} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        }
      </LogoMenuWrapper>
      <Navigation
        openLoginWindow={openLoginWindow}
        handleLogOut={handleLogOut}
      />
    </Wrapper>
  )
}

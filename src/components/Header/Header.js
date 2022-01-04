import { React, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import { 
  Logo,
  Wrapper,
  LogoMenuWrapper,
  CloseButton,
  MenuButton,
} from './styledHeader'

export default function Header({ handleLogIn, handleLogOut }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper path={location.pathname} isMenuOpen={isMenuOpen}>
      <LogoMenuWrapper>
        <Logo to='/' path={location.pathname} >NewsExplorer</Logo>
        {
          isMenuOpen ? 
            <CloseButton path={location.pathname} onClick={() => setIsMenuOpen(!isMenuOpen)} /> 
          : 
            <MenuButton path={location.pathname} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        }
      </LogoMenuWrapper>
      <Navigation
        isMenuOpen={isMenuOpen}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </Wrapper>
  )
}

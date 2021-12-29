import { React, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { 
  Logo,
  Wrapper,
  LogoMenuWrapper,
  CloseButton,
  MenuButton,
} from './styledHeader'

export default function Header({ loggedIn }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <LogoMenuWrapper>
        <Logo to='/'>NewsExplorer</Logo>
        {
          isMenuOpen ? 
            <CloseButton onClick={() => setIsMenuOpen(!isMenuOpen)} /> 
          : 
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
        }
      </LogoMenuWrapper>
      <Navigation loggedIn={loggedIn} isMenuOpen={isMenuOpen} />
    </Wrapper>
  )
}

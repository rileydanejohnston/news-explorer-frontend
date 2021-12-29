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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <LogoMenuWrapper>
        <Logo to='/'>NewsExplorer</Logo>
        {
          isOpen ? 
            <CloseButton onClick={() => setIsOpen(!isOpen)} /> 
          : 
            <MenuButton onClick={() => setIsOpen(!isOpen)} />
        }
      </LogoMenuWrapper>
      <Navigation loggedIn={loggedIn} />
    </Wrapper>
  )
}

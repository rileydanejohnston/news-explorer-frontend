import React from 'react'
import Navigation from '../Navigation/Navigation'
import { 
  Logo,
  Wrapper,
} from './styledHeader'

export default function Header({ loggedIn }) {
  return (
    <Wrapper>
      <Logo to='/'>NewsExplorer</Logo>
      <Navigation loggedIn={loggedIn} />
    </Wrapper>
  )
}

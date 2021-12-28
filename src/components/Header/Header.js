import React from 'react'
import { 
  Logo,
  Wrapper,
} from './styledHeader'

export default function Header() {
  return (
    <Wrapper>
      <Logo to='/'>NewsExplorer</Logo>
    </Wrapper>
  )
}

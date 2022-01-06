import React from 'react'
import { FooterWrapper, FooterItem, ApiSource, FooterNav, HomeLink, PracticumLink, IconsWrapper, LinkedinIcon, GithubIcon } from './styledFooter'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        <ApiSource>&copy; 2021 Supersite, Powered by News API</ApiSource>
      </FooterItem>
      <FooterItem>
        <FooterNav>
          <HomeLink to='/'>Home</HomeLink>
          <PracticumLink href='https://practicum.yandex.com/web/' target='_blank'>Practicum by Yandex</PracticumLink>
        </FooterNav>
        <IconsWrapper>
          <GithubIcon href='https://www.linkedin.com/in/rileyjohnston/' target='_blank'/>
          <LinkedinIcon href='https://github.com/rileydanejohnston' target='_blank'/>
        </IconsWrapper>
      </FooterItem>
    </FooterWrapper>
  )
}

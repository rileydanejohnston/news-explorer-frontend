import React from 'react'
import { FooterWrapper, ApiSource, FooterNav, HomeLink, PracticumLink, IconsWrapper, LinkedinIcon, GithubIcon, SourceItem, LinksItem } from './styledFooter'

export default function Footer() {
  return (
    <FooterWrapper>
      <SourceItem>
        <ApiSource>&copy; 2022 Supersite, Powered by News API</ApiSource>
      </SourceItem>
      <LinksItem>
        <FooterNav>
          <HomeLink to='/'>Home</HomeLink>
          <PracticumLink href='https://practicum.yandex.com/web/' target='_blank'>Practicum by Yandex</PracticumLink>
        </FooterNav>
        <IconsWrapper>
          <GithubIcon href='https://www.linkedin.com/in/rileyjohnston/' target='_blank'/>
          <LinkedinIcon href='https://github.com/rileydanejohnston' target='_blank'/>
        </IconsWrapper>
      </LinksItem>
    </FooterWrapper>
  )
}

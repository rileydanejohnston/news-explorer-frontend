import React from 'react'
import { Icon, NotFoundContent, NotFoundWrapper, Subtitle, Title } from './styledNotFound'

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <Icon />
        <Title>Nothing found</Title>
        <Subtitle>Sorry, but nothing matched your search terms.</Subtitle>
      </NotFoundContent>
    </NotFoundWrapper>
  )
}

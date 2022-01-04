import React from 'react'
import { NotFoundContent, NotFoundWrapper, Subtitle, Title } from '../NotFound/styledNotFound'

export default function SearchError() {
  // recycled these components from the NotFound component
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <Title>An error occured</Title>
        <Subtitle>Sorry something went wrong during the request. There may be a connection issue or the server may be down. Please try again later</Subtitle>
      </NotFoundContent>
    </NotFoundWrapper>
  )
}

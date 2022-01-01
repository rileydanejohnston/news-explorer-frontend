import React from 'react'
import { DevelopmentWrapper, CardList, Title, ShowMoreButton } from './styledNewsCardList'
import Card from '../Card/Card';

export default function NewsCardList({ loggedIn }) {
  return (
    <DevelopmentWrapper>
      <Title>Search results</Title>
      <CardList>
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
      </CardList>
      <ShowMoreButton>Show more</ShowMoreButton>
    </DevelopmentWrapper>
  )
}

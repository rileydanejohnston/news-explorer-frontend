import React from 'react'
import { CardsListWrapper, CardsList } from './styledCardList'
import Card from '../Card/Card';

export default function CardList({ loggedIn }) {
  return (
    <CardsListWrapper>
      <CardsList>
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
        <Card loggedIn={loggedIn} />
      </CardsList>
    </CardsListWrapper>
  )
}

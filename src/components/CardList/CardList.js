import React from 'react'
import { CardWrapper } from './styledCardList'
import Card from '../Card/Card';

export default function CardList({ loggedIn }) {
  return (
    <CardWrapper>
      <Card loggedIn={loggedIn} />
      <Card loggedIn={loggedIn} />
      <Card loggedIn={loggedIn} />
      <Card loggedIn={loggedIn} />
    </CardWrapper>
  )
}

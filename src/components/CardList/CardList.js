import React from 'react'
import { CardsListWrapper, CardsList } from './styledCardList'
import Card from '../Card/Card';

export default function CardList({ loggedIn, displayArticles }) {
  return (
    <CardsListWrapper>
      <CardsList>
        {
          displayArticles.map((card, index) => {
            return (
              <Card card={card} key={index} loggedIn={loggedIn} />
            )
          })
        }
      </CardsList>
    </CardsListWrapper>
  )
}

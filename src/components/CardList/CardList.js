import React from 'react'
import { CardsListWrapper, CardsList } from './styledCardList'
import Card from '../Card/Card';

export default function CardList({ loggedIn, allArticles }) {
  console.log(allArticles);
  return (
    <CardsListWrapper>
      <CardsList>
        {
          allArticles.map((card, index) => {
            return (
              <Card card={card} key={index} loggedIn={loggedIn} />
            )
          })
        }
      </CardsList>
    </CardsListWrapper>
  )
}

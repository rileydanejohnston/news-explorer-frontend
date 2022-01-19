import React from 'react'
import { CardsListWrapper, CardsList } from './styledCardList'
import Card from '../Card/Card';

export default function CardList({ displayArticles, cardIconClick, loggedOutIconClick }) {

  return (
    <CardsListWrapper>
      <CardsList>
        {
          displayArticles.map((card, index) => {
            return (
              <Card
                card={card}
                key={index}
                cardIconClick={cardIconClick}
                loggedOutIconClick={loggedOutIconClick}
              />
            )
          })
        }
      </CardsList>
    </CardsListWrapper>
  )
}

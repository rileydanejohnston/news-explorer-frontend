import React from 'react'
import { CardsListWrapper, CardsList } from './styledCardList'
import Card from '../Card/Card';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function CardList({ displayArticles, cardIconClick, loggedOutIconClick }) {

  const location = useLocation();

  return (
    <CardsListWrapper>
      <CardsList>
        {
          displayArticles.map((card, index) => {
            return (
              <Card
                card={card}
                key={location.pathname === '/saved-news' ? card._id : index}
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

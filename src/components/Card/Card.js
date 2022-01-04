import { React, useState } from 'react'
import { BookmarkIcon, DeleteIcon, ActionButton, CardWrapper, Date, Image, InfoWrapper, NewsSource, Subtitle, Title, SelectedIcon, ToolTip, Category } from './styledCard'
import card1 from '../../images/nature.png';
import { useLocation } from 'react-router-dom';

export default function Card({ loggedIn, card, cardIconClick }) {

  const location = useLocation();
  const [iconHover, setIconHover] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  const handleIconEnter = () => {
    setIconHover(true);

    // prevent tool tip from opening if logged in on the home page
    // it should open if:
    // 1) not logged in at home
    // 2) on /saved-news route
    if (loggedIn && location.pathname === '/') {
      return;
    }
    setIsToolTipOpen(true);
  }

  const handleIconExit = () => {
    setIconHover(false);
    setIsToolTipOpen(false);
  }

  const handleDeleteClick = () => {
    console.log(`testing delete click`);
    cardIconClick(card);
  }

  const handleBookmarkClick = () => {
    if (loggedIn) {
      // send card back to app
      cardIconClick(card);
    }
  }

  return (
    <CardWrapper>
      {
        location.pathname === '/saved-news' && <Category>Yellowstone</Category>
      }
      <ToolTip 
        isOpen={isToolTipOpen}
        path={location.pathname}
      >
        {location.pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
      </ToolTip>
        {
          location.pathname === '/' ?
          (
            <ActionButton 
              onMouseEnter={handleIconEnter} 
              onMouseLeave={handleIconExit}
              onClick={handleBookmarkClick}
            >
              { card.isSaved ? 
                <SelectedIcon /> : 
                <BookmarkIcon iconHover={iconHover}/>
              }
            </ActionButton>
          )
        :
          (
            <ActionButton 
              onMouseEnter={handleIconEnter} 
              onMouseLeave={handleIconExit}
              onClick={handleDeleteClick}
            >
              <DeleteIcon iconHover={iconHover}/>
            </ActionButton>
          )
        }
      <Image src={card.url} alt={card.description} />
      <InfoWrapper>
        <Date>{card.date}</Date>
        <Title>{card.title}</Title>
        <Subtitle>{card.description}</Subtitle>
        <NewsSource>{card.source}</NewsSource>
      </InfoWrapper>
    </CardWrapper>
  )
}

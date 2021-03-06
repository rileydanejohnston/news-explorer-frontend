import { React, useContext, useState } from 'react'
import { BookmarkIcon, DeleteIcon, ActionButton, CardWrapper, Date, Image, InfoWrapper, NewsSource, Subtitle, Title, SelectedIcon, ToolTip, Category } from './styledCard'
import { useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/loggedInContext';

export default function Card({ card, cardIconClick, loggedOutIconClick }) {

  const loggedIn = useContext(LoggedInContext);
  const location = useLocation();
  const [iconHover, setIconHover] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  const handleIconEnter = () => {
    if (loggedIn) {
      setIconHover(true);
    }

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

  const handleIconClick = () => {
    if (loggedIn) {
      // send card back to app
      cardIconClick(card);
    }
    else {
      loggedOutIconClick();
    }
  }

  return (
    <CardWrapper>
      {
        location.pathname === '/saved-news' && <Category>{card.keyword}</Category>
      }
      <ToolTip 
        isOpen={isToolTipOpen}
        path={location.pathname}
      >
        {location.pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
      </ToolTip>
        <ActionButton 
          onMouseEnter={handleIconEnter} 
          onMouseLeave={handleIconExit}
          onClick={handleIconClick}
        >
        {
          location.pathname === '/' ?
          (
            card.isSaved && loggedIn ? 
            ( <SelectedIcon /> ) : 
            ( <BookmarkIcon iconHover={iconHover}/> )
          ) :
          ( <DeleteIcon iconHover={iconHover}/> )
        }
        </ActionButton>
      <Image src={card.urlToImage} alt={card.description} onClick={() => {window.open(card.url, '_blank')}}/>
      <InfoWrapper>
        <Date>{card.date}</Date>
        <Title>{card.title}</Title>
        <Subtitle>{card.description}</Subtitle>
        <NewsSource>{card.source}</NewsSource>
      </InfoWrapper>
    </CardWrapper>
  )
}

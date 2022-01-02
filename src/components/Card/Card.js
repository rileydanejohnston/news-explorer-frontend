import { React, useState } from 'react'
import { Icon, ActionButton, CardWrapper, Date, Image, InfoWrapper, NewsSource, Subtitle, Title, SelectedIcon, ToolTip, Category } from './styledCard'
import card1 from '../../images/nature.png';
import { useLocation } from 'react-router-dom';

export default function Card({ loggedIn, card }) {

  const location = useLocation();
  const [iconHover, setIconHover] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
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

  const handleClick = () => {
    if (loggedIn) {
      setIsSaved(!isSaved);
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
        Sign in to save articles
      </ToolTip>
      <ActionButton 
        onMouseEnter={handleIconEnter} 
        onMouseLeave={handleIconExit}
        onClick={handleClick}
      >
        {
  // the home path has ability to like/unlike cards
  // saved-news path only had the ability to delete 
          location.pathname === '/' ?
          (
            isSaved ? 
            <SelectedIcon /> : 
            <Icon iconHover={iconHover} path={location.pathname}/>
          )
        :
          (
            <Icon iconHover={iconHover} path={location.pathname}/>
          )
        }
      </ActionButton>
      <Image src={card.url} alt='Nature photo' />
      <InfoWrapper>
        <Date>{card.date}</Date>
        <Title>{card.title}</Title>
        <Subtitle>{card.description}</Subtitle>
        <NewsSource>{card.source}</NewsSource>
      </InfoWrapper>
    </CardWrapper>
  )
}

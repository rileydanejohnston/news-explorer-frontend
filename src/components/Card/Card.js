import { React, useState } from 'react'
import { Icon, ActionButton, CardWrapper, Date, Image, InfoWrapper, NewsSource, Subtitle, Title, SelectedIcon, ToolTip, Category } from './styledCard'
import card1 from '../../images/nature.png';
import { useLocation } from 'react-router-dom';

export default function Card() {

  const location = useLocation();
  const [iconHover, setIconHover] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  const handleIconEnter = () => {
    setIconHover(true);
    setIsToolTipOpen(true);
  }

  const handleIconExit = () => {
    setIconHover(false);
    setIsToolTipOpen(false);
  }

  return (
    <CardWrapper>
      {
        location.pathname === '/saved-news' && <Category>Yellowstone</Category>
      }
      <ToolTip isOpen={isToolTipOpen}>Sign in to save articles</ToolTip>
      <ActionButton 
        onMouseEnter={handleIconEnter} 
        onMouseLeave={handleIconExit}
        onClick={() => setIsSaved(!isSaved)} 
      >
        {
          isSaved ? 
          <SelectedIcon /> : 
          <Icon iconHover={iconHover} />
        }
      </ActionButton>
      <Image src={card1} alt='Nature photo' />
      <InfoWrapper>
        <Date>February 19, 2019</Date>
        <Title>Nature makes you feel better</Title>
        <Subtitle>We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.</Subtitle>
        <NewsSource>National Geographic</NewsSource>
      </InfoWrapper>
    </CardWrapper>
  )
}

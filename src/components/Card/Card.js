import { React, useState } from 'react'
import { Icon, ActionButton, CardWrapper, Date, Image, InfoWrapper, NewsSource, Subtitle, Title } from './styledCard'
import card1 from '../../images/nature.png';

export default function Card() {

  const [iconHover, setIconHover] = useState(false);

  const handleIconEnter = () => {
    setIconHover(true);
  }

  const handleIconExit = () => {
    setIconHover(false);
  }

  return (
    <CardWrapper>
      <ActionButton 
      onMouseEnter={handleIconEnter} 
      onMouseLeave={handleIconExit}
      >
        <Icon iconHover={iconHover} />
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

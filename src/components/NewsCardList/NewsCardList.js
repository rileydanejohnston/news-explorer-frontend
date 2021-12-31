import React from 'react'
import { CardList, Card, Date, DevelopmentWrapper, Image, InfoWrapper, NewsSource, Subtitle, Title } from './styledNewsCardList'
import card1 from '../../images/nature.png';

export default function NewsCardList() {
  return (
    <DevelopmentWrapper>
      <CardList>
        <Card>
          <Image src={card1} alt='Nature photo'></Image>
          <InfoWrapper>
            <Date>February 19, 2019</Date>
            <Title>Nature makes you feel better</Title>
            <Subtitle>We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.</Subtitle>
            <NewsSource>National Geographic</NewsSource>
          </InfoWrapper>
        </Card>
      </CardList>
    </DevelopmentWrapper>
  )
}

import React from 'react'
import { DevelopmentWrapper, CardList } from './styledNewsCardList'
import Card from '../Card/Card';

export default function NewsCardList() {
  return (
    <DevelopmentWrapper>
      <CardList>
        <Card />
      </CardList>
    </DevelopmentWrapper>
  )
}

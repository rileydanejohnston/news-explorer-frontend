import React from 'react'
import { DevelopmentWrapper, CardList } from './styledNewsCardList'
import Card from '../Card/Card';

export default function NewsCardList({ loggedIn }) {
  return (
    <DevelopmentWrapper>
      <CardList>
        <Card loggedIn={loggedIn} />
      </CardList>
    </DevelopmentWrapper>
  )
}

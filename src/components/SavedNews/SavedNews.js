import React from 'react'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import CardList from '../CardList/CardList'
import { SavedNewsWrapper } from './styledSavedNews'

export default function SavedNews({ articleCount, displayArticles, cardIconClick }) {
  return (
    <SavedNewsWrapper>
      <SavedNewsHeader articleCount={articleCount} />
      { articleCount !== 0 && 
      <CardList
        displayArticles={displayArticles}
        cardIconClick={cardIconClick}
      /> }
    </SavedNewsWrapper>
  )
}

import React from 'react'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import CardList from '../CardList/CardList'

export default function SavedNews({ articleCount, displayArticles, cardIconClick }) {
  return (
    <>
      <SavedNewsHeader articleCount={articleCount} />
      { articleCount !== 0 && 
      <CardList
        displayArticles={displayArticles}
        cardIconClick={cardIconClick}
      /> }
    </>
  )
}

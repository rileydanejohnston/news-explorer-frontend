import React from 'react'
import Header from '../Header/Header'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import CardList from '../CardList/CardList'

export default function SavedNews({ handleLogIn, handleLogOut, articleCount, displayArticles, cardIconClick }) {
  return (
    <>
      <Header
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
      <SavedNewsHeader articleCount={articleCount} />
      { articleCount !== 0 && 
      <CardList
        displayArticles={displayArticles}
        cardIconClick={cardIconClick}
      /> }
    </>
  )
}

import React from 'react'
import Header from '../Header/Header'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import CardList from '../CardList/CardList'

export default function SavedNews({ openLoginWindow, handleLogOut, articleCount, displayArticles, cardIconClick }) {
  return (
    <>
      <Header
        openLoginWindow={openLoginWindow}
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

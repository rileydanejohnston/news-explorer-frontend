import { React }from 'react'
import CardList from '../CardList/CardList'
import { ShowMoreButton } from './styledSearchResults'
import { SearchResultsWrapper, Title } from './styledSearchResults'

export default function SearchResults({ displayArticles, handleShowMoreClick, moreArticles, cardIconClick, loggedOutIconClick }) {

  return (
    <SearchResultsWrapper>
      <Title>Search results</Title>
      <CardList
        displayArticles={displayArticles}
        cardIconClick={cardIconClick}
        loggedOutIconClick={loggedOutIconClick}
      />
      { moreArticles && <ShowMoreButton onClick={handleShowMoreClick}>Show more</ShowMoreButton> }
    </SearchResultsWrapper>
  )
}

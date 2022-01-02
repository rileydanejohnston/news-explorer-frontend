import { React, useEffect }from 'react'
import CardList from '../CardList/CardList'
import { ShowMoreButton } from './styledSearchResults'
import { SearchResultsWrapper, Title } from './styledSearchResults'

export default function SearchResults({ loggedIn, displayArticles, handleShowMoreClick }) {

  // get 3 articles when SearchResults mounts
  useEffect(() => {
    handleShowMoreClick();
  }, []);

  return (
    <SearchResultsWrapper>
      <Title>Search results</Title>
      <CardList loggedIn={loggedIn} displayArticles={displayArticles} />
      <ShowMoreButton onClick={handleShowMoreClick}>Show more</ShowMoreButton>
    </SearchResultsWrapper>
  )
}

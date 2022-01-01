import React from 'react'
import CardList from '../CardList/CardList'
import { ShowMoreButton } from './styledSearchResults'
import { SearchResultsWrapper, Title } from './styledSearchResults'

export default function SearchResults({ loggedIn }) {
  return (
    <SearchResultsWrapper>
      <Title>Search results</Title>
      <CardList loggedIn={loggedIn}/>
      <ShowMoreButton>Show more</ShowMoreButton>
    </SearchResultsWrapper>
  )
}

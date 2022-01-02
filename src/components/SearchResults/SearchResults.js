import React from 'react'
import CardList from '../CardList/CardList'
import { ShowMoreButton } from './styledSearchResults'
import { SearchResultsWrapper, Title } from './styledSearchResults'

export default function SearchResults({ loggedIn, allArticles }) {
  return (
    <SearchResultsWrapper>
      <Title>Search results</Title>
      <CardList loggedIn={loggedIn} allArticles={allArticles} />
      <ShowMoreButton>Show more</ShowMoreButton>
    </SearchResultsWrapper>
  )
}

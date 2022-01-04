import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import { ImageWrapper } from './styledMain';

export default function Main({ loggedIn, isSearching, isSearchResultsOpen, noSearchResults, handleSearchSubmit, displayArticles, handleShowMoreClick, moreArticles, cardIconClick }) {
  return (
    <>
      <ImageWrapper>
        <Header loggedIn={loggedIn} />
        <SearchForm handleSearchSubmit={handleSearchSubmit}/>
      </ImageWrapper>
      { isSearching && <Preloader /> }
      { isSearchResultsOpen && 
        <SearchResults 
          loggedIn={loggedIn} 
          displayArticles={displayArticles} 
          handleShowMoreClick={handleShowMoreClick} 
          moreArticles={moreArticles}
          cardIconClick={cardIconClick}
        /> 
      }
      { noSearchResults && <NotFound /> }
      <About />
    </>
  )
}

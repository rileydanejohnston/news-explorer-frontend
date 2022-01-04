import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import SearchError from '../SearchError/SearchError';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import { ImageWrapper } from './styledMain';

export default function Main({ isSearching, isSearchResultsOpen, noSearchResults, handleSearchSubmit, isErrorOpen, displayArticles, handleShowMoreClick, moreArticles, cardIconClick, handleLogIn, handleLogOut }) {
  return (
    <>
      <ImageWrapper>
        <Header
          handleLogIn={handleLogIn}
          handleLogOut={handleLogOut}
        />
        <SearchForm handleSearchSubmit={handleSearchSubmit}/>
      </ImageWrapper>
      { isSearching && <Preloader /> }
      { isSearchResultsOpen && 
        <SearchResults
          displayArticles={displayArticles} 
          handleShowMoreClick={handleShowMoreClick} 
          moreArticles={moreArticles}
          cardIconClick={cardIconClick}
        /> 
      }
      { noSearchResults && <NotFound /> }
      { isErrorOpen && <SearchError /> }
      <About />
    </>
  )
}

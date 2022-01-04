import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import { ImageWrapper } from './styledMain';

export default function Main({ isSearching, isSearchResultsOpen, noSearchResults, handleSearchSubmit, displayArticles, handleShowMoreClick, moreArticles, cardIconClick, handleLogIn, handleLogOut }) {
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
      <About />
    </>
  )
}

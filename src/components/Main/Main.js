import React from 'react'
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import SearchError from '../SearchError/SearchError';
import SearchResults from '../SearchResults/SearchResults';

export default function Main({ isSearching, isSearchResultsOpen, noSearchResults, isErrorOpen, displayArticles, handleShowMoreClick, moreArticles, cardIconClick }) {
  return (
    <>
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

import { React, useState } from "react";
import GlobalStyle from "../GlobalStyles/globalStyles";
import { Route, Switch } from 'react-router-dom';
import {
  Wrapper,
} from './styledApp';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CardList from "../CardList/CardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import newsApi from "../../utils/NewsApi";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
  const [noSearchResults, setNoSearchResults] = useState(false);

  const resetSearchResults = () => {
    // shouldn't need setIsSearching? add just in case
    setIsSearching(false);
    setIsSearchResultsOpen(false);
    setNoSearchResults(false);
  }

  const handleSearchSubmit = (keyword) => {
    // start with nothing open
    resetSearchResults();
    // show preloader
    setIsSearching(true);
    // search for news
    newsApi.getNews(keyword)
      .then((res) => {
        console.log(res);
        // turn off preloader
        setIsSearching(false);
        // show no search results if necessary
        if (res.totalResults === 0) {
          setNoSearchResults(true);
          return;
        }
        // show results that were found
        setIsSearchResultsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Switch>
        <ProtectedRoute exact path='/saved-news' loggedIn={true}>
          <Header loggedIn={true}/>
          <SavedNewsHeader/>
          <CardList loggedIn={true} />
        </ProtectedRoute>
        <Route exact path='/'>
          <Main 
            loggedIn={true}
            isSearching={isSearching}
            isSearchResultsOpen={isSearchResultsOpen}
            noSearchResults={noSearchResults}
            handleSearchSubmit={handleSearchSubmit}
          />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

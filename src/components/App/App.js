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
  const [allArticles, setAllArticles] = useState([]);

  const resetSearchResults = () => {
    // shouldn't need setIsSearching? add just in case
    setIsSearching(false);
    setIsSearchResultsOpen(false);
    setNoSearchResults(false);
  }

  const getDateFormat = (rawDate) => {
    const allMonths = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const newDate = new Date(rawDate);
    const month = allMonths[newDate.getMonth() + 1];
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const handleSearchSubmit = (keyword) => {
    // start with nothing open
    resetSearchResults();
    // show preloader
    setIsSearching(true);
    // search for news
    newsApi.getNews(keyword)
      .then(({ articles }) => {
        // turn off preloader
        setIsSearching(false);
        // show no search results if necessary
        if (articles.length === 0) {
          setNoSearchResults(true);
          return;
        }

        // iterate through, create objects of necessary data
        const articleCollection = articles.map((data) => {
          return {
            title: data.title,
            description: data.description,
            url: data.urlToImage,
            source: data.source.name,
            date: getDateFormat(data.publishedAt)
          }
        });

        setAllArticles(articleCollection);

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

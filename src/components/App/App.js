import { React, useState, useEffect } from "react";
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
import { LoggedInContext } from "../../contexts/loggedInContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [displayArticles, setDisplayArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const [moreArticles, setMoreArticles] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  // check if there's anything in local storage when page opens
  useEffect(() => {
    if (localStorage.getItem('display-articles')) {
      const tempDisplayArticles = JSON.parse(localStorage.getItem('display-articles'));
      const tempAllArticles = JSON.parse(localStorage.getItem('all-articles'));
      const tempIndex = localStorage.getItem('index');

      setDisplayArticles(tempDisplayArticles);
      setAllArticles(tempAllArticles);
      setIndex(tempIndex);
      setIsSearchResultsOpen(true);
    }
  }, [])

  // handles initial search -> display 3 articles
  useEffect(() => {
    if (isSearchResultsOpen === true && index === 0) {
      handleShowMoreClick();
    }
  }, [isSearchResultsOpen, index])

  // are more articles available?
  // determines if 'show more' button is visible
  useEffect(() => {
    checkMoreArticles();
  }, [displayArticles])

  // saves local storage every time the articles/index changes
  useEffect(() => {
    // don't save when search resets to zero
    if (displayArticles.length !== 0 || index !== 0) {
      localStorage.setItem('display-articles', JSON.stringify(displayArticles));
      localStorage.setItem('index', index);
    }
  }, [displayArticles, index])


  const handleLogIn = () => {
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  // update button liked status on frontend
  const updateSaved = (card) => {
    const tempArticles = displayArticles.map((articles) => {
      if (articles.title === card.title) {
        return {
            title: articles.title,
            description: articles.description,
            url: articles.url,
            source: articles.source,
            date: articles.date,
            isSaved: !articles.isSaved,
            keyword: articles.keyword
        };
      }
      return articles;
    });

    setDisplayArticles(tempArticles);

    // call backend function
    if (card.isSaved) {
      card.isSaved = false;
      deleteCard(card);
    }
    else if (!card.isSaved) {
      card.isSaved = true;
      saveCard(card);
    }
  }

  const saveCard = (card) => {
    // FUTURE WORK -> make post request to save card
    console.log(`this card will be saved`);
    console.log(card);
  }

  const deleteCard = (card) => {
    // FUTURE WORK -> make delete request to delete card
    console.log(`this card will be deleted`);
    console.log(card);
  }

  // used to update saved articles - related to ^^^
  useEffect(() => {
    const tempArticles = displayArticles.filter((articles) => {
      return articles.isSaved === true;
    });

    setSavedArticles(tempArticles);
  }, [displayArticles]);
  
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
            date: getDateFormat(data.publishedAt),
            isSaved: false,
            keyword: keyword
          }
        });

        localStorage.setItem('all-articles', JSON.stringify(articleCollection));
        setAllArticles(articleCollection);
        setIsSearchResultsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleShowMoreClick = () => {
    // copy arrays so we can modify them easily
    let tempAll = [...allArticles];
    let tempDisplay = [...displayArticles];

    const limit = index + 3;
    let i = index;

    // loop for 3 articles AND while within the array size
    while(i < limit && tempAll[i] !== undefined)
    {
      tempDisplay.push(tempAll[i]);
      ++i;
    }
    
    // adjust index if we went out of bounds
    if (tempAll[i] === undefined) {
      --i;
    }

    // set states
    setIndex(i);
    setDisplayArticles(tempDisplay);
  }

  const checkMoreArticles = () => {
    if (allArticles.length === displayArticles.length) {
      setMoreArticles(false);
    }
    else {
      setMoreArticles(true);
    }
  }

  const resetSearchResults = () => {
    // shouldn't need setIsSearching? add just in case
    setIsSearching(false);
    setIsSearchResultsOpen(false);
    setNoSearchResults(false);
    setAllArticles([]);
    setDisplayArticles([]);
    setIndex(0);
    setMoreArticles(true);
  }

  const getDateFormat = (rawDate) => {
    const allMonths = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const newDate = new Date(rawDate);
    const month = allMonths[newDate.getMonth() + 1];
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Switch>
        <LoggedInContext.Provider value={loggedIn}>
          <ProtectedRoute exact path='/saved-news'>
            <Header
              handleLogIn={handleLogIn}
              handleLogOut={handleLogOut}
            />
            <SavedNewsHeader articleCount={savedArticles.length} />
            { savedArticles.length !== 0 && 
            <CardList
              displayArticles={savedArticles}
              cardIconClick={updateSaved}
            /> }
          </ProtectedRoute>
          <Route exact path='/'>
            <Main 
              handleLogIn={handleLogIn}
              handleLogOut={handleLogOut}
              isSearching={isSearching}
              isSearchResultsOpen={isSearchResultsOpen}
              noSearchResults={noSearchResults}
              handleSearchSubmit={handleSearchSubmit}
              displayArticles={displayArticles}
              handleShowMoreClick={handleShowMoreClick}
              moreArticles={moreArticles}
              cardIconClick={updateSaved}
            />
          </Route>
        </LoggedInContext.Provider>
      </Switch>
    </Wrapper>
  );
}

export default App;

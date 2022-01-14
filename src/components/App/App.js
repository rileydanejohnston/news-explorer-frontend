import { React, useState, useEffect } from "react";
import GlobalStyle from "../GlobalStyles/globalStyles";
import { Route, Switch } from 'react-router-dom';
import {
  Wrapper,
} from './styledApp';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import newsApi from "../../utils/NewsApi";
import { LoggedInContext } from "../../contexts/loggedInContext";
import { IsMenuOpenContext } from "../../contexts/isMenuOpenContext";
import { IsLoginOpenContext } from "../../contexts/isLoginModalOpen";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { SuccessRegisterContext } from "../../contexts/successRegisterContext";
import SavedNews from "../SavedNews/SavedNews";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";
import Footer from "../Footer/Footer";
import HeaderGroup from "../HeaderGroup/HeaderGroup";
import * as auth from '../../utils/authRequests';

function App() {
  let location = window.location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [displayArticles, setDisplayArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const [moreArticles, setMoreArticles] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoginRegisterModalOpen, setIsLoginRegisterModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSuccessRegisterModalOpen, setIsSuccessRegisterModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState('');

  // check local storage when App mounts
  useEffect(() => {
    const boolDisplay = JSON.parse(localStorage.getItem('display-articles'));
    const boolAll = JSON.parse(localStorage.getItem('all-articles'));
    const boolUser = JSON.parse(localStorage.getItem('current-user'));
    const boolSaved = JSON.parse(localStorage.getItem('saved-articles'));

    // only do something with local storage if all exist
    // otherwise, start fresh. K.I.S.S.
    if (boolDisplay && boolAll && boolSaved) {
      setDisplayArticles(boolDisplay);
      setAllArticles(boolAll);
      setSavedArticles(boolSaved);
      setIndex(boolDisplay.length);

      if (boolDisplay.length !== 0) {
        setIsSearchResultsOpen(true);
      }
    }

    // keep user and search separate
    // user can make searches while not logged in
    if (boolUser) {
      setCurrentUser(boolUser);
      setLoggedIn(true);
    }
  }, [])

  // update local storage for search results
  useEffect(() => {
    localStorage.setItem('all-articles', JSON.stringify(allArticles));
    localStorage.setItem('display-articles', JSON.stringify(displayArticles));
    localStorage.setItem('saved-articles', JSON.stringify(savedArticles));
  }, [allArticles, displayArticles, savedArticles])

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


  function openLoginWindow() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsLoginRegisterModalOpen(true);
  }

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((res) => {
        setLoggedIn(true);
        setToken(res.token);
        localStorage.setItem('jwt', res.token);
        closeAllModals();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(email, password, username) {
    // make api request when backend is ready
    
    auth.register(email, password, username)
      .then((res) => {
        setIsLoginRegisterModalOpen(false);
        setIsSuccessRegisterModalOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('all-articles');
    localStorage.removeItem('display-articles');
    localStorage.removeItem('current-user');
    localStorage.removeItem('saved-articles');
  }

  function closeAllModals() {
    setIsLoginRegisterModalOpen(false);
    setIsSuccessRegisterModalOpen(false);
    setIsRegisterModalOpen(false);
  }

  function registerSuccessToLogin() {
    closeAllModals();
    setIsLoginRegisterModalOpen(true);
  }

  function updateSaved(card) {
    // update frontend - which bookmark icon shows
    const tempArticles = displayArticles.map((articles) => {
      if (articles.title === card.title) {
        return {
          title: articles.title,
          description: articles.description,
          urlToImage: articles.urlToImage,
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

    // update card on the backend - post or delete request
    card.isSaved = !card.isSaved;
    if (card.isSaved) {
      saveArticle(card);
    }
    else if (!card.isSaved) {
      deleteArticle(card);
  }

  // request to backend to save article
  function saveArticle(card) {
    setSavedArticles([...savedArticles, card]);
  }

  // request to backend to delete article from saved
  function deleteArticle(card) {
    const tempSaved = savedArticles.filter((arts) => {
      return card.title !== arts.title;
    })
    setSavedArticles(tempSaved);
  }
  }
  
  function handleSearchSubmit(keyword) {
    // start with nothing open
    resetSearchResults();
    // show preloader
    setIsSearching(true);
    // search for news
    newsApi.getNews(keyword)
      .then(({ articles }) => {

        console.log(articles);
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
            urlToImage: data.urlToImage,
            url: data.url,
            source: data.source.name,
            date: getDateFormat(data.publishedAt),
            isSaved: false,
            keyword: keyword
          };
        });

        setAllArticles(articleCollection);
        setIsSearchResultsOpen(true);
      })
      .catch((err) => {
        setIsErrorOpen(true);
        console.log(err);
      })
      .finally(() => {
        setIsSearching(false);
      });
  }

  function handleShowMoreClick() {
    // copy arrays so we can modify them easily
    let tempAll = [...allArticles];
    let tempDisplay = [...displayArticles];

    const limit = index + 3;
    let i = index;

    // loop for 3 articles AND while within the array size
    while (i < limit && tempAll[i] !== undefined) {
      tempDisplay.push(tempAll[i]);
      ++i;
    }

    // adjust index if we went out of bounds
    if (tempAll[i] === undefined) {
      i = allArticles.length;
    }

    // set states
    setIndex(i);
    setDisplayArticles(tempDisplay);
  }

  function checkMoreArticles() {
    if (allArticles.length === displayArticles.length || allArticles.length === 0) {
      setMoreArticles(false);
    }
    else {
      setMoreArticles(true);
    }
  }

  function resetSearchResults() {
    // shouldn't need setIsSearching? add just in case
    setIsSearching(false);
    setIsSearchResultsOpen(false);
    setNoSearchResults(false);
    setAllArticles([]);
    setDisplayArticles([]);
    setIndex(0);
    setMoreArticles(true);
    setIsErrorOpen(false);
  }

  function getDateFormat(rawDate) {
    const allMonths = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const newDate = new Date(rawDate);
    const month = allMonths[newDate.getMonth() + 1];
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  function formLinkClick() {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }

  return (
    <Wrapper path={location}>
      <GlobalStyle />
      <LoggedInContext.Provider value={loggedIn}>
        <IsMenuOpenContext.Provider value={isMenuOpen} >
          <IsLoginOpenContext.Provider value={isLoginRegisterModalOpen}>
            <CurrentUserContext.Provider value={currentUser}>
              <SuccessRegisterContext.Provider value={isSuccessRegisterModalOpen}>
                <HeaderGroup 
                  openLoginWindow={openLoginWindow}
                  handleLogOut={handleLogOut}
                  handleSearchSubmit={handleSearchSubmit}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </SuccessRegisterContext.Provider>
            </CurrentUserContext.Provider>
          </IsLoginOpenContext.Provider>
          <Switch>
            <ProtectedRoute exact path='/saved-news'>
              <CurrentUserContext.Provider value={currentUser}>
                <SavedNews 
                  openLoginWindow={openLoginWindow}
                  handleLogOut={handleLogOut}
                  articleCount={savedArticles.length}
                  displayArticles={savedArticles}
                  cardIconClick={updateSaved}
                />
              </CurrentUserContext.Provider>
            </ProtectedRoute>
            <Route exact path='/'>
              <Main
                isSearching={isSearching}
                isSearchResultsOpen={isSearchResultsOpen}
                noSearchResults={noSearchResults}
                isErrorOpen={isErrorOpen}
                displayArticles={displayArticles}
                handleShowMoreClick={handleShowMoreClick}
                moreArticles={moreArticles}
                cardIconClick={updateSaved}
              />
            </Route>
          </Switch>
        </IsMenuOpenContext.Provider>
      </LoggedInContext.Provider>
      <Footer />
      <RegisterSuccessModal 
        isSuccessRegisterModalOpen={isSuccessRegisterModalOpen}
        closeAllModals={closeAllModals}
        handleLinkClick={registerSuccessToLogin}
      />
      <IsLoginOpenContext.Provider value={isLoginRegisterModalOpen}>
        <LoginRegisterModal 
          closeAllModals={closeAllModals}
          formLinkClick={formLinkClick}
          isRegisterModalOpen={isRegisterModalOpen}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      </IsLoginOpenContext.Provider>
    </Wrapper>
  );
}

export default App;

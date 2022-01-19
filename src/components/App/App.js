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
import Api from "../../utils/Api";

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
  const { NODE_ENV } = process.env;
  const baseUrl = NODE_ENV === 'production' ? 'https://api.my-news-explorer.students.nomoreparties.sbs' : 'http://localhost:3000';

  const api = new Api(baseUrl, {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`
  });

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setToken(localStorage.getItem('jwt'));
    }
  }, [])

  useEffect(() => {
    api.getArticles()
      .then((articles) => {
        const tempSaved = articles.map((art) => {
          return {
            keyword: art.keyword,
            title: art.title,
            date: art.date,
            source: art.source,
            owner: art.owner,
            _id: art._id,
            urlToImage: art.image,
            description: art.text,
            url: art.link,
            isSaved: true
          };
        })
        setSavedArticles(tempSaved);
      })
      .catch((err) => console.log(err));
  }, [token])
  // fire upon loggedIn? token?

  useEffect(() => {
    if (token) {
      api.getCurrentUser()
      .then(({ email, name }) => {
        setCurrentUser({ email, username: name });
        setLoggedIn(true);
      })
      .catch(err => console.log(err));
    }
  }, [token])

  // check local storage when App mounts
  useEffect(() => {
    const boolDisplay = JSON.parse(localStorage.getItem('display-articles'));
    const boolAll = JSON.parse(localStorage.getItem('all-articles'));

    // only do something with local storage if all exist
    // otherwise, start fresh. K.I.S.S.
    if (boolDisplay && boolAll) {
      setDisplayArticles(boolDisplay);
      setAllArticles(boolAll);
      setIndex(boolDisplay.length);

      if (boolDisplay.length !== 0) {
        setIsSearchResultsOpen(true);
      }
    }
  }, [currentUser])

  // update local storage for search results
  useEffect(() => {
    localStorage.setItem('all-articles', JSON.stringify(allArticles));
    localStorage.setItem('display-articles', JSON.stringify(displayArticles));
  }, [allArticles, displayArticles])

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
        closeAllModals();
        setIsSuccessRegisterModalOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    setCurrentUser({});
    setToken('');
    setDisplayArticles([]);
    setAllArticles([]);
    setIndex(0);
    setIsSearchResultsOpen(false);
    localStorage.removeItem('all-articles');
    localStorage.removeItem('display-articles');
    localStorage.removeItem('jwt');
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

  function updateCardsFrontend(card) {
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
          keyword: articles.keyword,
          _id: card._id
        };
      }
      return articles;
    });

    setDisplayArticles(tempArticles);
  }

  // request to backend to save article
  function saveArticle({ keyword, title, description, date, source, url, urlToImage }) {
    // remove isSaved property, deal with urlToImg/image
    const tempCard = { keyword, title, description, date, source, url, urlToImg: urlToImage
    };

    api.saveArticle(tempCard)
    .then(({ keyword, title, text, date, source, link,
      image, owner, _id }) => {

      // add properties specific to savedArticles
      const cardToSave = { keyword, title, date, source, owner, _id, urlToImage: image, description: text, url: link, isSaved: true
      };

      setSavedArticles([...savedArticles, cardToSave]);
      updateCardsFrontend(cardToSave);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // request to backend to delete article from saved
  function deleteArticle(article) {
    api.deleteArticle(article._id)
    .then(({ _id }) => {
      const tempSaved = savedArticles.filter((arts) => {
        return _id !== arts._id;
      });

      setSavedArticles(tempSaved);
      updateCardsFrontend(article);
    })
    .catch((err) => console.log(err));
  }

  function handleIconClick(article) {
    if (article.isSaved) {
      deleteArticle(article);
    }
    else {
      saveArticle(article);
    }
  }

  function handleLoggedOutIconClick() {
    setIsRegisterModalOpen(true);
    setIsLoginRegisterModalOpen(true);
  }
  
  function handleSearchSubmit(keyword) {
    // start with nothing open
    resetSearchResults();
    // show preloader
    setIsSearching(true);
    // search for news
    newsApi.getNews(keyword)
      .then(({ articles }) => {

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
                  cardIconClick={handleIconClick}
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
                cardIconClick={handleIconClick}
                loggedOutIconClick={handleLoggedOutIconClick}
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

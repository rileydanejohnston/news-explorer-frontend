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
import SavedNews from "../SavedNews/SavedNews";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";
import Footer from "../Footer/Footer";
import HeaderGroup from "../HeaderGroup/HeaderGroup";

function App() {
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


  const openLoginWindow = () => {
    setIsLoginRegisterModalOpen(true);
  }

  const handleLogin = (email, password) => {
    // make api request when backend is ready
    /* 
    authApi.login(email, password)
      .then((res) => {
        setCurrentUser
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err);
      })
    */
    console.log(`email: ${email}, password: ${password}`);
    setLoggedIn(true);
    closeAllModals();
  }

  const handleRegister = (email, password, username) => {
    // make api request when backend is ready
    /* 
    authApi.register(email, password, username)
      .then((res) => {
        setIsSuccessRegisterModalOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
    */
    console.log(`email: ${email}, password: ${password}, username: ${username}`);
    closeAllModals();
    setIsSuccessRegisterModalOpen(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('all-articles');
    localStorage.removeItem('display-articles');
    localStorage.removeItem('index');
  }

  const closeAllModals = () => {
    setIsLoginRegisterModalOpen(false);
    setIsSuccessRegisterModalOpen(false);
    setIsRegisterModalOpen(false);
  }

  const registerSuccessToLogin = () => {
    closeAllModals();
    setIsLoginRegisterModalOpen(true);
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
        setIsErrorOpen(true);
        console.log(err);
      })
      .finally(() => {
        setIsSearching(false);
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
    setIsErrorOpen(false);
  }

  const getDateFormat = (rawDate) => {
    const allMonths = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const newDate = new Date(rawDate);
    const month = allMonths[newDate.getMonth() + 1];
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const formLinkClick = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <LoggedInContext.Provider value={loggedIn}>
        <IsMenuOpenContext.Provider value={isMenuOpen} >
          <HeaderGroup 
            openLoginWindow={openLoginWindow}
            handleLogOut={handleLogOut}
            handleSearchSubmit={handleSearchSubmit}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Switch>
            <ProtectedRoute exact path='/saved-news'>
              <SavedNews 
                openLoginWindow={openLoginWindow}
                handleLogOut={handleLogOut}
                articleCount={savedArticles.length}
                displayArticles={savedArticles}
                cardIconClick={updateSaved}
              />
            </ProtectedRoute>
            <Route exact path='/'>
              <Main 
                openLoginWindow={openLoginWindow}
                handleLogOut={handleLogOut}
                isSearching={isSearching}
                isSearchResultsOpen={isSearchResultsOpen}
                noSearchResults={noSearchResults}
                isErrorOpen={isErrorOpen}
                handleSearchSubmit={handleSearchSubmit}
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
      <LoginRegisterModal 
        isLoginRegisterModalOpen={isLoginRegisterModalOpen}
        closeAllModals={closeAllModals}
        formLinkClick={formLinkClick}
        isRegisterModalOpen={isRegisterModalOpen}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </Wrapper>
  );
}

export default App;

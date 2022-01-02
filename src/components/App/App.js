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
import newsApi from "../../utils/api";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [isSearching, setIsSearching] = useState(true);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(true);

  const handleSearchSubmit = (keyword) => {
    newsApi.getNews(keyword)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
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
            handleSearchSubmit={handleSearchSubmit}
          />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

import { React } from "react";
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

function App() {
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
          <Main loggedIn={true} />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

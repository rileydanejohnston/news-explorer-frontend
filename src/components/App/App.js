import { React } from "react";
import GlobalStyle from "../GlobalStyles/globalStyles";
import { Route, Switch } from 'react-router-dom';
import {
  Wrapper,
} from './styledApp';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Switch>
        <ProtectedRoute exact path='/saved-news' loggedIn={false}>
          <h1>Testing saved-news route</h1>
        </ProtectedRoute>
        <Route exact path='/'>
          <h1>Testing main route</h1>
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

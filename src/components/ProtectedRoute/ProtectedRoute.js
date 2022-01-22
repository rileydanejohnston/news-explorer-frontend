import { React, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoggedInContext } from '../../contexts/loggedInContext';

export default function ProtectedRoute({ children, ...props }) {

  const loggedIn = useContext(LoggedInContext);
  
  return (
    <Route {...props}>
    { (localStorage.getItem('jwt') || loggedIn) ? children : <Redirect to='/' /> }
    </Route>
  );
}

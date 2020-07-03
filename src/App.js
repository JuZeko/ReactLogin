import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Pirmas from './Components/Pirmas'
import Antras from './Components/Antras'
import Main from './Components/Main'
import NoPage from './Components/NoPage'
import PrivateRoute from './Components/PrivateRoute'
import Auth from './Auth'
import Connect from './Components/Connect'

function App() {
 


  return (
    <Router>  
    <ul>
          <li>
            <Link to="/">Pagrindinis Puslapis</Link>
          </li>
          <li>
            <Link to="/Connect">Prisijungimas </Link>
          </li>
          <li>
            <Link to="/Main">Slaptas Puslapis kuriam reikia prisijungimo</Link>
          </li>
        </ul>

      <Switch>
          <Route exact path="/">
          <Pirmas/>
          </Route>
          <Route path="/Connect">
            <Connect />
          </Route>
          <PrivateRoute path="/Main">
            <Main/>
          </PrivateRoute>
          <Route path="/404">
            <NoPage />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;

import './App.css';
import Home from './pages/Home'
import DetailUser from './pages/DetailUser'
import Favorite from './pages/Favorite'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import AddUser from './components/AddUser'

function App () {
  return (
    <Router>
      <div className="container-fluid btn-primary">
        <nav>
          <ul>
            <li>
              <Link to="/" className="text-light">Home</Link>
            </li>
            <li>
              <Link to="/favorite" className="text-light">Favorite</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/user/:id">
          <DetailUser></DetailUser>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

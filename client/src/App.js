import './App.css';
import Home from './pages/Home'
import DetailUser from './pages/DetailUser'
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
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
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

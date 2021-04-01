import './App.css';
import Home from './pages/Home'
import DetailUser from './pages/DetailUser'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import AddUser from './components/AddUser'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/notFound">
          <NotFound />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/user/:id">
          <DetailUser />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

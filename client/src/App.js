import './App.css';
import Home from './pages/Home'
import DetailUser from './pages/DetailUser'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
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
      <Navbar></Navbar>
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

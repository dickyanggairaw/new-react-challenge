import React from 'react'
import {useSelector} from 'react-redux'
import Data from '../components/Data'

function Favorite () {
  const {favorites} = useSelector(state => state.FavoriteReducer)
  return (
    <div className="container">
      <h2>My Favorite List</h2>
      <div className="row">
        {
          favorites.length === 0 ? <div className="container loader">
            <p>dont have favorite</p>
          </div> : 
          favorites.map(user => {
            return <Data user={user} key={user.id}></Data>
          })
        }
      </div>
    </div>
  )
}

export default Favorite
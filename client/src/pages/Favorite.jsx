import React from 'react'
import {useSelector} from 'react-redux'
import Data from '../components/Data'

function Favorite () {
  const favorites = useSelector(state => state.favorites)
  return (
    <div className="container">
      <h2>ini Favorite page</h2>
      <div className="row">
        {
          favorites.length === 0 ? <div>favorite kosong</div> : 
          favorites.map(user => {
            return <Data user={user} key={user.id}></Data>
          })
        }
      </div>
    </div>
  )
}

export default Favorite
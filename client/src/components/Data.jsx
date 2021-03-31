import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import heart from '../assets/heart2.svg'
import {useSelector} from 'react-redux'
import {addFavoriteUser} from '../store/actions'


function Data (props) {
  let history = useHistory()
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch()
  function findUser (event, id) {
    event.preventDefault()
    history.push('/user/' + id)
  }

  function addFavorite (event, user) {
    let flag = false
    event.preventDefault()
    favorites.forEach(dataFavorite => {
      if(dataFavorite.firstName === user.firstName) {
        history.push('/favorite')
        flag = true
      }
    })
    if(!flag) {
      dispatch(addFavoriteUser(user))
      history.push('/favorite')
    }
  }

    const {user} = props
    const divCard = {
      backgroundColor: 'bisque',
      borderRadius: '10px'
    }
    const divImage = {
      borderRadius: '20px'
    }
    return (
      <div className="col-sm-6 col-lg-3 border-0 shadow">
        <div className="card m-2  img-hover-zoom img-hover-zoom--colorize" style={divCard}>
          <img src={user.picture} style={divImage} className="p-2" alt=""/>    
          <img src={heart} onClick={(event) => addFavorite(event, user)} alt="" className="above-right-icon"/>      
          <h3 onClick={(event) => findUser(event, user.id)}>{user.firstName}</h3>
        </div>
      </div>
    )
  }

export default Data
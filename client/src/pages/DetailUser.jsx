import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {findUserAsync} from '../store/actions'

function DetailUser () {
  const dispatch = useDispatch()
  const {user,loading, error} = useSelector(state => state.UserReducer)
    let {id} = useParams()
    console.log(user)
    useEffect (() => {
      dispatch(findUserAsync(id))
    }, [dispatch, id])
    
    if(error) {
      return <h1>{error.message}</h1>
    }
    const imgStyle = {
      height: '300px',
      borderRadius: '20px'
    }
  return (
    <div>
      <h2 className="container">Profile {user.firstName}</h2><br/>
      {
        loading ? <div className="container loader"></div> :
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={user.picture} style={imgStyle} alt=""/>
            </div>
            <div className="col-8">
              <h4>{user.title}. {user.firstName} {user.lastName}</h4>
              <p>{user.email}</p>
              <p>{user.gender}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailUser
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

function DetailUser () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
    let {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect (() => {
      setLoading(true)
      fetch('https://dummyapi.io/data/api/user/' + id, {
        method: 'GET',
        headers: {
          "app-id": '60617f6bc94f68d6a87e63b3'
        }
      })
        .then(res => res.json())
        .then(data => {
          dispatch({type: 'user/setUser', payload: data})
        })
        .catch(err => setError(err))
        .finally( _=> setLoading(false))
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
      <h3>Ini Halaman Detail User {id}</h3>
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
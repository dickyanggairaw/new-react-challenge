import React, {useState, useEffect} from 'react'
import Data from '../components/Data'
import Search from '../components/Search'
import {useSelector, useDispatch} from 'react-redux'
// import AddUser from './components/AddUser'

function Home () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect (() => {
    setLoading(true)
    fetch('https://dummyapi.io/data/api/user', {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res.data)
        dispatch({type: 'users/setUsers', payload: res.data})
      })
      .catch(err => setError(err))
      .finally( _=> setLoading(false))
  }, [dispatch])

  function searchEngine(search){
    users.filter(user => user.firstName.toLowerCase() === search.toLowerCase())
  }

  if(error) {
    return <h1>{error}</h1>
  }
    return (
    <div className="container mt-4">
      <Search searchEngine={searchEngine}></Search>
      <br></br>
      <div className="row">
        {
          loading ? <div className="container loader"></div> :
          users.map(user => {
          return <Data user={user} key={user.id}></Data>
        })} 
        {/* <AddUser addUser={this.addUser}></AddUser> */}
      </div>     
    </div>
    )
}

export default Home
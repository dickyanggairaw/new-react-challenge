import React, {useEffect} from 'react'
import Data from '../components/Data'
import Search from '../components/Search'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUserAsync} from '../store/actions'
import {useHistory} from 'react-router-dom'
// import AddUser from './components/AddUser'

function Home () {
  const dispatch = useDispatch()
  let history = useHistory()
  const {users, loading, error} = useSelector(state => state.UserReducer)
  useEffect (() => {
    dispatch(fetchUserAsync())
  }, [dispatch])

  function searchEngine(search){
    const user = users.filter(user => user.firstName.toLowerCase() === search.toLowerCase())
    if(user.length > 0){
      history.push('/user/' + user[0].id)
    }else {
      history.push('/notFound')
    }
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
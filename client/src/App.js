import './App.css';
import Data from './components/Data'
import Search from './components/Search'
import useFetch from './helpers/hooks/useFetch'
// import AddUser from './components/AddUser'

function App () {
  const {data: users, loading, error, setDatas, fetchApi} = useFetch('https://dummyapi.io/data/api/user')
  function findUser (id) {
    fetch(`https://dummyapi.io/data/api/user/${id}`, {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }
  function searchEngine(search){
    if(search === '') {
      fetchApi()
    }else {
      const dataSearch = users.filter(user => user.firstName.toLowerCase() === search.toLowerCase())
      setDatas(dataSearch)
    }
  }
  if(error) {
    return <h1>{error.message}</h1>
  }
    return (
    <div className="container mt-4">
      <Search searchEngine={searchEngine}></Search>
      <br></br>
      <div className="row">
        {
          loading ? <div className="container loader"></div> :
          users.map(user => {
          return <Data findUser={findUser} user={user} key={user.id}></Data>
        })} 
        {/* <AddUser addUser={this.addUser}></AddUser> */}
      </div>     
    </div>
    )
}

export default App;

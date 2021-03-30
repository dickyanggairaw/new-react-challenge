// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Data from './components/Data'
import Search from './components/Search'
// import AddUser from './components/AddUser'

function App () {
  const [users, setUsers] = useState([])
  function fetchApi() {
    fetch(' https://dummyapi.io/data/api/user', {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => console.log(err))
  } 
  // addUser = (user) =>  {
  //   user.id = Math.random();
  //   let newData = this.state.users.concat(user)
  //   this.setState({
  //     ...this.state,
  //     users: newData
  //   })
  // }
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
      setUsers(dataSearch)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])
    return (
    <div className="container mt-4">
      <Search searchEngine={searchEngine}></Search>
      <br></br>
      <div className="row">
        {users.map(user => {
          return <Data findUser={findUser} user={user} key={user.id}></Data>
        })} 
        {/* <AddUser addUser={this.addUser}></AddUser> */}
      </div>     
    </div>
    )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

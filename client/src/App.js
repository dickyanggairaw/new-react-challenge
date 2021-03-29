// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Data from './components/Data'
import Search from './components/Search'
// import AddUser from './components/AddUser'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  } 
  fetchApi(){
    fetch(' https://dummyapi.io/data/api/user', {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          users: res.data
        })
      })
      .catch(err => console.log(err))
  } 
  addUser = (user) =>  {
    user.id = Math.random();
    let newData = this.state.users.concat(user)
    this.setState({
      ...this.state,
      users: newData
    })
  }
  findUser = (id) => {
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
  searchEngine = (search) => {
    const dataSearch = this.state.users.filter(user => user.firstName.toLowerCase() === search.toLowerCase())
    this.setState({
      ...this.state,
      users: dataSearch
    })
  }
  render() {
    const {users} = this.state
    return (
    <div className="container mt-4">
      <Search searchEngine={this.searchEngine}></Search>
      <br></br>
      <div className="row">
        {users.map(user => {
          return <Data findUser={this.findUser} user={user} key={user.id}></Data>
        })} 
        {/* <AddUser addUser={this.addUser}></AddUser> */}
      </div>     
    </div>
    )
  }

  componentDidMount() {
    this.fetchApi()
  }
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

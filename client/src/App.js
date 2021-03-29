// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Data from './components/Data'
import AddUser from './components/AddUser'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  } 
  fetchApi(){
    fetch(' https://dummyapi.io/data/api/user?page=1&limit=10', {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          users: res.data
        })
      })
      .catch(err => console.log(err))
  } 
  addUser = (user) =>  {
    console.log(this.state.users)
    user.id = Math.random();
    let newData = this.state.users.concat(user)
    console.log(newData)
    this.setState({
      ...this.state,
      users: newData
    })
  }
  render() {
    const {users} = this.state
    return (
    <div className="container">
      <div className="row">
        {users.map(user => {
          return <Data user={user} key={user.id}></Data>
        })} 
        <AddUser addUser={this.addUser}></AddUser>
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

import React from 'react'

class AddUser extends React.Component {
  constructor () {
    super()
    this.state = {
      email: 'rio@mail.com',
      firstName: 'rio',
      lastName: 'dicky',
      image: ''
    }
  }
  addUser(event){
    event.preventDefault()
    console.log(this.state)
    this.props.addUser(this.state)
  }

  handleOnChange = (event) =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <>
        <form onSubmit={(event) => this.addUser(event)}>
          <label>Email</label>
          <input type="text" name="email" id="" onChange={(event) => this.handleOnChange(event)}/><br/>
          <label>firstName</label>
          <input type="text" name="firstName" id="" onChange={(event) => this.handleOnChange(event)}/><br/>
          <label>lastName</label>
          <input type="text" name="lastName" id="" onChange={(event) => this.handleOnChange(event)}/><br/>
          <label>image</label>
          <input type="text" name="image" id="" onChange={(event) => this.handleOnChange(event)}/><br/>
          <button>Submit</button>
        </form>
      </>
    )
  }
}

export default AddUser
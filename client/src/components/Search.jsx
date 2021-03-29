import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  searchEngine (event) {
    event.preventDefault()
    this.props.searchEngine(this.state.search)
  }
  handleOnChange = (event) =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <form onSubmit={(event) => this.searchEngine(event)}>
        <div className="form-group">
          <input type="text" onChange={(event) => this.handleOnChange(event)} className="form-control" name="search" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    )
  }
}

export default Search
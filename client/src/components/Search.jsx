import React, {useState} from 'react'

function Search (props) {
  const [search, setSearch] = useState('')
  function searchEngine (event) {
    event.preventDefault()
    props.searchEngine(search)
  }
  function handleOnChange(event) {
    setSearch(event.target.value)
  }
    return (
      <form onSubmit={(event) => searchEngine(event)}>
        <div className="form-group">
          <input type="text" onChange={(event) => handleOnChange(event)} className="form-control" name="search" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    )
}

export default Search
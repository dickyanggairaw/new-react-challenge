import React from 'react'
import {Link} from 'react-router-dom'

function Navbar () {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-dark">
        <nav>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="text-light nav-link">Home</Link>
            </li>
            <li>
              <Link to="/favorite" className="text-light nav-link" >Favorite</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
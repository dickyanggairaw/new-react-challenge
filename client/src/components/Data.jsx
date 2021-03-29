import React from 'react'

class Data extends React.Component {
  render () {
    const {user} = this.props
    return (
      <React.Fragment>
        <div className="card col-3">
          <img src={user.picture} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{user.title}</h5>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Data
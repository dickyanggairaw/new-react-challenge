import React from 'react'

function Data (props) {
  function findUser (event, id) {
    event.preventDefault()
    props.findUser(id)
  }

    const {user} = props
    const divCard = {
      backgroundColor: 'bisque',
      borderRadius: '10px'
    }
    const divStyle = {
      textDecoration: 'none',
      textAlign: 'center'
    }
    const divImage = {
      borderRadius: '20px'
    }
    return (
      <div className="col-sm-6 col-lg-3 border-0 shadow">
        <div className="card m-2" style={divCard}>
          <img src={user.picture} style={divImage} className="p-2" alt=""/>          
          <div className="card-body">
            <a href="#" style={divStyle} onClick={(event) => findUser(event, user.id)}><p>{user.firstName}</p></a>             
          </div>
        </div>
      </div>
    )
  }

export default Data